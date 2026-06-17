#!/usr/bin/env node
// In-job fact-injecting proxy for the OrcaRouter Code Review cascade.
//
// OCR can only send the auth header (x-api-key / authorization) — it has no way
// to attach custom headers. But the routing DSL routes on `headers[...]`. This
// tiny loopback proxy bridges the gap: OCR talks to it (OCR_LLM_URL points
// here), it stamps the cascade's raw-fact headers, and forwards everything —
// including SSE streams — to the real OrcaRouter endpoint.
//
// It is ephemeral: bound to 127.0.0.1 on an OS-assigned port, lives only for
// the duration of one Actions job, and dies with it. Nothing is deployed.
//
// The facts are re-read from CR_FACTS_FILE on EVERY request, so the driver can
// flip them between the cheap pass and the in-run strong escalation without
// restarting the proxy. The file is a flat JSON object of header->value; an
// absent/empty/unparseable file stamps nothing (the DSL falls through to its
// default, i.e. the cheap tier).
//
// Env:
//   ORCAROUTER_URL  full upstream chat-completions URL (origin + path forwarded)
//   CR_FACTS_FILE   path to the JSON facts file the driver rewrites per pass
// On listen it prints `PROXY_URL=http://127.0.0.1:<port><upstream-path>` to
// stdout; the driver sets OCR_LLM_URL to that. Auth is forwarded untouched and
// never logged.

import http from "node:http";
import https from "node:https";
import fs from "node:fs";
import { URL } from "node:url";

const UPSTREAM = new URL(process.env.ORCAROUTER_URL || "https://api.orcarouter.ai/v1/chat/completions");
const upstreamLib = UPSTREAM.protocol === "http:" ? http : https;
const FACTS_FILE = process.env.CR_FACTS_FILE || "";

// Only x-cr-* facts are injectable; never let the file smuggle auth or other
// headers in. Matches the gateway's own x-cr-* convention (not on any denylist).
function readFacts() {
  if (!FACTS_FILE) return {};
  try {
    const obj = JSON.parse(fs.readFileSync(FACTS_FILE, "utf8"));
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const lk = String(k).toLowerCase();
      if (lk.startsWith("x-cr-") && v !== undefined && v !== "") out[lk] = String(v);
    }
    return out;
  } catch {
    return {};
  }
}

const server = http.createServer((req, res) => {
  const headers = { ...req.headers };
  delete headers.host; // must match upstream, not the loopback proxy
  Object.assign(headers, readFacts());

  const target = new URL(req.url, UPSTREAM);
  const upReq = upstreamLib.request(
    target,
    { method: req.method, headers, host: UPSTREAM.host },
    (upRes) => {
      res.writeHead(upRes.statusCode || 502, upRes.headers);
      upRes.pipe(res); // stream SSE through unbuffered
    },
  );
  upReq.on("error", (e) => {
    console.error(`fact-proxy: upstream error: ${e.message}`);
    if (!res.headersSent) res.writeHead(502);
    res.end();
  });
  req.pipe(upReq); // forward the chat-completion payload
});

server.listen(0, "127.0.0.1", () => {
  const { port } = server.address();
  // OCR must POST to the upstream's path; only the origin is swapped for us.
  process.stdout.write(`PROXY_URL=http://127.0.0.1:${port}${UPSTREAM.pathname}\n`);
});

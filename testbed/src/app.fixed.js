// Second iteration of src/app.js with every P0/P1 fixed. Copy this over
// src/app.js and push: the cheap tier should now come back with nothing worse
// than P2, so the cascade escalates to the strong tier in the same run and the
// PR is permanently promoted (the review-tier:1 label appears).

const { execFile } = require("child_process");

// Fixed (was P0): secret comes from the environment, not the source.
const DB_PASSWORD = process.env.DB_PASSWORD;

function getUser(req, res) {
  const id = Number(req.query.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "invalid id" });
  }
  // Fixed (was P0 SQLi): parameterized query.
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, rows) => {
    // Fixed (was P1): error handled, missing row handled.
    if (err) return res.status(500).json({ error: "lookup failed" });
    if (!rows || rows.length === 0) return res.status(404).json({ error: "not found" });
    res.json(rows[0].profile);
  });
}

function ping(req, res) {
  const host = String(req.query.host || "");
  // Fixed (was P0 command injection): validate input and avoid the shell.
  if (!/^[a-zA-Z0-9.-]+$/.test(host)) {
    return res.status(400).json({ error: "invalid host" });
  }
  execFile("ping", ["-c", "1", host], (e, stdout) => res.send(stdout));
}

function total(items) {
  let sum = 0;
  for (const item of items) {
    if (item.price != null) {
      sum += item.price;
    }
  }
  return sum;
}

module.exports = { getUser, ping, total, DB_PASSWORD };

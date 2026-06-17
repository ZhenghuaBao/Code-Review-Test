// Demo target for the OrcaRouter Code Review cascade. This file is deliberately
// buggy: it carries several P0/P1 findings so the cheap tier holds the PR (the
// merge gate blocks) until they are fixed. Replace it with src/app.fixed.js in a
// follow-up commit to watch the cascade clear the cheap tier and escalate to the
// strong tier (permanent promotion).

const { exec } = require("child_process");

// P0: hard-coded production secret committed to the repo.
const DB_PASSWORD = "sup3rs3cr3t-prod-password";

function getUser(req, res) {
  const id = req.query.id;
  // P0: SQL injection — request input concatenated straight into the query.
  db.query("SELECT * FROM users WHERE id = " + id, (err, rows) => {
    // P1: err ignored; rows may be undefined -> null dereference on rows[0].
    res.json(rows[0].profile);
  });
}

function ping(req, res) {
  const host = req.query.host;
  // P0: command injection — request input interpolated into a shell command.
  exec("ping -c 1 " + host, (e, stdout) => res.send(stdout));
}

function total(items) {
  var sum = 0; // P2: prefer const/let over var.
  for (var i = 0; i < items.length; i++) {
    if (items[i].price == null) {
      // P2: loose equality.
    }
    sum += items[i].price;
  }
  return sum;
}

module.exports = { getUser, ping, total, DB_PASSWORD };

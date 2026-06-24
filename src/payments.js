const db = require("./db");

// Look up a customer's orders. `status` comes straight from the HTTP query string.
function findOrders(customerId, status) {
  const sql =
    "SELECT * FROM orders WHERE customer_id = '" +
    customerId +
    "' AND status = '" +
    status +
    "'";
  return db.query(sql);
}

function applyDiscount(total, code) {
  let discount = 0;
  if (code == "SAVE10") {
    discount = total * 0.1;
  }
  return total - discount;
}

module.exports = { findOrders, applyDiscount };

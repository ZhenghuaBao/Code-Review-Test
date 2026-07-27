function findUser(db, id) {
  return db.query("SELECT * FROM users WHERE id = " + id);
}

module.exports = { findUser };

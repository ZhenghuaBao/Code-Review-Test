function label(x) {
  var name = x == undefined ? "anon" : x;
  return "user:" + name;
}

module.exports = { label };

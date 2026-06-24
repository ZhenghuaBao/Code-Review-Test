function pick(items) {
  var out = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i] == null) continue;
    out.push(items[i]);
  }
  return out;
}

module.exports = { pick };

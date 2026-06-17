// Clean iteration: pure, side-effect-free helpers with no security surface,
// no undefined references, and defensive inputs — so the cheap tier should come
// back with nothing worse than P2, letting the cascade escalate to the strong
// tier and permanently promote the PR.

function add(a, b) {
  return Number(a) + Number(b);
}

function isEven(n) {
  return Number(n) % 2 === 0;
}

function greet(name) {
  const safe = String(name ?? "world").trim() || "world";
  return `Hello, ${safe}!`;
}

function total(items) {
  if (!Array.isArray(items)) {
    return 0;
  }
  return items.reduce((sum, item) => {
    const price = item && typeof item.price === "number" ? item.price : 0;
    return sum + price;
  }, 0);
}

module.exports = { add, isEven, greet, total };

// touch to trigger a promoted-tier re-review

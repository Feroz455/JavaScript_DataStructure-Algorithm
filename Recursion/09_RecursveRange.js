function recursveRange(x) {
  if (x === 0) return 0;
  return x + recursveRange(--x);
}

console.log(recursveRange(10));

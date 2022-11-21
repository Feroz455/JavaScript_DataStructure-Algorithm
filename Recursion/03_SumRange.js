function sumRang(num) {
  if (num === 1) return 1;
  return num + sumRang(--num);
}
console.log(sumRang(5));

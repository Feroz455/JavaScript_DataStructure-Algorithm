function Product(array) {
  if (array.length === 0) return 1;
  return array[0] * Product(array.slice(1));
}
console.log(Product([1, 2, 3, 4]));

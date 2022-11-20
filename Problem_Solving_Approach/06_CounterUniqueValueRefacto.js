function countUniqueValueRefacto(array) {
  if (!array.length) return 0;
  let i = 0;
  j = 1;
  while (j < array.length) {
    if (array[i] !== array[j]) {
      array[++i] = array[j];
    }
    j++;
  }
  return i + 1;
}
console.log(countUniqueValueRefacto([-3, -2, -1, 0, 1, 2, 3]));
console.log(countUniqueValueRefacto([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13]));
console.log(countUniqueValueRefacto([]));
console.log(countUniqueValueRefacto([-2, -1, -1, 0, 1]));
console.log(countUniqueValueRefacto([1, 1, 1, 1, 1, 1, 2]));

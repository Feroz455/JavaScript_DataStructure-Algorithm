function SumZero(array) {
  let start = 0,
    end = array.length - 1;
  for (let start = 0; start <= end / 2; start++)
    if (array[start] + array[end - start]) return false;
  return [array[start], array[end]];
}
console.log(SumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(SumZero([1, 2, 3]));
console.log(SumZero([-2, 0, 1, 3]));

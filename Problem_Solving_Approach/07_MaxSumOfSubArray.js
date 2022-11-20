function MaxSumOfSubArray(array, sub) {
  if (array.length < sub) return null;
  let max = -Infinity;

  for (let i = 0; i <= array.length - sub; i++) {
    let sum = 0;
    for (let j = i; j < i + sub; j++) {
      sum += array[j];
    }
    if (max < sum) max = sum;
  }
  return max;
}
console.log(MaxSumOfSubArray([1, 2, 5, 2, 8, 1, 5], 2));
console.log(MaxSumOfSubArray([1, 2, 5, 2, 8, 1, 5], 4));
console.log(MaxSumOfSubArray([4, 2, 1, 6], 1));
console.log(MaxSumOfSubArray([4, 2, 1, 6, 2], 4));
console.log(MaxSumOfSubArray([], 4));
/*
10
17
6
13
null
*/

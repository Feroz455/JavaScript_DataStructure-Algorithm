function MaxSumOfSubArray(Array, sub) {
  if (Array.length < sub) return null;
  let max = -Infinity,
    Tempmax = 0;
  for (let i = 0; i < sub; i++) {
    Tempmax += Array[i];
  }
  mex = Tempmax;
  for (let i = sub; i < Array.length; i++) {
    if (Tempmax > max) max = Tempmax;
    Tempmax = Tempmax - Array[i - sub] + Array[i];
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

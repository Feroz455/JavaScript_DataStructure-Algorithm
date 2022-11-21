function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
console.log(
  collectOddValues([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 2, 3, 6, 5, 55, 1, 4, 4, 7, 7, 8, 9,
  ])
);
/*
[
  1, 3,  5, 7, 9, 5,
  3, 5, 55, 1, 7, 7,
  9
]
*/

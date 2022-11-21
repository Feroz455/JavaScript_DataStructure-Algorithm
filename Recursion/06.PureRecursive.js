function collectOddValues(array) {
  let newarray = [];
  if (!array.length) return newarray;
  if (array[0] % 2 !== 0) newarray.push(array[0]);
  newarray = newarray.concat(collectOddValues(array.slice(1)));
  return newarray;
}

console.log(
  collectOddValues([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 2, 3, 6, 5, 55, 1, 4, 4, 7, 7, 8, 9,
  ])
);

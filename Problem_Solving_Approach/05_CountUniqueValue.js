function countUniqueValueNive(array) {
  let count = 0;
  if (array.length) {
    let temp = array[0];
    count++;
    for (let i = 1; i < array.length; i++) {
      if (temp !== array[i]) {
        temp = array[i];
        count++;
      }
    }
  }
  return count;
}
console.log(countUniqueValue([-3, -2, -1, 0, 1, 2, 3]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1]));
console.log(countUniqueValue([1, 1, 1, 1, 1, 1, 2]));

function marge(array1, array2) {
  let temp = [];
  let i = (j = 0);
  while (i !== array1.length && j !== array2.length) {
    if (array1[i] >= array2[j]) {
      temp.push(array2[j++]);
    } else if (array1[i] < array2[j]) {
      temp.push(array1[i++]);
    }
  }
  while (i < array1.length) {
    temp.push(array1[i++]);
  }
  while (j < array2.length) {
    temp.push(array2[j++]);
  }
  return temp;
}

function Sort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = Sort(array.slice(0, mid));
  let right = Sort(array.slice(mid));
  return marge(left, right);
}
console.log(Sort([1, 4, 2, 4, 7, 56, 3, 1, 4, 5, 56, 6, 99, 7, 7]));

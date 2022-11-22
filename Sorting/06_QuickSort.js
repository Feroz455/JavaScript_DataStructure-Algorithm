function pivot(array, start = 0, end = array.length - 1) {
  let p = array[start];
  let x = start;
  for (let i = start + 1; i <= end; i++) {
    if (array[start] > array[i]) {
      x += 1;
      [array[x], array[i]] = [array[i], array[x]];
    }
  }
  [array[x], array[start]] = [array[start], array[x]];
  return x;
}

function Sort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;
  let mid = pivot(array, start, end);
  Sort(array, start, mid - 1);
  Sort(array, mid + 1, end);
  return array;
}
console.log(Sort([100, 4, 8, 2, 1, 5, 7, 6, 3]));

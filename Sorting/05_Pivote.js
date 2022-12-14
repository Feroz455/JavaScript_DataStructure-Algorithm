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

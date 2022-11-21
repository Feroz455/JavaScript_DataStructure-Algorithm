function pivote(array, start = 0, end = array.length + 1) {
  let p = array[0];
  let x = (y = 0);
  x = start;
  for (let i = start + 1; i < end; i++) {
    if (array[start] > array[i]) {
      x += 1;
      [array[x], array[i]] = [array[i], array[x]];
    }
  }
  [array[x], array[start]] = [array[start], array[x]];
  return x;
}

console.log(pivote([4, 8, 2, 1, 5, 7, 6, 3]));

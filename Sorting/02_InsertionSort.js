function Sort(array) {
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(Sort([100, 1, 10, 2, 4, 5, 8, 0, 4, 4, 4]));

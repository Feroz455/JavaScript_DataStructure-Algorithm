function Sort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[min], [array[i]]] = [array[i], [array[min]]];
  }
  return array;
}

console.log(Sort([11, 1, 10, 2, 4, 5, 8, 0, 4, 4, 4, 7, 9, 6, 3, 2, 1, 4]));

function leanearSearch(Array, key) {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === key) return i;
  }
  return -1;
}
console.log(leanearSearch([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13], 13));
//11

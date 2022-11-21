function BinarySearch(Array, key) {
  let start = 0,
    end = Array.length - 1,
    mid;
  mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (key === Array[mid]) {
      return mid;
    } else if (key < Array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}
console.log(BinarySearch([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13], 13));
//11

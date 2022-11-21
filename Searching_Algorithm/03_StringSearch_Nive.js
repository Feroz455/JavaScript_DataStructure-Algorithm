function stringSearch(string, sub) {
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === sub[j]) {
      if (sub.length - 1 === j) {
        return i - j;
      } else j++;
    } else {
      j = 0;
    }
  }
  return -1;
}
console.log(stringSearch("I love bangladesh", "tumi"));

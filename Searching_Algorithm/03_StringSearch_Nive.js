function stringSearch(string, sub) {
  let j = 0,
    count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === sub[j]) {
      if (sub.length - 1 === j) {
        ++count;
      } else j++;
    } else {
      j = 0;
    }
  }
  return count;
}
console.log(stringSearch("I love bangladesh", "a"));

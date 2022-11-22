function getlength(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

function mostDigit(array) {
  let max = 0;
  array.forEach((element) => {
    let len = getlength(element);
    if (len > max) {
      max = len;
    }
  });
  return max;
}
console.log(mostDigit([45, 789, 654]));

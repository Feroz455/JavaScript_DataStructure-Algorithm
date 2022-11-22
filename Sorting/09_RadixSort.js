function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
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
function CreateBuket() {
  let x = new Array(10);
  for (let i = 0; i < x.length; i++) {
    x[i] = [];
  }
  return x;
}
function Sort(array) {
  let maxLen = mostDigit(array);
  let buket = CreateBuket();
  let l = 0;
  for (let j = 0; j < maxLen; j++) {
    for (let i = 0; i < array.length; i++) {
      buket[getDigit(array[i], j)].push(array[i]);
    }
    array = [];
    for (let values of buket) {
      for (let val of values) array.push(val);
    }
    buket = CreateBuket();
  }
  return array;
}

let array = [10, 33, 20, 44, 30, 22, 40, 100, 55, 14587, 60, 4589, 70];
console.log(Sort(array));

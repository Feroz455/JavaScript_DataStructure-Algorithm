function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0)
      sum += obj[key];
  }
  return sum;
}
const firoz = {
  math: 50,
  physics: 78,
  heigher: 66,
  cse: {
    CProgramming: 80,
    Cpp: 79,
  },
};
console.log(nestedEvenSum(firoz));

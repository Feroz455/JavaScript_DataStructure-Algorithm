function SumOfnNumber(n) {
  sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let t1 = performance.now();
console.log(SumOfnNumber(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}second`);
/**
 * output
 * 55
 *
 * */
/*
500000000067109000
Time Elapsed: 13.53902199999988second
*/

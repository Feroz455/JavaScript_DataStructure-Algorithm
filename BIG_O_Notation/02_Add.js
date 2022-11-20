function SumOfnNumber(n) {
  return (n * (n + 1)) / 2;
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
500000000500000000
Time Elapsed: 0.006283299997448921second
*/

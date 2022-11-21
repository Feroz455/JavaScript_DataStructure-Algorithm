function factorial(num) {
  if (!num) return 1;
  return num * factorial(--num);
}
console.log(factorial(3));
/*
120
*/

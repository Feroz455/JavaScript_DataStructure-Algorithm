function countNumber(num) {
  if (!num) {
    console.log("Count ended!!");
    return;
  }
  console.log(num);
  countNumber(--num);
}
countNumber(5);
/*
5
4
3
2
1
Count ended!!
*/

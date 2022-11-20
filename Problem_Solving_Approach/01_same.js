function Same(array1, array2) {
  let array1Lenght = array1.length,
    array2lenght = array2.length;
  if (array1.length !== array2.length) return false;
  else {
    for (let i = 0; i < array1Lenght; i++) {
      let correctIndex = array2.indexOf(array1[i] ** 2);
      if (correctIndex === -1) {
        return false;
      }
      array2.splice(correctIndex, 1);
    }
    return true;
  }
}

console.log(Same([1, 2, 3, 4], [4, 16, 9, 1]));
/*
true
*/

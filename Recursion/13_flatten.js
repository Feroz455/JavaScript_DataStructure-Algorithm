function flatten(oldArr) {
  let newArray = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArray = newArray.concat(flatten(oldArr[i]));
    } else {
      newArray.push(oldArr[i]);
    }
  }
  return newArray;
}

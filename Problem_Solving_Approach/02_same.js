function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
function Same(array1, array2) {
  let a1 = array1.length,
    a2 = array2.length;
  if (a1 !== a2) return false;
  else {
    let FrequencyCounter1 = {};
    let FrequencyCounter2 = {};
    for (let val of array1) {
      FrequencyCounter1[val] = (FrequencyCounter1[val] || 0) + 1;
    }
    for (let val of array2) {
      FrequencyCounter2[val] = (FrequencyCounter2[val] || 0) + 1;
    }
    for (let key in FrequencyCounter1) {
      if (!(key ** 2 in FrequencyCounter2)) return false;
      if (FrequencyCounter2[key ** 2] !== FrequencyCounter1[key]) return false;
    }
  }
  return true;
}
console.log(Same([1, 2, 3, 4], [4, 15, 9, 1]));

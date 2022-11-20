function anagrams(str1 = "anagrams", str2 = "anagrams") {
  let str1Len = str1.length,
    str2len = str2.length;
  console.log(str1, str2);

  if (str1.length !== str2.length) return false;

  let frequency1 = {};
  let frequency2 = {};
  for (val of str1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (val of str2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }
  for (let val in frequency1) {
    if (frequency1[val] !== frequency2[val]) {
      return false;
    }
  }
  return true;
}
console.log(anagrams("rat", "cat"));
console.log(anagrams(" ", " "));
console.log(anagrams("aaz", "zza"));
console.log(anagrams("anagrams", "nagarams"));
console.log(anagrams("rat", "cat"));
console.log(anagrams("awesome", "awesom"));
console.log(anagrams("qwerty", "qeywrt"));
console.log(anagrams("texttwisttime", "timetwisttext"));
/*
rat cat
false

true
aaz zza
false
anagrams nagarams
true
rat cat
false
awesome awesom
false
qwerty qeywrt
true
texttwisttime timetwisttext
true
*/

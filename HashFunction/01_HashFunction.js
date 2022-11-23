function hash(key, len) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % len;
  }
  return total;
}
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.keyMap = new Array(this.size);
    for (let i = 0; i < size; i++) {
      this.keyMap[i] = [];
    }
  }
  hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + prime + value) % this.size;
    }
    return total;
  }
  set(key, value) {
    let position = this.hash(key);
    for (let i = 0; i < this.keyMap[position].length; i++) {
      if (this.keyMap[position][i][0] === key) {
        return (this.keyMap[position][i][1] = value);
      }
    }
    this.keyMap[position].push([key, value]);
  }
  get(key) {
    let position = this.hash(key);

    for (let i = 0; i < this.keyMap[position].length; i++) {
      if (this.keyMap[position][i][0] === key) {
        return this.keyMap[position][i][1];
      }
    }
  }
  values() {
    let varr = [];
    for (let j = 0; j < this.size; j++) {
      if (this.keyMap[j].length) {
        for (let i = 0; i < this.keyMap[j].length; i++) {
          varr.push(this.keyMap[j][i][1]);
        }
      }
    }
    return varr;
  }
  kyes() {
    let varr = [];
    for (let j = 0; j < this.size; j++) {
      if (this.keyMap[j].length) {
        for (let i = 0; i < this.keyMap[j].length; i++) {
          varr.push(this.keyMap[j][i][0]);
        }
      }
    }
    return varr;
  }
}
const h = new HashTable();
h.set("pink", "#254869");
h.set("red", "#ffddff");
h.set("black", "#000");
h.set("pink", "#254869");
h.set("red", "#ffddff");
h.set("black", "#000");

console.log(h.keyMap);
console.log(h.values());
console.log(h.kyes());

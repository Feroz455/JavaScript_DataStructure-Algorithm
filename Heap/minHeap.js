class heap {
  constructor() {
    this.data = [];
  }
  leftChild(n) {
    return 2 * n + 1;
  }
  RightChild(n) {
    return 2 * n + 2;
  }
  parent(n) {
    return Math.floor((n - 1) / 2);
  }
  heapify(x) {
    let varify = true;
    while (varify && x > 0) {
      varify = false;
      let p = this.parent(x);
      if (this.data[x] < this.data[p]) {
        [this.data[x], this.data[p]] = [this.data[p], this.data[x]];
        varify = true;
        x = p;
      }
    }
  }
  insertkey(value) {
    this.data.push(value);
    this.heapify(this.data.length - 1);
  }
  extractmin() {
    let key = this.data[0];
    this.data[0] = this.data.pop();
    this.sinkDown();
    return key;
  }
  sinkDown() {
    if (this.data.length === 1) return;
    if (this.data.length === 2) {
      if (this.data[0] < this.data[1]) {
        [this.data[0], this.data[1]] = [this.data[1], this.data[0]];
      }
      return;
    }
    let x = 0;
    let varify = true;
    while (varify) {
      varify = false;
      let left = this.leftChild(x),
        right = this.RightChild(x),
        min = this.data[left] < this.data[right] ? left : right;
      if (this.data[min] < this.data[x]) {
        [this.data[min], this.data[x]] = [this.data[x], this.data[min]];
        varify = true;
      }
      x = min;
    }
  }
  heapSort() {
    let x = [];
    for (let i = 0; i < this.data.length; i++) {
      x.push(this.extractmin());
    }
    return x;
  }
}
let head = new heap();

for (let i = 0; i < 10; i++) {
  head.insertkey(Math.floor(Math.random() * 100));
}
for (let i = 0; i < 10; i++) {
  console.log(head.extractmin());
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let vtx = new Node(val);
    if (this.head === null) {
      this.head = this.tail = vtx;
    } else {
      vtx.prev = this.tail;
      this.tail.next = vtx;
      this.tail = vtx;
    }
    this.length++;
  }

  travers() {
    let start = this.head;
    while (start) {
      console.log(start.value);
      start = start.next;
    }
  }
  reverse() {
    let start = this.tail;
    while (start) {
      console.log(start.value);
      start = start.prev;
    }
  }
  pop() {
    let val = this.tail.value;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;

    return val;
  }
  shift() {
    let key = this.head.value;
    this.head.next.prev = null;
    this.head = this.head.next;
    this.length--;
    return key;
  }
  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      this.length++;
      const vtx = new Node(val);
      this.head.prev = vtx;
      vtx.next = this.head;
      this.head = vtx;
      return true;
    }
  }
  insert(index, value) {
    if (!index) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let start = this.head;
      for (let i = 0; i < index; i++) {
        start = start.next;
      }
      let vtx = new Node(value);
      start.prev.next = vtx;
      vtx.next = start;
      vtx.prev = start.prev;
      vtx.next.prev = vtx;
      this.length++;
    }
    return true;
  }
  delete(index) {
    if (!index) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      let start = this.head;
      for (let i = 0; i < index; i++) {
        start = start.next;
      }
      start.prev.next = start.next;
      start.next.prev = start.prev;
      this.length--;
    }
  }
  set(index, value) {
    if (!this.head && this.length < index && index < 0) {
      return false;
    } else {
      let start = this.head;
      for (let i = 0; i < index; i++) {
        start = start.next;
      }
      start.value = value;
    }
    return true;
  }
  get(index, value) {
    if (!this.head && this.length < index && index < 0) {
      return null;
    } else {
      let start = this.head;
      for (let i = 0; i < index; i++) {
        start = start.next;
      }
      value = start.value;
    }
    return value;
  }
}

const node = new list();
for (let i = 0; i < 10; i++) {
  node.push(i);
}
node.travers();
console.log(node.get(9));

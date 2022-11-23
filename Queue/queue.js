class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class list {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.size = size;
  }
  enqueue(val) {
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
  dequeue() {
    let key = this.head.value;
    this.head.next.prev = null;
    this.head = this.head.next;
    this.length--;
    return key;
  }
}

const node = new list();
for (let i = 0; i < 10; i++) {
  node.enqueue(i);
}

console.log(node.dequeue());
console.log(node.dequeue());
console.log(node.dequeue());

/*
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }
}
*/

//Stack using link list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class list {
  constructor(size) {
    this.size = size;
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
  pop() {
    let val = this.tail.value;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;

    return val;
  }
  top() {
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
  isEmpty() {
    if (!this.length) return true;
    else return false;
  }
  isFull() {
    if (this.length === this.size) return true;
    else return false;
  }
}

const node = new list();
for (let i = 0; i < 10; i++) {
  node.push(i);
}
console.log(node.top());
console.log(node.top());
console.log(node.top());
console.log(node.top());

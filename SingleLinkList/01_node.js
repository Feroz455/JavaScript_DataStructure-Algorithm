class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let vtx = new Node(val);
    if (!this.head) {
      this.head = this.tail = vtx;
    } else {
      this.tail.next = vtx;
      this.tail = vtx;
    }
    this.length++;
  }
  print(start = this.head) {
    if (!start) {
      console.log(`list is empty`);
      return;
    }
    if (!start.next) {
      console.log(start.val);
      return;
    } else {
      console.log(start.val);
    }
    this.print(start.next);
  }
  pop() {
    let start = this.head;
    let returnvalue = 0;
    if (!start) {
      return null;
    } else if (!start.next) {
      this.head = this.tail = null;
      this.length--;
      return start.val;
    } else {
      while (start.next.next) {
        start = start.next;
      }
      returnvalue = start.next.val;
      start.next = null;
      this.tail = start.next;
      this.length--;
      return returnvalue;
    }
  }
  shift() {
    let key;
    if (!this.head) return null;
    else if (!this.head.next) {
      this.head = this.tail = null;
      this.length--;
      return this.head.val;
    } else {
      key = this.head.val;
      this.head = this.head.next;
      this.length--;
      return key;
    }
  }
  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      this.length++;
      let vtx = new Node(val);
      vtx.next = this.head;
      this.head = vtx;
    }
    return true;
  }

  get(index) {
    if (index > this.length) return null;
    else {
      let start = this.head;
      for (let i = 0; i < index; i++) {
        start = start.next;
      }
      return start.val;
    }
  }
  set(index, value) {
    if (index > this.length) return false;
    else {
      let start = this.head;
      for (let i = 0; i < index; i++) {
        start = start.next;
      }
      start.val = value;
      return true;
    }
  }
  insert(index, value) {
    if (this.length < index) return null;
    else if (!index) {
      this.unshift(value);
    } else {
      let current = this.head;
      for (let i = 1; i < index; i++) {
        current = current.next;
      }
      const vtx = new Node(value);
      vtx.next = current.next;
      current.next = vtx;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (!this.head) {
      return false;
    } else if (index === 0) {
      this.shift();
      return true;
    } else if (this.length === index) {
      this.pop();
    } else {
      let current = this.head.next;
      let prev = current;
      for (let i = 1; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      this.length--;
    }
  }
  reverse() {
    let listLen = this.length;
    let start = null;
    let end = null;
    while (listLen > 0) {
      let vtx = new Node(this.pop());
      if (!start) {
        start = end = vtx;
      } else {
        end.next = vtx;
        end = vtx;
      }
      listLen--;
    }
    this.head = start;
    this.tail = end;
  }
  reverse2() {
    let next = this.head;
    
  }
}
let list = new singleLinkList();

for (let i = 0; i < 10; i++) {
  list.push(i);
}
list.print();
list.reverse();
list.print();

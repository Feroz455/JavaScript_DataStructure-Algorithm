class node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let vtx = new node(value);
    if (!this.root) {
      this.root = vtx;
    } else if (this.root) {
      let start = this.root;
      while (start) {
        if (start.value === value) return;
        if (start.value > value) {
          if (!start.left) {
            start.left = vtx;
            break;
          }
          start = start.left;
        } else {
          if (!start.right) {
            start.right = vtx;
            break;
          }
          start = start.right;
        }
      }
    }
  }
  search(value) {
    let start = this.root;
    if (start === null) return false;
    if (start.value === value) {
      return true;
    } else {
      while (start) {
        if (start.value === value) {
          return true;
        }
        if (start.value > value) start = start.left;
        else start = start.right;
      }
      return false;
    }
  }

  Inorder_traverse(start = this.root) {
    if (start) {
      this.Inorder_traverse(start.left);
      console.log(start.value);
      this.Inorder_traverse(start.right);
    }
    return;
  }
  Preorder_traverse(start = this.root) {
    if (start) {
      console.log(start.value);
      this.Preorder_traverse(start.left);
      this.Preorder_traverse(start.right);
    }
    return;
  }
  Postorder_traverse(start = this.root) {
    if (start) {
      this.Postorder_traverse(start.left);
      this.Postorder_traverse(start.right);
      console.log(start.value);
    }
    return;
  }
  BFS() {
    let start = this.root;
    let queue = [];
    queue.push(start);
    while (queue.length) {
      let temp = queue.shift();
      console.log(temp.value);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }
}
let Tree = new tree();
for (let i = 0; i < 10; i++) {
  Tree.insert(Math.round(Math.random() * 100));
}
Tree.BFS();

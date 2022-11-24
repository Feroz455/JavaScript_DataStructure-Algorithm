class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
  }
  addEdge(vtx1, vtx2) {
    this.addVertex(vtx1);
    this.addVertex(vtx2);
    this.adjacencyList[vtx1].push(vtx2);
    this.adjacencyList[vtx2].push(vtx1);
  }
  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (v) => v !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (v) => v !== vtx1
    );
  }
  removeVertex(vtx) {
    for (let key in this.adjacencyList) {
      this.removeEdge(key, vtx);
    }
    delete this.adjacencyList[vtx];
  }
  DepthFastSearch(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    (function dfs(vtx) {
      if (!vtx) return null;
      visited[vtx] = true;
      result.push(vtx);
      adjacencyList[vtx].forEach((neighbor) => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    })(start);
    return result;
  }
  IterativeDFS(vertex) {
    let result = [];
    let visited = {};
    let queue = [];
    queue.push(vertex);
    while (queue.length) {
      let vtx = queue.pop();
      visited[vtx] = true;
      result.push(vtx);
      this.adjacencyList[vtx].forEach((neighbor) => {
        if (!visited[neighbor]) {
          if (!queue.includes(neighbor)) queue.push(neighbor);
        }
      });
    }
    return result;
  }
  BFS(vertex) {
    let result = [];
    let visited = {};
    let stack = [];
    stack.push(vertex);
    while (stack.length) {
      let vtx = stack.shift();
      visited[vtx] = true;
      result.push(vtx);
      this.adjacencyList[vtx].forEach((neighbor) => {
        if (!visited[neighbor]) {
          if (!stack.includes(neighbor)) stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
let graph = new Graph();

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.adjacencyList);
console.log(graph.DepthFastSearch("A"));
console.log(graph.IterativeDFS("A"));
console.log(graph.BFS("A"));

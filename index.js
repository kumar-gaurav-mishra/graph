'use strict';
class Graph {
  constructor() {
    this.adjacencyList = [];
  }
  addVertex(vertex) {
    if (!vertex) return undefined;
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }
  addEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2) return undefined;
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    } else {
      this.adjacencyList[vertex1] = [vertex2];
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      this.adjacencyList[vertex2] = [vertex1];
    }
    return this;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    return this;
  }
  removeVertex(vertex) {
    let arr = this.adjacencyList[vertex];
    if (arr && arr.length >= 0) {
      delete this.adjacencyList[vertex];
      arr.forEach(val => {
        this.adjacencyList[val] = this.adjacencyList[val].filter(v => v !== vertex);
      });
    }
    return this;
  }
}
let graph = new Graph();
['kumar', 'jyoti', 'avichal'].forEach(val => graph.addVertex(val));
graph.addEdge('kumar', 'avichal');
graph.addEdge('kumar', 'jyoti');
graph.addEdge('jyoti', 'avichal');
graph.removeEdge('kumar', 'jyoti');
console.log(graph.adjacencyList);
module.exports = Graph;

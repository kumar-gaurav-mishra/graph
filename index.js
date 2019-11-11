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
  }
}
module.exports = Graph;

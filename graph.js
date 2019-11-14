'use strict';
class Graph {
  constructor() {
    this.adjacencyList = {};
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
  deapthFirstSearch(start, end) {
    const results = [];
    const visited = {};
    let reachedEnd = false;
    const dfs = vertex => {
      if (!vertex || reachedEnd) return null;
      visited[vertex] = true;
      results.push(vertex);
      if (vertex === end) {
        reachedEnd = true;
        return null;
      }
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    };
    dfs(start);
    return results;
  }
  breadthFirst(start, end) {
    const results = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);
      if (currentVertex === end) break;
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}
let graph = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(val => graph.addVertex(val));
[['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'E'], ['D', 'F'], ['E', 'F']].forEach(val => graph.addEdge(val[0], val[1]));
console.log(graph.breadthFirst('A'));
module.exports = Graph;

const Queue = require('priority-queue-ds');
const Graph = require('./graph.js');
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!vertex) return undefined;
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }
  addEdge(vertex1, vertex2, weight) {
    if (!vertex1 || !vertex2 || !weight) return undefined;
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    } else {
      this.adjacencyList[vertex1] = [{ node: vertex2, weight: weight }];
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    } else {
      this.adjacencyList[vertex2] = [{ node: vertex1, weight: weight }];
    }
    return this;
  }
  sortestPath(start, finish) {
    const nodes = new Queue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];
    //Initial State
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //While there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbour];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            //updateing new smallest distance to neighbour
            distances[nextNeighbour] = candidate;
            //updating previous - How we got to the neighbour
            previous[nextNeighbour] = smallest;
            // enque in the priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();

['A', 'B', 'C', 'D', 'E', 'F'].forEach(val => graph.addVertex(val));
[['A', 'B', 4], ['A', 'C', 2], ['B', 'E', 3], ['C', 'D', 2], ['C', 'F', 4], ['D', 'E', 3], ['D', 'F', 1], ['E', 'F', 1]].forEach(val =>
  graph.addEdge(val[0], val[1], val[2])
);
console.log(graph.sortestPath('A', 'E'));

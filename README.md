# Graph

Graph implementation in JavaScript

### Installation & Usage :

```Installation

npm install js-graph-ds

```

```Javascript

const { Graph, WeightedGraph } = require("js-graph-ds");

//Graph
let graph = new Graph();
graph.addVertex(vertex); // Adds vertex to the graph
graph.addEdge(vertex1, vertex2); //Adds edge between two vertex
graph.removeEdge(vertex1, vertex2); //Removes edge between two vertex
graph.removeVertex(vertex); //Removes vertex and all the edges which includes given vertex
graph.deapthFirstSearch(startVertex, endVertex); //Traverse the graph using depth first traversal and returns all the nodes which it visits
graph.breadthFirstSearch(startVertex, endVertex); //Traverse the graph using breadth first traversal and returns all the nodes which it visits
//Weighted Graph
let weightedGraph = new WeightedGraph();
weightedGraph.addVertex(vertex); // Adds vertex to the graph
weightedGraph.addEdge(vertex1, vertex2, weight); //Adds edge between two vertex with the given weight
weightedGraph.sortestPath(vertex1, vertex2);//Returns sortest path between two nodes using Dijkstra's algorithm
```

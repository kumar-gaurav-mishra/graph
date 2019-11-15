'use strict';
const chai = require('chai');
chai.should();
let { Graph, WeightedGraph } = require('./index');
describe('Graph', () => {
  describe('Instantiation', () => {
    it('graph should be object', () => {
      let graph = new Graph();
      (typeof graph === 'object').should.be.equals(true);
    });
    it('graph should be instance of graph', () => {
      let graph = new Graph();
      (graph instanceof Graph).should.be.equals(true);
    });
    it('add vertex method should return undefined when no vertex is passed', () => {
      let graph = new Graph();
      (graph.addVertex() === undefined).should.be.equals(true);
    });
  });
  describe('Add Vertex Method', () => {
    it('add vertex method should return undefined when no vertex is passed', () => {
      let graph = new Graph();
      (graph.addVertex() === undefined).should.be.equals(true);
    });
    it('add vertex method should return instance of Graph when vertex is passed', () => {
      let graph = new Graph();
      (graph.addVertex('kumar') instanceof Graph).should.be.equals(true);
      graph.adjacencyList.kumar.length.should.be.equals(0);
    });
  });
  describe('Add Edge Method', () => {
    it('add edge method should return undefined when no vertex is passed', () => {
      let graph = new Graph();
      (graph.addEdge() === undefined).should.be.equals(true);
    });
    it('graph should include all the edges which is added by add edge method', () => {
      let graph = new Graph();
      let edgeArr = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'D'],
        ['C', 'E'],
        ['D', 'E'],
        ['D', 'F'],
        ['E', 'F']
      ];
      edgeArr.forEach(val => graph.addEdge(val[0], val[1]));
      edgeArr.forEach(val => {
        graph.adjacencyList[val[0]].includes(val[1]).should.be.equals(true);
        graph.adjacencyList[val[1]].includes(val[0]).should.be.equals(true);
      });
    });
  });
  describe('Remove Edge Method', () => {
    it('remove edge should remove the edge between vertex', () => {
      let graph = new Graph();
      let edgeArr = [
        ['A', 'B'],
        ['A', 'C']
      ];
      edgeArr.forEach(val => graph.addEdge(val[0], val[1]));
      edgeArr.forEach(val => graph.removeEdge(val[0], val[1]));
      edgeArr.forEach(val => {
        graph.adjacencyList[val[0]].includes(val[1]).should.be.equals(false);
        graph.adjacencyList[val[1]].includes(val[0]).should.be.equals(false);
      });
    });
  });
  describe('Remove Vertex Method', () => {
    it('remove edge should remove the edge between vertex', () => {
      let graph = new Graph();
      let edgeArr = [
        ['A', 'B'],
        ['A', 'C']
      ];
      edgeArr.forEach(val => graph.addEdge(val[0], val[1]));
      graph.removeVertex('A');
      (graph.adjacencyList['A'] === undefined).should.be.equals(true);
    });
  });
  describe('Deapth First Search', () => {
    it('dfs should traverse the graph using dfs order', () => {
      let graph = new Graph();
      let edgeArr = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'D'],
        ['C', 'E'],
        ['D', 'E'],
        ['D', 'F'],
        ['E', 'F']
      ];
      edgeArr.forEach(val => graph.addEdge(val[0], val[1]));
      (JSON.stringify(graph.deapthFirstSearch('A', 'C')) === '["A","B","D","E","C"]').should.be.equals(true);
    });
  });
   describe('Breadth First Search', () => {
     it('bfs should traverse the graph using bfs order', () => {
       let graph = new Graph();
       let edgeArr = [
         ['A', 'B'],
         ['A', 'C'],
         ['B', 'D'],
         ['C', 'E'],
         ['D', 'E'],
         ['D', 'F'],
         ['E', 'F']
       ];
       edgeArr.forEach(val => graph.addEdge(val[0], val[1]));
       (JSON.stringify(graph.breadthFirstSearch('A', 'F')) === '["A","B","C","D","E","F"]').should.be.equals(true);
     });
   });
});

describe('Weighted Graph', () => {
  describe('Instantiation', () => {
    it('weighted graph should be object', () => {
      let graph = new WeightedGraph();
      (typeof graph === 'object').should.be.equals(true);
    });
    it('weighted graph should be instance of weighted graph', () => {
      let graph = new WeightedGraph();
      (graph instanceof WeightedGraph).should.be.equals(true);
    });
  });
  describe('Add Vertex Method', () => {
    it('add vertex method should return undefined when no vertex is passed', () => {
      let graph = new WeightedGraph();
      (graph.addVertex() === undefined).should.be.equals(true);
    });
    it('add vertex method should return instance of Graph when vertex is passed', () => {
      let graph = new WeightedGraph();
      (graph.addVertex('kumar') instanceof WeightedGraph).should.be.equals(true);
      graph.adjacencyList.kumar.length.should.be.equals(0);
    });
  });
  describe('Add Edge Method', () => {
    it('add edge method should return undefined when no vertex is passed', () => {
      let graph = new WeightedGraph();
      (graph.addEdge() === undefined).should.be.equals(true);
    });
    it('graph should include all the edges which is added by add edge method', () => {
      let graph = new WeightedGraph();
      let edgeArr = [['A', 'B', 4], ['A', 'C', 2], ['B', 'E', 3], ['C', 'D', 2], ['C', 'F', 4], ['D', 'E', 3], ['D', 'F', 1], ['E', 'F', 1]]
      edgeArr.forEach(val => graph.addEdge(val[0], val[1], val[2]));
      ['A', 'B', 'C', 'D', 'E', 'F'].forEach(val => (graph.adjacencyList[val] !== undefined).should.be.equals(true));
    });
  });
  describe('sortest path method', () => {
    it('sortest path method should give you the sortest path between two edges', () => {
      let graph = new WeightedGraph();
      [['A', 'B', 4], ['A', 'C', 2], ['B', 'E', 3], ['C', 'D', 2], ['C', 'F', 4], ['D', 'E', 3], ['D', 'F', 1], ['E', 'F', 1]].forEach(val => graph.addEdge(val[0], val[1], val[2]));
      (JSON.stringify(graph.sortestPath('A', 'E'))).should.be.equals('["A","C","D","F","E"]');
    });
  });
});

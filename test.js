'use strict';
const chai = require('chai');
chai.should();
let Graph = require('./index');
describe('Hash Table', () => {
  describe('Instantiation', () => {
    let graph = new Graph();
    it('graph should be object', () => {
      (typeof graph === 'object').should.be.equals(true);
    });
    it('graph should be instance of Graph', () => {
      (graph instanceof Graph).should.be.equals(true);
    });
  });
});

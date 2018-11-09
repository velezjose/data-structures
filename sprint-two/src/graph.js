

// Instantiate a new graph
var Graph = function() {
  // this = Object.create(Graph.prototype); 
  this.nodes = [];

  // let find = function () {};
  // this.nodes.find = find;
  // return this;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }

  let fromNodeEdges = this.nodes[this.findNodeIndex(fromNode)].edges;

  for (let i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i] === toNode) {
      return true;
    }
  }
  
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) && !this.contains(toNode)) {
    return;
  }

  let fromNodeEdges = this.nodes[this.findNodeIndex(fromNode)].edges;
  let toNodeEdges = this.nodes[this.findNodeIndex(toNode)].edges;

  fromNodeEdges.push(toNode);
  toNodeEdges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) && !this.contains(toNode)) {
    return;
  }

  let fromNodeEdges = this.nodes[this.findNodeIndex(fromNode)].edges;
  let toNodeEdges = this.nodes[this.findNodeIndex(toNode)].edges;

  // fromNodeIndex is the index of toNode in the fromNodeEdges array
  let fromNodeIndex = _.indexOf(fromNodeEdges, toNode);
  // toNodeIndex is the index of fromNode in the toNodeEdges array
  let toNodeIndex = _.indexOf(toNodeEdges, fromNode);

  fromNodeEdges.splice(fromNodeIndex, 1);
  toNodeEdges.splice(toNodeIndex, 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

// Added this method to find the index of a given node in the Graph's nodes array
Graph.prototype.findNodeIndex = function(value) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return i;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode - O(1) because we are only pushing a node to the graph's nodes array

  contains - O(n) 

  removeNode - O(n)
 
  hasEdge - O(n)

  addEdge - O(n)

  removeEdge - O(n)

  forEachNode - O(n * cb's time complexity) 
    O(n) if cb does O(1) operations
    O(n^2) if cb does O(n) operations, ...

  findNodeIndex - O(n) because we loop over the the graph's nodes array once

 */



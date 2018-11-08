var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {

  var has = false;

  var find = function(node) {
    if (node.value === target) {
      has = true;
    } 

    if (node.children.length > 0) {
      node.children.forEach(function(element) {
        find(element);
      });
    }
  };  

  find(this);

  return has;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

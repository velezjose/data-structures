var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];  

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

treeMethods.breadthFirstLog = function(cb) {
  
  var array = [];
  array.push(this);

  while(array.length > 0) {
    var node = array.shift();

    if (node.value) {
      cb(node.value);
    }

    if (node.children) {
      node.children.forEach(function(element) {
        array.push(element);
      });
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild - O(1) because the function is invoked on the target tree
    and inserting a child to the target tree is also O(1)

  contains - O(n) because we go through the entire tree to look for
    target
 */

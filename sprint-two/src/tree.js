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
    } else if (node.children.length > 0) {
      //for ()
    }
  };

  
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].contains(target);
    }
  }

  

  return has;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

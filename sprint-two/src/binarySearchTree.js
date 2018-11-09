var BinarySearchTree = function(value) {
  this.root = {};
  this.root.value = value;
  this.root.left = null;
  this.root.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.root.value === undefined) {
    this.root.value = value;
    return;

  } else if (this.contains(value)) {
    return;

  } else {

    let insertNode = new BinarySearchTree(value);

    let node = this.root;
    let direction;

    if (node.value > value){
      direction = 'left';
    } else {
      direction = 'right';
    }
  

    while (node.direction !== null) {
      if (node.value > value) {
        direction = 'left';
      } else if (node.value < value) {
        direction = 'right';
      }
    }

    node.direction = insertNode;

  }



};

BinarySearchTree.prototype.contains = function(value) {
  if (this.root.value === undefined) {
    return false;
  }

  let node = this.root;

  while (node !== null) {
    if (node.value === value) {
      return true;
    } else if (node.value > value) {
      node = node.left;
    } else if (node.value < value) {
      node = node.right;
    }
  }

  return false;

};

BinarySearchTree.prototype.depthFirstLog = function() {

};


/*

A .left property, a binary search tree (BST) where all values are lower than the current value.
A .right property, a BST where all values are higher than the current value.
A .insert() method, which accepts a value and places it in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() 

 * Complexity: What is the time complexity of the above functions?
 */

var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === undefined) {
    this.value = value;
    return;

  } else if (this.contains(value)) {
    return;

  } else {
    let insertNode = BinarySearchTree(value);
    let node = this;
    // let direction;

    // if (node.value > value){
    //   direction = 'left';
    // } else {
    //   direction = 'right';
    // }
  
    while (node) {
      if (node.value > value) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = insertNode;
          break;
        }
      } else if (node.value < value) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = insertNode;
          break;
        }
      }
    }

  }

};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === undefined) {
    return false;
  }

  let node = this;
  console.log(node);

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

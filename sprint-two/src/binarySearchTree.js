var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.height = 0;
  obj.parent = null;
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

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
  var runCallBack = function(node) {
    if (node === null) {
      return;
    } 
    if (node.value) {
      cb(node.value);
    }
    if (node.left) {
      runCallBack(node.left);
    } 
    if (node.right) {
      runCallBack(node.right);
    }

  };

  runCallBack(this);
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  
  var array = [];
  array.push(this);

  while(array.length > 0) {
    var node = array.shift();
    cb(node.value);
    if (node.left) {
      array.push(node.left);
    }
    if (node.right) {
      array.push(node.right);
    }
  }
  
};


/*

A .left property, a binary search tree (BST) where all values are lower than the current value.
A .right property, a BST where all values are higher than the current value.
A .insert() method, which accepts a value and places it in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() 

 * Complexity: What is the time complexity of the above functions?
 insert() - average case 0(log(h)), worst case 0(n), h is the height of the tree. 
 contain() - average case 0(log(h)), worst case 0(n), h is the height of the tree. 
 depthFirstLog/breadthFirstLog - 0(n)


 */

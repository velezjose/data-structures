var AVLTree = function() {
  this.root = null;

  if (typeof arguments[0] === 'number') {
    this.root.insert(arguments[0]);
  }
};

var Node = function(value) {
  var node = Object.create(AVLTree.prototype);
  node.value = value;
  node.left = node.right = null;
  node.height = 0;
  return node;
};

AVLTree.prototype.insert = function(value) {
  var insertRec = function(node) {
    if (node === null) {
      node = Node(value);
      return node;
    }

    if (value < node.value) {
      node.left = insertRec(node.left);

    } else if (value > node.value) {
      node.right = insertRec(node.right);

    } else if (value === node.value) {
      return node;

    }

    // updating height
    node.height = Math.max(node.getHeight(node.left), node.getHeight(node.right)) + 1;
    var balance = node.getBalance(node);

    // Left Case
    if (balance > 1) {

      // Fix LEFT RIGHT Case to be LEFT LEFT Case
      if (value > node.left.value) {
        node.left = node.leftRotate(node.left);
      }
        
      // Fix LEFT LEFT Case
      node = node.rightRotate(node);

    // Right Case
    } else if (balance < -1) {

      // Fix RIGHT LEFT Case to be RIGHT RIGHT Case
      if (value < node.right.value) {
        node.right = node.rightRotate(node.right);
      }

      // Fix RIGHT RIGHT Case
      node = node.leftRotate(node);
    }

    return node;
  };

  this.root = insertRec(this.root);
};

AVLTree.prototype.contains = function(value) {
  var has = function(node) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return has(node.left);
    } else if (value > node.value) {
      return has(node.right);
    } else if (value === node.value) {
      return true;
    }

  };

  return has(this.root);
};

AVLTree.prototype.search = function(value) {
  if (!this.root.contains(value)) {
    return;
  }

  var find = function(node) {
    if (node.value === value) {
      return node;
    }

    if (value < node.value) {
      return find(node.left);
    
    } else if (node.value < value) {
      return find(node.right);

    }
  };

  return find(this.root);
};

AVLTree.prototype.remove = function(value) {
  if (!this.contains(value)) {
    return;
  }

  var removeRec = function(node, val) {
    if (val < node.value) {
      node.left = removeRec(node.left, val);

    } else if (node.value < val) {
      node.right = removeRec(node.right, val);

    } else if (node.value === val) {
      if (node.left === null) {
        return node.right;

      } else if (node.right === null) {
        return node.left;

      }

      node.value = node.min(node.right);
      node.right = node.removeRec(node.right, node.value);
    }

    return node;
  };

  this.root = removeRec(this.root, value);

};

AVLTree.prototype.min = function(node) {
  var min = node.value;

  while (node.left !== null) {
    node = node.left;
    min = node.value;
  }

  return min;
};

AVLTree.prototype.max = function(node) {
  var max = node.value;

  while (node.right !== null) {
    node = node.right;
    max = node.value;
  }
  
  return max;
};

AVLTree.prototype.depthFirstLog = function(cb) {
  var depth = function(node) {
    cb(node.value);

    if (node.left !== null) {
      depth(node.left);
    }

    if (node.right !== null) {
      depth(node.right);
    }
  };

  depth(this.root);
};

AVLTree.prototype.breadthFirstLog = function(cb) {
  var q = []; // q = queue
  q.push(this.root);

  while (q.length > 0) {
    var node = q.shift();
    cb(node.value);

    if (node.left !== null) {
      q.push(node.left);
    }

    if (node.right !== null) {
      q.push(node.right);
    }
  }
};

AVLTree.prototype.getHeight = function(node) {
  return node === null ? 0 : node.height;
};

AVLTree.prototype.getBalance = function(node) {
  if (node === null) {
    return 0;
  }

  return node.getHeight(node.left) - node.getHeight(node.right);
};

//      y             RR           x
//     / \           ---->        / \  
//    x   T3         <----       T1  y
//   / \              LR            / \
//  T1  T2                         T2  T3


AVLTree.prototype.rightRotate = function(y) {
  var x = y.left; // keeping reference to y's left
  y.left = x.right;
  x.right = y;

  // first update y's height
  y.height = Math.max(y.getHeight(y.left), y.getHeight(y.right)) + 1; 
  x.height = Math.max(x.getHeight(x.left), x.getHeight(x.right)) + 1;

  return x;
};

AVLTree.prototype.leftRotate = function(x) {
  var y = x.right;
  x.right = y.left;
  y.left = x;

  // first update x's height
  x.height = Math.max(x.getHeight(x.left), x.getHeight(x.right)) + 1;
  y.height = Math.max(y.getHeight(y.left), y.getHeight(y.right)) + 1;
  return y;
};


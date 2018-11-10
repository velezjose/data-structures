

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let hash = [k, v];
  let arr = this._storage.get(index);
  
  if (arr === undefined) {
    this._storage.set(index, []);
    let arr = this._storage.get(index);
    arr.push(hash);
    // this.size++;
    return;

  } else { 

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
        arr[i][1] = v;
        return;
      }
    }

    arr.push(hash);
    // this.size++;
  }
  //var capacity = this.size/this._limit
  //if (capacity > 0.75){
    // this._limit *= 2;
    // this._storage = LimitedArray(this._limit);
    // for loop and rehash everything
    // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let arr = this._storage.get(index);

  if (arr === undefined) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      return arr[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let arr = this._storage.get(index);

  if (arr === undefined) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      arr.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

  insert - best case O(1), worst case O(n)
  retrieve - best case O(1), worst case O(n)
  remove - best case O(1), worst case O(n)

 */



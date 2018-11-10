var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item)) {
    return;
  }
  
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (!this.contains(item)) {
    return;
  }

  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  add - O(n) bcz we check if the item is contained in the Set
  contains - O(n) 
  remove - O(n) 
 */

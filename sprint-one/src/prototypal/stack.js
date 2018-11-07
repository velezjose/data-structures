var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
    this.storage.size++;
  }, 

  pop: function() {
    if (this.size() === 0) {
      return;
    }

    let val = this.storage[this.size() - 1];
    this.storage[this.size() - 1] = undefined;
    this.storage.size--;
    return val;

  }, 

  size: function() {
    if (this.storage.size === undefined) {
      this.storage.size = 0;
    }

    return this.storage.size;
  }
};



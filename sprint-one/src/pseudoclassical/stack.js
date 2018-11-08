var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
  this.storage.size++;
}

Stack.prototype.pop = function() {
  if (this.size() === 0) {
    return;
  }

  let val = this.storage[this.size() - 1];
  this.storage[this.size() - 1] = undefined;
  this.storage.size--;
  return val;
}

Stack.prototype.size = function() {
  if (this.storage.size === undefined) {
    this.storage.size = 0;
  }
  return this.storage.size;
}
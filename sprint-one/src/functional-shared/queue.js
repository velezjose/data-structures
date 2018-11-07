var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    if (this.size() === 0) {
      this.storage.head = 0;
    }

    this.storage.size++;
    this.storage[this.size() + this.storage.head - 1] = value;

  },

  dequeue: function() {
    if (this.size() === 0) {
      return;
    }

    let val = this.storage[this.storage.head];
    this.storage[this.storage.head] = undefined;
    this.storage.size--;
    this.storage.head++;
    return val;
  },

  size: function() {
    if (this.storage.size === undefined) {
      this.storage.size = 0;
    }

    return this.storage.size;
  }

};

function extend(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key]
  }
}



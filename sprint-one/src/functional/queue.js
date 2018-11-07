var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.size() === 0) {
      storage.head = 0;
    }

    storage.size++;
    storage[storage.head + someInstance.size() - 1] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() === 0) {
      return;
    }

    let val = storage[storage.head];
    storage[storage.head] = undefined;
    storage.size--;
    storage.head++;
    return val;
  };

  someInstance.size = function() {
    if (storage.size === undefined) {
      storage.size = 0; 
    }

    return storage.size;
  };


  return someInstance;
};

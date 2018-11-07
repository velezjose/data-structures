var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
    storage.size++;
  };

  someInstance.pop = function() {
    if (someInstance.size() === 0) {
      return;
    }

    var val = storage[someInstance.size() - 1];
    storage[someInstance.size() - 1] = undefined;
    storage.size--;
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

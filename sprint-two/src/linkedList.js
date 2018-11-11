var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let n = Node(value);

    if (list.head === null) {
      list.head = n;
      list.tail = n;
      return;
    }
    
    list.tail.next = n;
    list.tail = n;    
  };

  list.addToHead = function(value) {
    let n = Node(value);

    if (list.head === null) {
      list.head = n;
      list.tail = n;
      return;
    }
    
    n.next = head;
    head = n;    
  };

  list.removeHead = function() {
    let n = list.head;
    list.head = list.head.next;
    n.next = null;
    return n.value;
  };

  list.contains = function(target) {
    let n = list.head;
    
    while (n) {
      if (n.value === target) {
        return true;
      }
      n = n.next;
    }
  
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail - O(1) 
    removeHead - O(1)
    contains - O(n) because we iterate once through the LL
 */

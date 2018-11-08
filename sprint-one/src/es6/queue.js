class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.size = 0;
  }

  enqueue(value) {
    if (this.size() === 0) {
      this.storage.head = 0;
    }

    this.storage.size++;
    this.storage[this.size() + this.storage.head - 1] = value;
  }

  dequeue() {
    if (this.size() === 0) {
      return;
    }

    let val = this.storage[this.storage.head];
    this.storage[this.storage.head] = undefined;
    this.storage.size--;
    this.storage.head++;
    return val;
  }

  size() {
    if (this.storage.size === undefined) {
      this.storage.size = 0;
    }

    return this.storage.size;
  }



}

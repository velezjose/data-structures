class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.size = 0;
  }

  push(value) {
    this.storage[this.size()] = value;
    this.storage.size++;
  }

  pop() {
    if (this.size() === 0) {
      return;
    }

    let val = this.storage[this.size() - 1];
    this.storage[this.size() - 1] = undefined;
    this.storage.size--;
    return val;
  }

  size() {
    if (this.storage.size === undefined) {
      this.storage.size = 0;
    }

    return this.storage.size;

  }

}
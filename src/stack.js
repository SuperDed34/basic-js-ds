const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.stack = [];
    this.size = 0;
  }
  push(element) {
    this.size++;
    this.stack[this.size] = element;
  }

  pop() {
    let res = this.stack[this.size];
    this.stack = this.stack.slice(0, -1);
    this.size--;
    return res;
  }

  peek() {
    return this.stack[this.size];
  }
}

module.exports = {
  Stack
};

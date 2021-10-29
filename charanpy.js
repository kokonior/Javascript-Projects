class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.bottom = node;
    } else {
      const top = this.top;
      this.top = node;
      this.top.next = top;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return null;

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = holdingPointer.next;
    this.length--;
  }

  isEmpty() {
    return !this.top;
  }
}

const stack = new Stack();

// stack.push('google');
// stack.push('udemy');
// stack.pop();
// console.log(stack.peek(), stack);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) return;
    if (this.first === this.last) {
      // this.first = null;
      this.last = null;
      // return this;
    }

    const first = this.first;
    this.first = first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
console.log(queue.enqueue('google'));
console.log(queue.enqueue('udemy'));
console.log(queue.dequeue(''));
console.log(queue.dequeue(''));
console.log(queue.peek());

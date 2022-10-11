/**
 * Queue
 * FIFO
 *
 * @return {Queue}
 * @memberof Queue
 */
 function Queue() {
  this.list = [];
}

/**
 * Add a item on Queue
 *
 * @param {*} item
 * @return {Queue}
 * @memberof Queue
 */
Queue.prototype.enqueue = function enqueue(item) {
  this.list = [...this.list, item];

  return this;
};

/**
 * Remove and return the first item of queue
 *
 * @return {*}
 * @memberof Queue
 */
Queue.prototype.dequeue = function dequeue() {
  const item = this.list[0];
  this.list = this.list.slice(1);

  return item;
};

/**
 * @return {boolean}
 * @memberof Queue
 */
Queue.prototype.isEmpty = function isEmpty() {
  return this.list.length === 0;
};

/**
 * @return {number}
 * @memberof Queue
 */
Queue.prototype.getLength = function getLength() {
  return this.list.length;
};
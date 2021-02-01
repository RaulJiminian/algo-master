// Queue
// - Big O Notation:
//    - Insertion to end of queue and removal from the front the queue in the linked list implementation
//        - Insertion -  O(1)
//        - Removal - O(1)
//    - Searching/Access not important for queues (otherwise you’d use a different data structure other than a linked list):
//        - Searching - O(n)
//        - Access - O(n)

// Singly Linked List Implementation of a Queue
// **Note**: We are using enqueue() and dequeue() as a way to add to the end of the queue and remove from the front of the queue
// We do this because adding to the end and removing from the front of a singly linked list is constant time O(1)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // - Enqueue Pseudocode (similar to push)
  //    - This function accepts a value
  //    - Create a new node using that value passed to the function
  //    - If there are no nodes in the queue, set the new node to be the first and last property of the queue
  //    - Otherwise, set the next property on the current last to that new node, and then set the last property of the queue to be that new node
  //    - Increment the size of the queue by 1
  //    - Return the size of the queue
  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  // - Dequeue Pseudocode (similar to shift)
  //    - This function accepts no arguments
  //    - If there is no first property, return null
  //    - Store the first property in a variable
  //    - See if the first is the same as the last (check if there is only 1 node). If so, set the first and last the be null
  //    - If there is more than 1 node, set the first property to be the next property of the first
  //    - Decrement the size by 1
  //    - Return the value of the node dequeued
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp.val;
  }
}

// Example:
// let queue = new Queue()
// queue.enqueue("First")
// queue.enqueue("Second")
// queue.enqueue("Third")
// queue.dequeue()

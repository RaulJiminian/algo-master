// Singly Linked List

// A Linked List is a collection of nodes
// Define a Node:
//  - A node stores a piece of data (val)
//  - A reference to the next node (next)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Example of how node creation works:
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("buddy")
// console.log(first)

// Define your Singly Linked List Below
// - Big O Notation
//   - Insertion -  O(1)
//   - Removal - It depends…O(1) or O(n)
//   - Searching - O(n)
//   - Access - O(n)

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Pushing Pseudocode
  // - Adds a node to the end of a linked list
  // - This function accepts a value
  // - Creates a new node using the value passed to the function
  // - If there is no head property on the list, set the head and tail to be the newly created node
  // - Otherwise, if there is a head, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // - Increment the length by one
  // - Return Linked List
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Popping Psuedocode
  // Removes a node from the end of the linked list
  // - Define a function called pop() and it doesn't take in any arguments
  // - If there are no nodes in the list, return undefined
  // - Loop through the list until you reach the tail
  // - Set the tail to be the 2nd to last node
  // - Set the next property of the 2nd to last node to be null
  // - Decrement the length of the list by 1
  // - If the length is now zero, remove the pointers to the removed node
  // - Return the value of the node removed
  pop() {
    if (!this.head) undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // Shift Pseudocode
  // Removes a node from the beginning of the Linked list
  // - Define a function called shift() that takes no arguments
  // - If there are no nodes, return undefined
  // - Store the current head property in a variable
  // - Set the head property to be the current head's next property
  // - Decrement the length by 1
  // - Return the value of the node removed
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // Unshift Pseudocode
  // Adds a new node to the beginning of the Linked list
  // - Define a function unshift() that takes a value
  // - Create a new node using the value passed to the function
  // - If there is no head property on the list, set the head and tail to be the newly created node
  // - Otherwise set the newly created node's next property to be the current head property on the list
  // - Set the head property on the list to be that newly created node
  // - Increment the length of the list by 1
  // - Return the linked list
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Get Pseudocode
  // Retrieves a node by it's position in the Linked list
  // - Define a function get() that accepts an index
  // - If the index is less than zero or greater than or equal to the length of the list, return null
  // - Loop through the list until you reach the index and return the node at that specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // Set Pseudocode
  // Changes the value of a node based on it's position in the Linked list
  // - Define a function set() that accepts an index and a value
  // - Use your get() function to find the specific node
  // - If the node is not found, return false
  // - If the node is found, set the value of that node to be the value passed to the function and return true
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert Pseudocode
  // Adds a node to a Linked List at a specific position
  // - Define a function insert() that takes two values, an index and a value
  // - If the index is less than zero or greater than the length, return false
  // - If the index is the same as the length, push a new node to the end of the list
  // - If the index is 0, unshift a new node to the start of the list
  // - Create a new node, pass the value of the function to the new Node
  // - Otherwise, using the get method, access the node at the index - 1
  // - Set the next property on that node to be the newly created node
  // - Set the next property on the new node to be the previous next
  // - Increment the length
  // - Return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);

    let tempNode = prev.next;
    prev.next = newNode;
    newNode.next = tempNode;

    this.length++;
    return true;
  }

  // Remove Pseudocode
  // Removes a node from the Linked list at a specific position
  // - Define a function remove() that takes an index
  // - If the index is less than zero or greater than the length, return undefined
  // - If the index is the same as the length - 1, pop
  // - If the index is 0, shift
  // - Otherwise, using the get method, access the node at the index - 1
  // - Set the next property on that node to be the next of the next node
  // - Decrement the length
  // - Return the value of the node removed
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length--;
    return removed;
  }

  // Reverse Pseudocode
  // Reverses the Linked list in place
  // - Define a function reverse() that doesn't take an arguement
  // - Swap the head and the tail
  // - Create a variable called next
  // - Create a variable called prev
  // - Create a variable called node and initialize it to the head property
  // - Loop through the list
  // - Set next to be the next property on whatever node is
  // - Set the next property on the node to be whatever prev is
  // - Set prev to be the value of the node variable
  // - Set the node variable to be the value of the next variable
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!!!");
console.log(list);

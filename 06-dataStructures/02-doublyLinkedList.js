// Doubly Linked List

// A Linked List is a collection of nodes
// Define a Node:
//  - A node stores a piece of data (val)
//  - A reference to the next node (next)
//  - A reference to the previous node (previous)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Define your Doubly Linked List Below
// - Big O Notation
//    - Insertion -  O(1)
//    - Removal - O(1)
//    - Searching - O(n) [technically it’s O(n / 2), but that simplifies to O(n)]
//    - Access - O(n)

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push Pseudocode
  // Adds a node to the end of the Doubly Linked List
  //  - Define a function push() that takes a value
  //  - Create a new node with the value passed to the function
  //  - If the head property is null set the head and tail to be the newly created node
  //  - If not, set the next property on the tail to be that node
  //  - Set the previous property on the newly created node to be the tail
  //  - Update the tail to be the newly created node
  //  - Increment the length
  //  - Return the Doubly Linked List
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Pop Pseudocode
  // Removes a node from the end of the Doubly Linked List
  //  - Define a function pop() that takes no arguments
  //  - If there is no head, return undefined
  //  - Store the current tail in a variable to return later
  //  - If the length is 1, set the head and tail to be null
  //  - Update the tail to be the previous Node
  //  - Set the newTail's next to null
  //  - Decrement the length
  //  - Return the value removed
  pop() {
    if (!this.head) return undefined;

    let removedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }

    this.length--;
    return removedTail;
  }

  // Shift Pseudocode
  // Removes a node from the beginning of the Doubly Linked List
  //  - Define a function called shift() that takes no arguments
  //  - If length is 0 (or no head), return undefined
  //  - Store the current head property in a variable
  //  - If the length is one
  //       - set the head to be null
  //       - set the tail to be null
  //  - Update the head to be the next of the old head
  //  - Set the head's prev property to null
  //  - Set the old head's next to null
  //  - Decrement the length
  //  - Return old head
  shift() {
    if (!this.head) return undefined;

    let removedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }

    this.length--;
    return removedHead;
  }

  // Unshift Pseudocode
  // Adds a node to the beginning of the Doubly Linked List
  //  - Define a function called unshift() that takes a value
  //  - Create a new node with the value passed to the function
  //  - If the length is 0
  //       - Set the head to be the new node
  //       - Set the tail to be the new node
  //  - Otherwise
  //       - Set the prev property on the head of the list to be the new node
  //       - Set the next property on the new node to be the head property
  //       - Update the head to be the new node
  //  - Increment the length
  //  - Return the list
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // GET Pseudocode
  // Accesses a node in a Doubly Linked List by its position
  //  - Define a function called get() that takes an index
  //  - If the index is less than 0 or greater or equal to the length, return null
  //  - If the index is less than or equal to half the length of the list
  //       - Loop through the list starting from the head and loop towards the middle
  //       - Return the node once it is found
  //  - If the index is greater than half the length of the list
  //       - Loop through the list starting from the tail and loop towards the middle
  //       - Return the node once it is found
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  // SET Pseudocode
  // Replaces the value of an existing node in a Doubly Linked List
  //  - Define a function set() that takes an index and a value
  //  - Create a variable which is the result of the GET method at the index passed to the function
  //       - If the GET method returns a valid node, set the value of that node to be the value passed to the function
  //       - Return true
  //  - Otherwise, return false
  set(index, val) {
    let currentNode = this.get(index);

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;
  }

  // Insert Pseudocode
  // Adds a node in a Doubly Linked list by a certain position
  //  - Define a function insert() that takes an index and a value
  //  - Edge cases (returns true or false)
  //       - If the index is less than zero or greater than or equal to the length return false
  //       - If the index is 0, unshift()
  //       - If the index is the same as the length, push()
  //  - Use the GET method to access the index - 1, store in a variable (will serve as the previous node)
  //  - Create a new node and pass the vale from the function, store to a variable (will serve as the inserted node)
  //  - Initialize a variable (will serve as the next node); use the previous node as a reference point
  //  - Set the next and prev properties on the correct nodes to link everything together
  //  - Increment the length
  //  - Return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let prevNode = this.get(index - 1);
    let insertNode = new Node(val);
    let nextNode = prevNode.next;

    prevNode.next = insertNode;
    nextNode.prev = insertNode;
    insertNode.prev = prevNode;
    insertNode.next = nextNode;

    this.length++;
    return true;
  }

  // Remove Pseudocode
  // Removes a node in a Doubly Linked List by index
  //  - Define a function remove() that takes an index
  //  - Edge cases (returns the removed node)
  //       - If the index is less than zero or greater than or equal to the length return undefined
  //       - If the index is 0, shift()
  //       - If the index is equal to the length - 1, pop()
  //  - Use the GET method to retrieve the item to be removed
  //  - Update the next and prev properties to remove the found node from the list
  //  - Set next and prev to null on the found node
  //  - Decrement the length
  //  - Return the removed node
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  // Reverse
  reverse() {
    if (this.length <= 1) return this;

    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    for (let i = 0; i < this.length; i++) {
      let prevNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = prevNode;
      currentNode = prevNode;
    }

    return this;
  }
}

const list = new DoublyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!!!");

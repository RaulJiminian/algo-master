// DLL Reverse
// Implement the following on the Doubly Linked List class

// reverse()

// This function should reverse all of the nodes in a DLL
// It should return the new Singly Linked List

// ------------------------------------
//       -- STARTER CODE --
// ------------------------------------
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }
// }

// Example (input/output):
// let dll = new DoublyLinkedList();
// dll.push(5).push(10).push(15).push(20) // dll
// dll.reverse() // DLL
// dll.length // 4
// dll.head.val // 20
// dll.head.next.val // 15
// dll.head.next.next.val // 10
// dll.head.next.next.next.val // 5

// ------------------------------------
//       -- SOLUTION BELOW --
// ------------------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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

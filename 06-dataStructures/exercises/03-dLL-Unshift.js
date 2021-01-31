// DLL Unshift
// Implement the following on the Doubly Linked List class

// unshift()

// This function should accept a value
// It will add a node to the beginning of the DLL with the value passed to the function
// It should return the DLL

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
// dll.unshift(5) // dll
// dll.length // 1
// dll.head.val // 5
// dll.tail.val // 5
// dll.unshift(10) // dll
// dll.length // 2
// dll.head.val // 10
// dll.head.next.val // 5
// dll.tail.val // 5
// dll.unshift(15) // dll
// dll.length // 3
// dll.head.val // 15
// dll.tail.val // 5
// dll.head.next.next.val // 5

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

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
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
}

// DLL Get
// Implement the following on the Doubly Linked List class

// get()

// This function should accept an index
// It should find a node in the DLL at the index passed to the function
// It should return the found node

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
// dll.get(0) // 5
// dll.get(1) // 10
// dll.get(2) // 15
// dll.get(3) // 20
// dll.get(4) // null

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
}

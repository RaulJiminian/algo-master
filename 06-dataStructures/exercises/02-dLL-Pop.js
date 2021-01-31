// DLL Pop
// Implement the following on the Doubly Linked List class

// pop()

// This function takes no arguments
// It should remove a node from the end of the DLL
// It should return the removed node

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
// dll.push(5) // dll
// dll.length // 1
// dll.head.val // 5
// dll.tail.val // 5
// dll.head.prev // null
// dll.push(10) // dll
// dll.length // 2
// dll.head.val // 5
// dll.head.next.val // 10
// dll.tail.val // 10
// dll.push(15) // dll
// dll.length // 3
// dll.head.val // 5
// dll.tail.val // 15
// dll.tail.prev.val // 10
// dll.head.next.next.val // 15

// dll.pop().val // 15
// dll.length // 2
// dll.pop().val // 10
// dll.length // 1
// dll.pop().val // 5
// dll.length // 0
// dll.pop().val // undefined
// dll.length // 0
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
}

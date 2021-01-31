// DLL Shift
// Implement the following on the Doubly Linked List class

// shift()

// This function will remove a node from the beginning of the DLL
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

//   unshift(val) {
//     let newNode = new Node(val);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
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

// dll.shift().val // 15
// dll.length // 2
// dll.shift().val // 10
// dll.length // 1
// dll.shift().val // 5
// dll.length // 0
// dll.shift().val // undefined
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
}

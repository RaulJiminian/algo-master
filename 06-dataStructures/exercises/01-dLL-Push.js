// DLL Push
// Implement the following on the Doubly Linked List class

// push()

// This function should accept a value
// It will add a node to the end of the DLL with the value passed to the function
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

//   push() {}
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
      let oldtail = this.tail;
      oldtail.next = newNode;
      newNode.prev = oldtail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

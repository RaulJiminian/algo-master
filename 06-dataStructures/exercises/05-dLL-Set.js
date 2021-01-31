// DLL Set
// Implement the following on the Doubly Linked List class

// set()

// This function should accept an index and a value
// It will update the value of the node in the DLL at the index with the value passed to the function
// It should return true if the node is updated successfully
// It should return false if an invalid index is passed to the function

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

//   get(index) {
//     if (index < 0 || index >= this.length) return null;

//     let count, current;

//     if (index <= this.length / 2) {
//       count = 0;
//       current = this.head;
//       while (count !== index) {
//         current = current.next;
//         count++;
//       }
//     } else {
//       count = this.length - 1;
//       current = this.tail;
//       while (count !== index) {
//         current = current.prev;
//         count--;
//       }
//     }

//     return current;
//   }
// }

// Example (input/output):
// let dll = new DoublyLinkedList();
// dll.push(5).push(10).push(15).push(20) // dll
// dll.set(0, 10) // true
// dll.length // 4
// dll.head.val // 10
// dll.set(10, 10) // false
// dll.set(2, 100) // true
// dll.head.next.next.val // 100

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

  set(index, val) {
    let currentNode = this.get(index);

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;
  }
}

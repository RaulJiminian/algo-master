// DLL Remove
// Implement the following on the Doubly Linked List class

// remove()

// This function should accept an index
// It will remove a specified node in the DLL at the index passed to the function
// If the index is invalid, return undefined
// Otherwise, it should return the removed node

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

//   pop() {
//     if (!this.head) return undefined;

//     let removedTail = this.tail;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = removedTail.prev;
//       this.tail.next = null;
//       removedTail.prev = null;
//     }

//     this.length--;
//     return removedTail;
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

//   shift() {
//     if (!this.head) return undefined;

//     let removedHead = this.head;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = removedHead.next;
//       this.head.prev = null;
//       removedHead.next = null;
//     }

//     this.length--;
//     return removedHead;
//   }
// }

// Example (input/output):
// let dll = new DoublyLinkedList();
// dll.push(5).push(10).push(15).push(20) // dll
// dll.remove(2).val // 15
// dll.remove(100) // undefined
// dll.length // 3
// dll.head.val // 5
// dll.head.next.val // 10
// dll.head.next.next.val // 20

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
}

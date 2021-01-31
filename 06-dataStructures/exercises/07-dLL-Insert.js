// DLL Insert
// Implement the following on the Doubly Linked List class

// insert()

// This function should accept an index and a value
// It will add a node in the DLL with a value passed to the function at the specified index
// If the index is invalid, return false
// Otherwise, it should return true

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
// dll.push(5).push(10).push(15).push(20) // dll
// dll.insert(2, 12) // true
// dll.insert(100, 12) // false
// dll.length // 5
// dll.head.val // 5
// dll.head.next.val // 10
// dll.head.next.next.val // 12
// dll.head.next.next.next.val // 15
// dll.head.next.next.next.next.val // 20

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
}

// Stack

// Singly Linked List Implementation of a Stack
// **Note**: We are using push() and pop() as a way to add/remove from the FRONT of the linked list (not the END)
// We do this because adding/removing from the front of a singly linked list is constant time O(1) versus O(n) if we add/remove from the end of a singly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // - Push Pseudocode:
  //    - The function should accept a value
  //    - Create a new node with that value
  //    - If there are no nodes in the stack, set the first and last property to be the newly created node
  //    - If there is at least one node, create a variable that stores the current first property on the stack
  //    - Reset the first property to be the newly created node
  //    - Set the next property on the node to be the previously created variable
  //    - Increment the size of the stack by 1
  //    - Return the size of the stack
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this.size;
  }

  // - Pop Pseudocode:
  //    - The function does not take any arguments
  //    - If there are no nodes in the stack, return null
  //    - Create a temporary variable to store the first property on the stack
  //    - If there is only 1 node, set the first and the last property to be null
  //    - If there is more than one node, set the first property to be the next property on the current first
  //    - Set the removed node’s next property to null
  //    - Decrement the size by 1
  //    - Return the value of the node removed
  pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

// Example:
// let stack = new Stack()
// stack.push("First")
// stack.push("Second")
// stack.push("Third")
// stack.pop()

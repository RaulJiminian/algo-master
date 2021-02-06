// Stack
// - Big O Notation:
//    - Insertion/Removal from the front of a singly linked list in the linked list implementation
//        - Insertion -  O(1)
//        - Removal - O(1)
//    - Searching/Access not important for stacks (otherwise you’d use a different data structure other than a linked list):
//        - Searching - O(n)
//        - Access - O(n)

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
    // Step 1: Create a node with value passed to function
    let newNode = new Node(val);

    // Step 2: If there are no nodes in the stack, set the first and last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Step 3: Otherwise,
      // create a temp variable that stores the current first property on the stack
      // Reset the first property to be the newly created node
      // Set the next property on the node to be the previously created temp variable
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    // Step 4: Increment the size by 1 and return size
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
    // Step 1: If there are no nodes in the stack, return null
    if (!this.first) return null;

    // Step 2: Create a temporary variable to store the first property on the stack
    let temp = this.first;

    // Step 3a:If there is only 1 node,
    // set the first and the last property to be null
    // alternate conditional (this.first === this.last)
    if (this.size === 1) {
      this.last = null;
    }

    // Step 3b: Sets next variable to null (from step 2)
    this.first = this.first.next;
    // Step 4: Reset temp next's variable to null so it does not point back to the list
    temp.next = null;
    // Step 5: decrement size
    this.size--;

    // Return temp value
    return temp.val;
  }
}

// Example:
// let stack = new Stack()
// stack.push("First")
// stack.push("Second")
// stack.push("Third")
// stack.pop()

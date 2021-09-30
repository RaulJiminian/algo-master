// Binary Search Tree

// A Tree is a data structure that consists of nodes in a parent / child relationship
// A Binary Search Tree is a type of Binary Tree with the following rules:
//   - Every parent node has at most two children
//   - Every node to the left of a parent node is always less than the parent
//   - Every node to the right of a parent node is always greater than the parent
// A Binary Search Tree is a special type of Binary Tree

// Define a Node:
//  - A node stores a piece of data (val)
//  - A reference to the left node (left)
//  - A reference to the right node (right)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Define a BinarySearchTree below:
// - Big O Notation
//    - Insertion -  O(log n) - best and avg case
//    - Searching - O(log n) - best and avg case
//      - Note: O(log n) is not guaranteed. In worst case scenario, we could reach O(n). This can happen with one-sided binary trees
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert Pseudocode (iteratively)
  // - Create a method called insert() that takes a value as an argument
  // - Create a new node
  // - Starting at the root
  //   - Check if there is a root, if not
  //     - The root now becomes that new node
  //     - Return this (the entire Binary Search Tree)
  //   - Else (if there is a root)
  //   - Initialize a variable called current and assign it to the root of the tree
  //   - Use a while loop, with the condition set to the boolean true
  //   - If the values are equal; return undefined
  //   - Note: We will now need to check if the value of the new node is greater than or less than the value of the root
  //   - If the value passed is less than current value
  //     - Check to see if there is a node to the left
  //        - If there is not, add that node as the left property; return the tree
  //        - If there is, move to that node and repeat these steps (reassign current to the left node)
  //   - If it is greater
  //     - Check to see if there is a node to the right
  //        - If there is not, add that node as the right property; return the tree
  //        - If there is, move to that node and repeat these steps (reassign current to the right node)
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // Find Pseudocode for BST (iteratively or recursively)
  // - Starting at the root
  //   - Check if there is a root, if not - return false as we’re done searching
  //  [let current = this.root]
  //  [let found = false]
  //   - If there is a root, start a while loop with the following conditional: while there is a current (starting with root) and !found
  //   - Check to see if the value is greater or less than the value of the root
  //   - If it is less
  //     - reassign current to the left node
  //   - If it is greater
  //     - reassign current to the right node
  //   - Else
  //     - reassign found to true
  //   - Outside of the while loop, check to see if not found (!found) return false
  //   - Return current
  find(val) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    return current;
  }
}

// Tree Visual Example:
//      10
//    /    \
//   5      13
//  / \    /  \
// 2   7  11  16

// let tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// tree.find(7)

// Binary Search Tree

// A Tree is a data structure that consists of nodes in a parent / child relationship
// A Binary Tree is a type of Tree with the following rules:
//   - Every parent node has at most two children
//   - Every node to the left of a parent node is always less than the parent
//   - Every node to the right of a parent node is always greater than the parent
// A Binary Search Tree is a special type of Binary Tree

// Define a Node:
//  - A node stores a piece of data (val)
//  - A reference to the next node (next)
//  - A reference to the previous node (previous)

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

  // - Insert Pseudocode (iteratively or recursively)
  // - Create a new node
  // - Starting at the root
  //   - Check if there is a root, if not - the root now becomes that new node
  //   - If there is a root, check if the value of the new node is greater than or less than the value of the root
  //   - If it is greater
  //     - Check to see if there is a node to the right
  //        - If there is, move to that node and repeat these steps
  //        - If there is not, add that node as the right property
  //   - If it is less
  //     - Check to see if there is anode to the left
  //        - If there is, move to that node and repeat these steps
  //        - If there is not, add that node as the left property
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

  // - Find Pseudocode for BST (iteratively or recursively)
  // - Starting at the root
  //   - Check if there is a root, if not - return false as we’re done searching
  //   - If there is a root, check if the value is the value we are looking for. If we found it, return node
  //   - If not, check to see if the value is greater or less than the value of the root
  //   - If it is greater
  //     - Check to see if there is a node to the right
  //        - If there is, move to that node and repeat these steps
  //        - If there is not, return false as we’re done searching
  //   - If it is less
  //     - Check to see if there is a node to the left
  //        - If there is, move to that node and repeat these steps
  //        - If there is not, return false as we’re done searching
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

// let tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// tree.find(7)

// Tree Traversal
// Although we are using a binary search tree below, the BFS and DFS tree traversal methods apply to all types of trees

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

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

  // Breadth-first Search Pseudocode (BFS)
  // - Create a function BFS() that does not take any arguments
  // - Initialize a variable called data and assign it to an empty array literal (this will store the values of nodes visited)
  // - Initialize a variable called queue and assign it to an empty array literal (this will serve as our queue, we are using an array for simplification)
  // - Initialize a variable called node and assign it to this.root
  // - Push node into the queue
  // - Using a while loop, loop as long as there is anything in the queue (we can use queue.length as the condition for the loop as 0 will result in falsey; an empty array results in a truthy value)
  //    - Reassign node to the dequeued node from the queue (using shift())
  //    - Push the *value* of the node into the data array
  //    - If there is a left property on the node dequeued (node.left) - push the left node into the queue
  //    - If there is a right property on the node dequeued (node.right) - push the right node into the queue
  // - Outside of the while loop, return the data array
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Depth-first Search (DFS) - PreOrder
  // - Requirement: Recursion
  // - Goal: To traverse the tree by visiting all left nodes first (down each level until all lefts are completed)
  // - Initialize a variable called data and assign it to an empty array literal (this will store the values of nodes visited)
  // - Write a helper function called traverse() which accepts a node
  //    - Push the *value* of the node passed into the function to the data array
  //    - If the node has a left property (node.left), call (recursively) the helper function with the left property on the node (node.left)
  //    - If the node has a right property (node.right), call (recursively) the helper function with the right property on the node (node.right)
  // - Outside of the helper function, invoke the helper function starting with the root of the tree
  // - Return the data array

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  // DFS - PostOrder
  // - Practically identical to PreOrder, except we insert a node value to the data array after we have traversed the left side (and right side)
  // - The order for the helper function is now as follows:
  //     - If the node has a left property (node.left), call (recursively) the helper function with the left property on the node (node.left)
  //     - If the node has a right property (node.right), call (recursively) the helper function with the right property on the node (node.right)
  //     - Push the *value* of the node passed into the function to the data array
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(this.root);
    return data;
  }

  // DFS - InOrder
  // - Also practically identical to above DFS methods. This time however, we visit all left nodes and push the value of the last left leaf, then move onto the right
  // - The order for the helper function is now as follows:
  //     - If the node has a left property (node.left), call (recursively) the helper function with the left property on the node (node.left)
  //     - Push the *value* of the node passed into the function to the data array
  //     - If the node has a right property (node.right), call (recursively) the helper function with the right property on the node (node.right)
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

// Tree Visual Example:
//      10
//    /    \
//   6      15
//  / \       \
// 3   8       20

// Tree Build for Example:
// let tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(6)
// tree.insert(15)
// tree.insert(3)
// tree.insert(8)
// tree.insert(20)
// tree.BFS() // [ 10, 6, 15, 3, 8, 20 ]
// tree.DFSPreOrder() // [10, 6, 3, 8, 15, 20]
// tree.DFSPostOrder() // [3, 8, 6, 20, 15, 10]
// tree.DFSInOrder() // [3, 6, 8, 10, 15, 20]

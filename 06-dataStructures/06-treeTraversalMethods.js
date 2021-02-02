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
  // - Create a variable called queue (this can be an array for simplification) and a variable called data to store the values of nodes visited (also an array)
  // - Place the root node in the queue (using .push())
  // - Loop as long as there is anything in the queue (an empty array results in a truthy value, so we use queue.length as the condition for the loop instead as 0 results in falsey)
  //    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  //    - If there is a left property on the node dequeued - add it to the queue
  //    - If there is a right property on the node dequeued - add it to the queue
  // - Return the variable that stores the values
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
  // - Traverse tree by visiting all left nodes first (down each level until all lefts are completed). We will use recursion to handle this
  // - Create a variable to store the values of nodes visited (called data and set to an empty array)
  // - Write a helper function (traverse()) which accepts a node
  //    - Push the value of the node to the data array
  //    - If the node has a left property, call (recursively) the helper function with the left property on the node
  //    - If the node has a right property, call (recursively) the helper function with the right property on the node
  // - Invoke the helper function starting with the root of the tree
  // - Return the array of values (data)
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
  // - Practically identical to PreOrder (see above), except we insert a node value to the data array after we have traversed the left side (and right side)
  // - The order for the helper function is now as follows:
  //     - If the node has a left property, call (recursively) the helper function with the left property on the node
  //     - If the node has a right property, call (recursively) the helper function with the right property on the node
  //     - Push the value of the node to the data array
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
  //     - If the node has a left property, call (recursively) the helper function with the left property on the node
  //     - Push the value of the node to the data array
  //     - If the node has a right property, call (recursively) the helper function with the right property on the node
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
// tree.DFSPreOrder() // [10, 6, 3, 8, 15, 20]
// tree.DFSPostOrder() // [3, 8, 6, 20, 15, 10]
// tree.DFSInOrder() // [3, 6, 8, 10, 15, 20]

// Binary Heap
// Big O Notation:
// - Binary Heaps (mix and max) are great at insertion and removal
// - Insertion - O(log n)
// - Removal - O(log n)
// - Search - O(n)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // INSERT Pseudocode
  // - Define a function insert() that takes a value
  // - Push the value passed to the function into the values property on the heap
  // - Bubble that value up the values property:
  //   - Create a variable called index which is the length of the values property - 1
  //   - Create a variable called parentIndex which is the floor of (index -1)/2
  //   - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
  //      - Swap the value of the values element at the parentIndex with the value of the element property at the child index
  //      - Set the index to be the parentIndex, and start over
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // EXTRACT-MAX (REMOVE) Pseudocode
  // - Define a function extractMax()
  // - Swap the first value in the values property with the last one
  // - Pop from the values property, so you can return the value at the end
  // - Have the new root “sink down” to the correct spot…
  //     - Your parent index starts at 0 (the root)
  //     - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  //     - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  //     - If the left or right child is greater than the element…swap. If both left and right children are larger, swap with the largest child
  //     - The child index you swapped to now becomes the new parent index
  //     - Keep looping and swapping until neither child is larger than the element
  //     - Return the old root (removed value)
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    // Edge case for when you are down to one item in the list
    if (this.values.length > 0) {
      this.values[0] = end;
      // Sink down (or bubble down) the first item in binary heap to where it belongs
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// Using an array to represent the binary heap
// Visual Representation of binary heap tree:
//       41
//      /   \
//    39     33
//   /  \   /
//  18  27 12
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
// [41, 39, 33, 18, 27, 12]

// Insert new values below
heap.insert(55);

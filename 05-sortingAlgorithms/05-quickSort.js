// Quick Sort

// Pivot Helper Function Pseudocode:
//  - Create a function called pivot that will accept three arguments
//    - An array
//    - A start index (default to 0)
//    - An end index (default to array length minus 1)
//  - Initialize a variable called pivot and set it to the array at start (this will help us organize our array; smaller values to the left, larger values to the right)
//  - Initialize a variable called swapIdx and set it to start (this will keep track of where the pivot should end up; it is also what we return from this helper function)
//  - Create a for loop that loops through the array; set i to start + 1, loop until i is <= end ("end" as in the variable, not array length)
//      - Inside of the for loop, set a conditional:
//        - If pivot is greater than array at i:
//          - Increment swapIdx
//          - Then swap array at i with the element at array at swapIdx
//  - Outside of the for loop, swap the element at array at start (ie, the pivot) with the element at array at swapIdx with the pivot index
//  - Return swapIdx

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);
// pivot([4, 8, 2, 1, 5, 7, 6, 3]) => 3 (the index value)

// - Quick Sort Pseudocode:
//  - Call the pivot helper on the array
//  - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
//  - Your base case occurs when you consider a subarray with less than 2 elements

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// quickSort([10, 20, 5, 2, 15, 33, 7])

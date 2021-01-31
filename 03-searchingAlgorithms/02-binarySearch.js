// Binary Search
// Time Complexity: O(log n)
// Requires: Sorted array
// Uses Divide and Conquer technique

// Example Problem using binary search
// Create a function that accepts an array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array.
// While the left pointer comes before the right pointer:
// - Create a pointer in the middle
// - If you find the value you want, return the index
// - If the value is too small, move the left pointer up
// - If the value is too large, move the right pointer down
// If you never find the value, return -1

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === value ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28], 15);

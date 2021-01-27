// Linear Search
// Time Complexity: O(n)

// Example Problem using Linear Search:
// Write a function that accepts an array (unsorted) and a value
// Loop through the array and check if the current array element is equal to the value.
// If it is, return the index at which the element is found
// If the value is never found, return -1

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 45);

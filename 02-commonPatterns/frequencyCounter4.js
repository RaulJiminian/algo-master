// Frequency Counter (common pattern):
// This pattern uses objects or sets to collect values / frequencies
// This can often avoid the need for nested loops

// Example
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates amoung the arguments passed in.
// You can solve this using the frequency counter OR the multiple pattern.
// Your solution MUST have the following complexities:
// Time: O(n)
// Space: O(n)

// Input / Output:
// areThereDuplicates(1, 2, 3) => false
// areThereDuplicates(1, 2, 2) => true
// areThereDuplicates("a", "b", "c", "a") => true

function areThereDuplicates(...data) {
  // Create an empty hash table
  const collection = {};

  // Loop through array of elements
  for (const element of data) {
    // store each element inside of the empty object
    collection[element] = (collection[element] || 0) + 1;
  }

  // Loop through values in hash table
  for (const element in collection) {
    // Check to see if an element's value is greater than 1
    if (collection[element] > 1) return true;
  }

  return false;
}

// areThereDuplicates(1, 2, 3)
// areThereDuplicates(1, 2, 2)
// areThereDuplicates("a", "b", "c", "a")

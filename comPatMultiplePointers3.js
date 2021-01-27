// Multiple Pointers (common pattern):
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

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

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// areThereDuplicates(1, 2, 3)
// areThereDuplicates(1, 2, 2)
// areThereDuplicates("a", "b", "c", "a")

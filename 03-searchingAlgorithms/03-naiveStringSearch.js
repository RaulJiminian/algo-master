// Naive Search on a String
// Time Complexity: O(n^2)

// Example problem for a substring search using a naive approach
// Create a function called naiveSearch that takes in a long string and a short string.
// The function checks to see how many times, if any, the short string appears in the long string.
// Loop over the longer string.
// Loop over the shorter string.
// If the characters don't match, break out of the inner loop.
// If the characters do match, keep going.
// If you complete the inner loop and find a match, increment the count of matches.
// Return the count

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lo");

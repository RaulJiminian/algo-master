// Sliding Window (common pattern):
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Example
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Your solution MUST have at least one the following complexities:
// Time: O(N)

// Input / Output:
// findLongestSubstring("") => 0
// findLongestSubstring("rithmschool") => 7
// findLongestSubstring("thisisawesome") => 6
// findLongestSubstring("thecatinthehat") => 7
// findLongestSubstring("bbbbbb") => 1
// findLongestSubstring("longestsubstring") => 8
// findLongestSubstring("thisishowwedoit") => 6

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    console.log(`i: ${i}`);
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// findLongestSubstring("")
// findLongestSubstring("rithmschool")
findLongestSubstring("thisisawesome");
// findLongestSubstring("thecatinthehat")
// findLongestSubstring("bbbbbb")
// findLongestSubstring("longestsubstring")
// findLongestSubstring("thisishowwedoit")

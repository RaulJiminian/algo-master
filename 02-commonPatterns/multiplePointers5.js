// Multiple Pointers (common pattern):
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

// Example
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first sring appear somewhere in the second string, without their order changing.

// Your solution MUST have at least one the following complexities:
// Time: O(N + M)
// Space: O(1)

// Input / Output:
// isSubsequence('hello', 'hello world') => true
// isSubsequence('sing', 'sting') => true
// isSubsequence('abc', 'abracadabra') => true
// isSubsequence('abc', 'acb') => false

// Original Solution
// function isSubsequence(string1, string2) {
//   let pointerOne = 0;
//   let pointerTwo = 0;

//   while (pointerTwo !== string2.length + 1) {
//     let tempNumOne = 0;
//     let tempNumTwo = 0;

//     if (pointerOne === string1.length) {
//       return true;
//     }

//     if (string1[pointerOne] !== string2[pointerTwo]) {
//       tempNumTwo++;
//     }

//     if (string1[pointerOne] === string2[pointerTwo]) {
//       tempNumOne++;
//       tempNumTwo++;
//     }

//     pointerOne += tempNumOne;
//     pointerTwo += tempNumTwo;
//   }

//   return false;
// }

// ReFactored Solution
function isSubsequence(string1, string2) {
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerTwo < string2.length) {
    if (string1[pointerOne] === string2[pointerTwo]) {
      pointerOne++;
    }

    if (pointerOne === string1.length) return true;

    pointerTwo++;
  }

  return false;
}

// isSubsequence('hello', 'hello world')
// isSubsequence('sing', 'sting')
// isSubsequence('abc', 'abracadabra')
isSubsequence("abc", "acb");

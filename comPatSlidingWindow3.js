// Sliding Window (common pattern):
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Example
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Your solution MUST have at least one the following complexities:
// Time: O(N)
// Space: O(1)

// Input / Output:
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) => 2 -> because [4, 3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9) => 2 -> because [5, 4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 9, 21, 62, 33, 19], 52) => 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) => 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) => 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) => 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) => 0

function minSubArrayLen(arr, num) {
  let minLength = Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (start < arr.length) {
    if (sum < num && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= num) {
      minLength = Math.min(minLength, end - start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
// minSubArrayLen([2, 1, 6, 5, 4], 9)
// minSubArrayLen([3, 1, 7, 11, 2, 9, 9, 21, 62, 33, 19], 52)
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)

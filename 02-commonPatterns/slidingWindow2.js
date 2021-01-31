// Sliding Window (common pattern):
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Example
// Given an array of integers and a number, write a function maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Your solution MUST have at least one the following complexities:
// Time: O(N)
// Space: O(1)

// Input / Output:
// maxSubarraySum([100, 200, 300, 400], 2) => 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) => 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) => 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) => 5
// maxSubarraySum([2, 3], 3) => null

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2);
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)
// maxSubarraySum([2, 3], 3)

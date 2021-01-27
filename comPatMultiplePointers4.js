// Multiple Pointers (common pattern):
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

// Example
// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Your solution MUST have the following complexities:
// Time: O(n)
// Space: O(1)

// Input / Output:
// averagePair([1, 2, 3], 2.5) => true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) => false
// averagePair([], 4) => false

function averagePair(arr, num) {
  if (arr.length === 0) return false;
  // Create pointers for array start and array end
  let left = 0;
  let right = arr.length - 1;

  // While loop
  // Base Case: when pointers meet
  while (left < right) {
    // Get average values at pointers
    let average = (arr[left] + arr[right]) / 2;
    console.log(left, right, average);

    // Check if average is target average
    if (average === num) return true;

    // Base Case Logic: Check if average is higher or lower than target average
    // Increment left if the average is lower than target average
    // Decrement right if the average is higher than target average
    average > num ? (right -= 1) : (left += 1);
  }

  return false;
}

averagePair([1, 2, 3], 2.5);
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
// averagePair([-1, 0, 3, 4, 5, 6], 4.1)
// averagePair([], 4)

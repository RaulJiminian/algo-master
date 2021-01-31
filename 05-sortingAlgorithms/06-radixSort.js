// Radix Sort
// HELPER FUNCTIONS

// Helper function that returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper function that returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

// Helper function that given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(digitCount(nums[i]), max);
  }
  return max;
}

// Radix Sort Pseudocode:
// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
//  - Create buckets for each digit (0 to 9)
//  - Place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// Return list at the end
// Big O Notation:
//  - Time complexity: O(nk) in best, average, and worst case scenario
//  - Space complexity: O(n + k)

function radixSort(nums) {
  let maxDigitCout = mostDigits(nums);

  for (let k = 0; k < maxDigitCout; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

radixSort([23, 345, 3425, 5849, 12, 3503, 9853]);

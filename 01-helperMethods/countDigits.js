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

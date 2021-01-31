// Frequency Counter (common pattern):
// This pattern uses objects or sets to collect values / frequencies
// This can often avoid the need for nested loops

// Example
// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(n)

// Input/Output:
// sameFrequency(182, 281) => true
// sameFrequency(34, 14) => false
// sameFrequency(3589578, 5879385) => true
// sameFrequency(22, 222) => false

function sameFrequency(numOne, numTwo) {
  const lenOne = Math.floor(Math.log10(numOne) + 1);
  const lenTwo = Math.floor(Math.log10(numTwo) + 1);

  if (lenOne !== lenTwo) return false;

  const counterOne = {};
  const counterTwo = {};

  while (numOne !== 0) {
    // remove number using modulus of 10
    // insert number into counter hash table
    let popNumOne = numOne % 10;
    numOne = Math.floor(numOne / 10);

    counterOne[popNumOne] = (counterOne[popNumOne] || 0) + 1;
  }

  while (numTwo !== 0) {
    let popNumTwo = numTwo % 10;
    numTwo = Math.floor(numTwo / 10);

    counterTwo[popNumTwo] = (counterTwo[popNumTwo] || 0) + 1;
  }

  for (let num in counterOne) {
    if (counterOne[num] !== counterTwo[num]) {
      return false;
    }
  }

  return true;
}

sameFrequency(182, 281);

// https://www.hackerrank.com/challenges/mini-max-sum/problem
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let maxArray = [...arr].sort((a, b) => {
    return b - a;
  });

  let minArray = [...arr].sort((a, b) => {
    return a - b;
  });

  let max = 0;
  let min = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    max += maxArray[i];
    min += minArray[i];
  }

  console.log(min, max);
}

miniMaxSum([1, 3, 5, 7, 9]);

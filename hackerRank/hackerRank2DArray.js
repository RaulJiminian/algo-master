// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
  // Initialize sum to lowest possible number
  let largest = -Infinity;

  // Run loop length of potential hourglass (stop after 4th index since you can't create another hourglass after that)
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      let sum = arr[y].slice(x, x + 3);
      sum.push(arr[y + 1][x + 1]);
      sum = sum.concat(arr[y + 2].slice(x, x + 3));
      sum = sum.reduce(function (prev, cur) {
        return prev + cur;
      });
      if (sum > largest) largest = sum;
    }
  }
  console.log(largest);
}

dataArray = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// Output = 19
hourglassSum(dataArray);

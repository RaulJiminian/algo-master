// Create a function that takes an array of arrays (matrix)
// Return the aboslute value of the difference between the diagonals

function diagonalDifference(arr) {
  // arr[0][0] + arr[1][1] + arr[2][2]
  let diagonalRight = 0;
  let diagonalLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonalRight += arr[i][i];
    diagonalLeft += arr[i][arr.length - i - 1];
  }

  return Math.abs(diagonalRight - diagonalLeft);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

diagonalDifference(matrix);

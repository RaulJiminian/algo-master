// Swapping Functions
// ES5 Version (older version)

// function swap(arr, idx1, idx2) {
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES6 (ES2015) Version; using array destructiing
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

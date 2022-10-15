// Bubble Sort
// Version 1: Naive way to loop
// Big O: O(n^2)

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr, arr[j], arr[j+1])
//       if (arr[j] > arr[j + 1]) {
//         // SWAP (using array deconstruction below)
//         [arr[j], arr[j + 1]] = [arr[j +1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([29, 10, 14, 37, 30, 17]))

// Bubble Sort
// Version 2: Naive version refactored
// Big O: O(n^2)
// Pseudocode:
//  - Start looping from the end of the array towards the beginning with a variable called i
//  - Start an inner loop with a variable called j from the beginning until i - 1
//  - If arr[j] is greater than arr[j + 1], swap those two values!
//  - Return sorted array

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--){
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j+1])
//       if (arr[j] > arr[j + 1]) {
//         // SWAP (using array deconstruction below)
//         [arr[j], arr[j + 1]] = [arr[j +1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([37, 45, 29, 8]))

// Bubble Sort
// Version 3: Optimized for "nearly sorted" arrays
// Big O (in a nearly sorted array): O(n)

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP (using array deconstruction below)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// console.log(bubbleSort([10, 14, 29, 17, 30, 37]))

// let data = Array.apply(null, {length: 10}).map(Function.call, Math.random)
// console.log(bubbleSort(data));

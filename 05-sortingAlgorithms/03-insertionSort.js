// Insertion Sort
// Big O: O(n^2)
//  - Great for Online Algorithms, where the information is not complete and trickling in
// Pseudocode
// Start by picking the second element in the array (the sorted portion is the first element in the array)
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ie, the left side) to place the element in the correct place

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curVal = arr[i];
//     let j = i - 1;
//     while (arr[j] > curVal && j >= 0) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = curVal;
//   }
//   return arr;
// }

function insertionSort(arr) {
  // Step 1: Start loop at 1
  for (let i = 1; i < arr.length; i++) {
    // Step 5: create a variable that stores current element
    let curVal = arr[i];
    // Step 2: Set start of loop (j) at left of i
    let j = i - 1;
    // Step 3: Start loop that continues while j >= 0
    // Step 6: Add extra condition to check arr[j] is greater than curVal (remove original condition; not necessary to include j >= 0 anymore)
    while (arr[j] > curVal) {
      // Step 7: Assign value of arr[j] to position of arr[j + 1]; we use j as a reference point (and not i) since j is moving further to the left
      arr[j + 1] = arr[j];

      // Step 4: decrement j
      // Step 4-a: Instead of swap, we will move the larger number up
      j--;
    }
    // Step 8: Set curVal to arr[j + 1]
    arr[j + 1] = curVal;
  }
  return arr;
}

insertionSort([2, 33, 9, 1, 18, 4]);

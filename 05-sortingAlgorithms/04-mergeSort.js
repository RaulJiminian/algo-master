// Merge Sort
// Create a helper function called merge
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// merge helper function pseudocode:
//   - Create an empty array, then look at values in each array, insert the smallest values of each input array into our empty array (we are going to use a while loop; we will keep track of each variable using i and j start; both start at 0)
//   - While there are still values we haven’t looked at…
//   - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//   - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// merge([2, 14, 99, 100], [1, 10, 50]);
// merge([], [2, 14]);

// mergeSort Pseudocode:
//  - Break up the array into halves until you have arrays that are empty or have one element.
//       - You can use slice from 0 to the middle of the array, and then from the middle of the array until the end (making two halves)
//       - Then, you will call mergeSort again on each half, into it’s own halves (recursively)
//       - Continue until you reach the base case, which is an empty array or array with length of 1
//  - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array (using the merge helper function we have already written)
//  - Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

mergeSort([14, 22, 78, 63, 74, 1, 10]);

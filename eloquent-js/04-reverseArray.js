// Write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
// Neither may use the standard reverse method.

function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
}

let sampleArr = ["A", "B", "C", "D"];
let numArr = [1, 2, 3, 4, 5];

console.log(reverseArray(sampleArr));
// → ["D", C", "B", "A"];
reverseArrayInPlace(numArr);
console.log(numArr);
// → [5, 4, 3, 2, 1]

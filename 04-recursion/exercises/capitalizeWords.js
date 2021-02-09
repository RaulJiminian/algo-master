// Capitalize words using recursion
// Difficulty: Hard
// Write a recursive function called capitalizeWords
// Given an array of words, return a new array containing each word capitalized

function capitalizeWords(array, i = 0) {
  // At some point, this is true, so the algorithm stops
  if (i === array.length) {
    return;
  }
  // At this point, the function did not returned. The function logic continues.

  // Replace the array key with a new value = the return value of captialize()
  array[i] = array[i].toUpperCase();
  // i increments by one, and the function itself is called again.
  capitalizeWords(array, i + 1);
  return array;
}

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

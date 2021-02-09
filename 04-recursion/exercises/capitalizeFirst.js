// Capitalize the first letter in a string using recursion
// Difficulty: Hard
// Write a recursive function called capitalizeFirst
// Given an array of strings, return a new array containing each word with the first letter capitalized

function capitalizeFirst(arr = [], ind = 0) {
  // add whatever parameters you deem necessary - good luck!
  const helper = (str = "") => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };

  if (ind < arr.length) {
    arr[ind] = helper(arr[ind]);
    return capitalizeFirst(arr, ind + 1);
  }

  return arr;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

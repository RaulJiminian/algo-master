// Problem 1
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// function reverseString(string) {
//   if (string.length === 1) return string

//   return reverseString(string.slice(1)) + string[0]
// }

// reverseString("awesome")

// Problem 2
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(string) {
//   if (string.length <= 0) {
//     return true
//   }

//   let palindrome = false

//   if (string[0] === string[string.length - 1]) {
//     palindrome = isPalindrome(string.slice(1, string.length - 1))
//   }

//   return palindrome
// }

// Alternative Solution
// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

// Problem 3
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(arr, callback){
//   if (arr.length === 0) return false
//   if (callback(arr[0])) return true
//   return someRecursive(arr.slice(1), callback)
// }

// Problem 4
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// function flatten(arr){
//   let newArray = []

//   for (let i = 0; i < arr.length ; i++) {
//     if (Array.isArray(arr[i])) {
//       newArray = newArray.concat(flatten(arr[i]))
//     } else {
//       newArray.push(arr[i])
//     }
//   }

//   return newArray
// }

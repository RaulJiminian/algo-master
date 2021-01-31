// Problem 1
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// // nestedEvenSum(obj1); // 6
// // nestedEvenSum(obj2); // 10

// function nestedEvenSum (obj) {
//   let sum = 0

//   for (let key in obj) {
//     if (typeof(obj[key]) === 'object' ) {
//       sum += nestedEvenSum(obj[key])
//     } else if (typeof(obj[key]) === 'number' && obj[key] % 2 === 0) {
//       sum += obj[key]
//     }
//   }

//   return sum

// }

// Problem 2
// Write a recursive function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

// stringifyNumbers(obj)

// function stringifyNumbers(obj) {
//   const newObject = {}
//   for (let key in obj) {
//     if (typeof(obj[key]) === 'number') {
//       newObject[key] = obj[key].toString()
//     } else if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key])) {
//       newObject[key] = stringifyNumbers(obj[key])
//     } else {
//       newObject[key] = obj[key]
//     }
//   }
//   return newObject
// }

// Problem 3
// Write a recursive function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

// // Helper Method solution
// function collectStrings(fullObj) {
//   let newArray = []

//   function stringRecursiveCollection(obj) {
//     for (let key in obj) {
//       if(typeof(obj[key]) === 'string' ) {
//         newArray.push(obj[key])
//       } else if(typeof(obj[key]) === 'object') {
//         stringRecursiveCollection(obj[key])
//       }
//     }
//   }

//   stringRecursiveCollection(fullObj)

//   return newArray
// }

// // Pure recursive solution
// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }

//     return stringsArr;
// }

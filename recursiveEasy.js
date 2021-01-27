// Problem 1
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// function power(base, exp){
//     if (exp === 0) return 1
//     return base * power(base, exp - 1)
// }

// Problem 2
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g. factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero (0!) is always 1.
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// function factorial(num){
//    if (num < 0) return 0
//    if (num === 0) return 1
//    return num * factorial(num - 1)
// }

// Problem 3
// Write a function called productOfArray which takes in an array of numbers and returns the product of all of them.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// function productOfArray(arr) {
//   if(arr.length === 1) return arr
//   return arr[0] * productOfArray(arr.slice(1))
// }

// Problem 4
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

// recursiveRange(6) // 21
// recursiveRange(10) // 55

// function recursiveRange(num){
//    if (num === 0) return 0
//    return num + recursiveRange(num - 1)
// }

// Problem 5
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,...which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(num){
//   if (num <= 2) return 1;
//   console.log(num)
//   return fib(num-1) + fib(num-2);
// }

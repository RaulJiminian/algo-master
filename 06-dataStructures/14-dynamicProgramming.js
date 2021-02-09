// Intro to Dynamic Programming
// Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

// There are specific situations/problems where dynamic programming can be implemented. It only works on problems with:
//  - Optimal sub-structure
//    - A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
//  - Overlapping sub-problems
//    - A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

// Example Problem that will be optimized using dynamic programming principles
// Fibonacci (using recursion)
// Big O Notation: O(2 ^ n); not to be confused with quadratic time complexity. O(2 ^ n) is extremely slow

// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// OPTIMIZED FOR DYNAMIC PROGRAMMING (USING MEMOIZATION AND RECURSION)
// Uses memoization to remember values that have already been calculated
// Big O Notation: O(n), a massive improvement!
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;

  return res;
}

// --- ALTERNATE --- (SAME AS ABOVE WITH MINOR SEMANTIC CHANGES)
// Same as memo version above; we are just defining the base case of the recursive function in the memo array
// function fib(n, memo = [undefined, 1, 1]) {
//   if (memo[n] !== undefined) return memo[n];
//   let res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   return res;
// }

// OPTIMIZED FOR DYNAMIC PROGRAMMING (USING TABULATION AND ITERATION)
// Taking a bottom-up approach (versus a top-down approach from our recursive case)
// Big O Notation: O(n), and a much better space complexity than the recursive solution
function fib_table(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

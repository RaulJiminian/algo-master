// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Final Solution
function repeatedString(s, n) {
  let m = Math.floor(n / s.length);
  // console.log(m)
  // m = 3

  let rem = n % s.length;
  // console.log(rem)
  // rem = 1

  let count = (s.split("a").length - 1) * m;
  // console.log(s.split("a"))
  // console.log(s.split("a").length - 1); this tells you the number of times an item appears in a string

  for (let i = 0; i < rem; i++) {
    if (s[i] === "a") count++;
  }

  return count;
}

repeatedString("aba", 10);

// Original Slow Solution
// function repeatedString(str, num) {
//   let repeatedString = "";
//   let stringNum = num;
//   let counter = 0;

//   while (stringNum > 0) {
//     repeatedString += str;
//     stringNum = stringNum - str.length;
//   }

//   for (let i = 0; i <= num; i++) {
//     if (repeatedString[i] === "a") {
//       counter++;
//     }
//   }

//   return counter;
// }

// repeatedString("aba", 10);

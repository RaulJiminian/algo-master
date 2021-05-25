// Create a function that takes an integer (n)
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.

function staircase(n) {
  let treeLevel = [];

  for (let i = 1; i <= n; i++) {
    let emptySpace = Array(n - i)
      .fill(" ")
      .join("");
    let hashTag = Array(i).fill("#").join("");
    treeLevel.push(emptySpace + hashTag);
  }

  const treeStructure = treeLevel.join("\r\n");

  console.log(treeStructure);
}

staircase(6);

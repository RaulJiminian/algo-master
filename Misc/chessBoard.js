// ChessBoard
// From Eloquent Javascript by Marijn Haverbeke, Chapter 2

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.The characters should form a chessboard.
// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// Tip:
// To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).
// Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.

function chessBoard(size) {
  let chessGrid = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        chessGrid += " ";
      } else {
        chessGrid += "#";
      }
    }
    chessGrid += "\n";
  }

  return chessGrid;
}

console.log(chessBoard(8));

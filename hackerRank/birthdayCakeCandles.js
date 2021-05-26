// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > temp) {
      temp = candles[i];
      count = 1;
    } else if (candles[i] === temp) {
      count++;
    }
  }

  return count;
}

birthdayCakeCandles([3, 2, 1, 3]);

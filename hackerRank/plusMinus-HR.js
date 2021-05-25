// https://www.hackerrank.com/challenges/plus-minus/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal
// Please note: Do not return a value, simply print each value (console.log)

function plusMinus(arr) {
  let denominator = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((num) => {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  });

  const ratios = {
    positiveRatio: Number.parseFloat(positive / denominator).toFixed(6),
    negativeRatio: Number.parseFloat(negative / denominator).toFixed(6),
    zeroRatio: Number.parseFloat(zero / denominator).toFixed(6),
  };

  for (let ratio in ratios) {
    console.log(ratios[ratio]);
  }
}

plusMinus([-5, 10, 0, 2, 8, -2]);

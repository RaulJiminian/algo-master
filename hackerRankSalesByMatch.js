// https://hackerrank-challenge-pdfs.s3.amazonaws.com/25168-sock-merchant-English?AWSAccessKeyId=AKIAR6O7GJNX5DNFO3PV&Expires=1605891435&Signature=CJuHgAXBYoCQqEzYa%2BQ4plbpa38%3D&response-content-disposition=inline%3B%20filename%3Dsock-merchant-English.pdf&response-content-type=application%2Fpdf

// Final Solution

function sockMerchant(n, ar) {
  const sockPile = {};

  for (let sock of ar) {
    sockPile[sock] = (sockPile[sock] || 0) + 1;
  }

  let pairs = 0;

  for (let pair in sockPile) {
    pairs += Math.floor(sockPile[pair] / 2);
  }

  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

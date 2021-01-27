// Solution 1

function kmpSubstrSearch(str, pattern) {
  //generate the kmp pattern table.
  let patternTable = kmpSubstrPatternGenerator(pattern);

  let strPointer = 0;
  let patternPointer = 0;

  //loop through str
  while (strPointer < str.length) {
    // if there is a match increment both strPointer and patternPointer
    // if patternPointer is equal to pattern.length that means we have got a match
    // return strPointer-pattern.length +1
    if (str[strPointer] === pattern[patternPointer]) {
      if (patternPointer === pattern.length - 1) {
        return strPointer - patternPointer + 1;
      }
      patternPointer++;
      strPointer++;
    }

    // if not a match and patternPointer is greater then 0
    // jump patternPointer to location equal patternTable value of the previous pattern char.
    else if (patternPointer > 0) {
      patternPointer = patternTable[patternPointer - 1];
    }

    // if not a match and patternPointer is at zero
    //then increment strPointer
    else {
      patternPointer = 0;
      strPointer++;
    }
  }

  // if patternPointer is not equal to pattern.length that means we have not yet got a complete match.
  //return -1
  return -1;
}

// str
// hi how are you doing today.
//
// doing         pattern
// 00000         pattern table
//

function kmpSubstrPatternGenerator(str) {
  // generate the kmp pattern table
  let tempArray = [0];
  let jPointer = 0;
  let iPointer = 1;

  for (let char of str) {
    if (str[jPointer] === str[iPointer]) {
      jPointer++;
      iPointer++;
      tempArray.push(jPointer);
    } else if (jPointer === 0 && str[jPointer] !== str[iPointer]) {
      tempArray.push(jPointer);
      iPointer++;
    } else {
      jPointer = tempArray[jPointer > 0 ? jPointer - 1 : 0];
    }
  }

  return tempArray;
}

// fn('agdvanjsgag')
// 0 1 2 3 4 5 6 7 8 9 10    // index
// a g d v a n j s g a g     // pattern
//     j                 i                 // pointers
// Table value
// 0 0 0 0 1 0 0 0 0 1 2
//compare j and i values
// if match increment both j and i position
// store j + 1 for that respective position table value.
// if doesn't match then move the position of j to the table value of the previous char and repeat the check
// repeat until jth position reaches 0 and if still there is no match with i and j
// store 0 as the value and increment i.

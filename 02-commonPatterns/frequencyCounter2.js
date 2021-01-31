// Frequency Counter (common pattern):
// This pattern uses objects or sets to collect values / frequencies
// This can often avoid the need for nested loops

// Additional Example
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by reaggranging the letters of another.
// Such as cinema, formed from iceman.

// Input/Output
// validAnagram([""], [""]) => true
// validAnagram(["aaz"], ["zza"]) => false
// validAnagram(["anagram"], ["nagaram"]) => true
// validAnagram(["texttwisttime"], ["timetwisttext"]) => true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

validAnagram(["texttwisttime"], ["timetwisttext"]);

// Alternative Method of solving (cleaner)
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    // zero is a falsey value
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

validAnagram2(["texttwisttime"], ["timetwisttext"]);

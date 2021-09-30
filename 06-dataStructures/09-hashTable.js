// Hash Table
// Big O Notation of Hash Tables:
// - Insert: O(1) - Average / Best Case
// - Deletion: O(1) - Average / Best Case
// - Access: O(1) - Average / Best Case

// Hash tables are collections of key-value pairs
// Hash tables can find values quickly given a key
// Hash tables can add new key-values quickly
// Hash tables store data in a large array (based on our implementation), and work by hashing the keys
// A good hash should be fast, distribute keys uniformly, and be deterministic
// Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index

// Naive Hash Function
// function hash(key, arrayLen) {
//   let total = 0;

//   // Loop through length of string
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i];
//     // value represents character code for the char, minus 96 (gives position in alphabet)
//     let value = char.charCodeAt(0) - 96;
//     // Using Modulus of array length on the value ensures the number returned always within the range of the length of the array
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// Issues with Naive Hash:
// Only works with strings (we are not going to worry about that for now)
// Not constant time - linear O(n); runtime increases as key length increases
// Could be a little more random (things can cluster)

// Simple version implementation of HashTable (for learning purposes only)
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Hash Function Revisited
  // Including prime numbers. Prime number in a hash is helpful in spreading out the keys more uniformly
  // It's also helpful if the array that you're putting values into has a prime length
  _hash(key) {
    let total = 0;
    // Prime number decreases chances of collusions
    let WEIRD_PRIME = 31;

    // Loop through length of string
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // value represents character code for the char, minus 96 (gives position in alphabet)
      let value = char.charCodeAt(0) - 96;
      // Using Modulus of array length on the value ensures the number returned always within the range of the length of the array
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // Set Pseudocode
  //  - Write a function called set that accepts a key and a value
  //  - Hash the key and store the result in a variable called index
  //  - Store the key-value pair in the hash table array via separate chaining (meaning, in a nested structure)
  //    - First, check to see if there is anything in keyMap at that index (hint: if statement), if there isn't then create an empty array at that index
  //    - Then, push [key/value] pair into keyMap at index (hint: outside of the if statement)
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // Get Pseudocode
  //  - Write a function that accepts a key
  //  - Hash the key and store the result in a variable called index
  //  - Retrieves the key-value pair in the hash table
  //     - First check to see if the index at keyMap exists
  //     - If it does, loop through the nested array (length of keyMap at index)
  //     - if the key passed to the function (keyMap at index at i at 0) matches the key passed to the function, return that element's value
  //  - If the key isn’t found, returns undefined
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // Values Pseudocode
  //  - Loops through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  // Keys Pseudocode
  //  - Loops through the hash table array and returns an array of keys in the table
  keys() {
    let keyssArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyssArr.includes(this.keyMap[i][j][0])) {
            keyssArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyssArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#80800");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list.

function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  const result = [];

  for (let node = list; node; node = node.rest) {
    result.push(node.value);
  }

  return result;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

// Hints:
// Building up a list is easier when done back to front.
// So arrayToList could iterate over the array backwards and, for each element, add an object to the list.
// You can use a local binding to hold the part of the list that was built so far and use an assignment like list = { value: X, rest: list } to add an element.

// To run over a list (in listToArray), a for loop specification like this can be used:

// for (let node = list; node; node = node.rest) {}
// Can you see how that works?
// Every iteration of the loop, node points to the current sublist, and the body can read its value property to get the current element.
// At the end of an iteration, node moves to the next sublist.When that is null, we have reached the end of the list, and the loop is finished.

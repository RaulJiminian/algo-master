// has path
// Write a function, hasPath, that takes in an object representing the adjancency list of a directed acyclic graph and two nodes (src, dst).
// The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// BFS - using iteration (since we will be working with a queue)
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

// DFS - using recursion
// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) {
//       return true;
//     }
//   }

//   return false;
// };

// hasPath(graph, "f", "k",); // true

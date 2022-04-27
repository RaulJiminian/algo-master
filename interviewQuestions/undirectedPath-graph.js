// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

// Graph visual
//  i --- j
//  |   /
//  |  /
//  k --- l
//  |
//  |
//  m
//
//  o --- n

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// Helper function to build graph structure out of edges list
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false; // last step (1)

  visited.add(src); // last step (2)

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // Add new Set() as last argument (and last step to show inifinite loop of cycle)
  return hasPath(graph, nodeA, nodeB, new Set());
};

console.log(undirectedPath(edges, "i", "n"));

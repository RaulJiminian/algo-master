// Graph Traversal
// Graph traversal using a simple implementation of an undirected graph

// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
// That is, a collection of Nodes + Connections
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // - Depth First Search Traversal
  // - Depth first traversal for a tree refers to exploring nodes as far as possible down one branch before “backtracking”
  // - Depth first traversal for a graph means moving away from the vertex you started from

  // DFS (Recursive Iteration) Pseudocode
  // - The function should accept a starting node
  // - Create a list to store the end result, to be returned at the very end
  // - Create an object to store visited vertices
  // - Create a helper function which accepts a vertex
  //    - If the vertex is empty, the helper function should return early
  //    - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  //    - Loop over all of the values in the adjacencyList for that vertex
  //    - If any of those values have not been visited, recursively invoke the helper function with that vertex
  // - Invoke the helper function with the starting vertex
  // - Return the result array
  DFSrecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) dfs(v);
      });
    })(start);

    return result;
  }

  // DFS (Iterative Iteration) Pseudocode
  // - The function should accept a starting node
  // - Create a Stack to help us keep track of vertices (use a list/array); add the starting vertex to the stack
  // - Create a list to store the end result, to be returned at the very end
  // - Create an object to store visited vertices
  // - Mark start vertex to visited
  // - While the stack has something in it:
  //    - Pop the next vertex from the stack
  //    - Add it to the result list
  //    - Loop through the neighbors of the vertex; if that neighbor vertex hasn’t been visited yet:
  //       - Mark it as visited
  //       - Push all of its neighbors into the stack
  // - Return the result array
  DFSiterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  // BFS Pseudocode
  // - The function should accept a starting node
  // - Create a Queue (use a an array for simplification) and place the starting vertex in it
  // - Create an array to store the nodes visited
  // - Create an object to store nodes visited
  // - Mark the starting vertex as visited
  // - Loop as long as there is anything in the queue
  // - Remove the first vertex from the queue and push it into the array that stores nodes visited
  // - Loop over each vertex in the adjacency list for the vertex you are visiting
  // - If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  // - Once you have finished looping, return the array of visited nodes
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// Graph Visualization:
//     A
//   /   \
//  B     C
//  |     |
//  D --- E
//   \   /
//     F

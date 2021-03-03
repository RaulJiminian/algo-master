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
  // - Create a function called DFSrecursive, it accepts a starting node
  // - Initialize a variable (result), which will serve as a list that stores the end result, assign it to an empty array
  // - Initialize a variable (visited), which will serve as an object to store visited vertices, assign it to an empty object
  // - Create a helper function (dfs) which accepts a vertex
  //    - If the vertex is empty, the helper function should return null
  //    - Insert the boolean (true) into the visited object for the vertex passed into the helper function
  //    - Push the vertex passed into the helper function into the result array
  //    - Loop over all of the values in the adjacencyList for that vertex using forEach
  //      - If any of those values have not been visited, recursively invoke the helper function (dfs) with that vertex
  // - Invoke the helper function with the starting vertex (use an IIFE)
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
  // - Create a function called DFSiterative, it accepts a starting node
  // - Initialize a variable (stack), it will serve as a Stack data structure and will help us keep track of vertices; assign it to an array and add the starting vertex to the stack
  // - Initialize a variable (result), which will serve as a list that stores the end result, assign it to an empty array
  // - Initialize a variable (visited), which will serve as an object to store visited vertices, assign it to an empty object
  // - Initialize a variable (currentVertex) use the let keyword (so that we can reassign later); do not set this variable to anything
  // - Set visted (at vertex passed into the function) to the boolean true
  // - Start a While loop, continue so long as there is something in the stack (stack.length):
  //    - Pop() from the stack, and reassign currentVertex to that value
  //    - Push() currentVertex into the result array
  //    - Loop through the "neighbors" of the vertex (use forEach)
  //       - If that "neighbor" vertex hasn’t been visited yet:
  //         - Mark it as visited
  //         - Push each neighbor into the stack
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
  // - Create a function called BFS, it accepts a starting node
  // - Initialize a variable (queue), it will serve as a Queue data structure and will help us keep track of vertices; assign it to an array and add the starting vertex to the queue
  // - Initialize a variable (result), which will serve as a list that stores the end result, assign it to an empty array
  // - Initialize a variable (visited), which will serve as an object to store visited vertices, assign it to an empty object
  // - Initialize a variable (currentVertex) use the let keyword (so that we can reassign later); do not set this variable to anything
  // - Set visted (at vertex passed into the function) to the boolean true
  // - Using a While loop, loop as long as there is anything in the queue (queue.length)
  //   - Shift() the first vertex from the queue, reassign currentVertex to that value
  //   - Push() currentVertex into the result array
  // - Loop over each vertex in the adjacency list for the vertex you are visiting (using forEach)
  //   - If the "neighbor" is not inside the visited object:
  //     - Mark it as visited and enqueue that vertex
  //     - Enqueue that vertex by pushing into the queue array
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

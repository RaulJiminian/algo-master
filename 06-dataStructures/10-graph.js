// Graph
// A simple implementation of an undirected graph

// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
// That is, a collection of Nodes + Connections
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding a Vertex Pseudocode
  // - Create a method called addVertex, which accepts a name of a vertex (let's use "A", "B", "C", etc.)
  // - It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Adding an Edge Pseudocode
  // - Create a method called addEdge, which accepts two vertices (v1 and v2)
  // - The function should find in the adjacency list the key of v1 and push v2 to the array
  // - The function should also find in the adjacency list the key of v2 and push v1 to the array
  // - Don’t worry about handling errors/invalid vertices
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // Removing an Edge
  // - Create a function called removeEdge, which accepts two vertices (v1 and v2)
  // - The function should reassign the key of v1 to be an array that does not contain v2
  // - The function should also reassign the key of v2 to be an array that does not contain v1
  // - Don’t worry about handling errors/invalid vertices
  // - Hint: Use the filter method
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // Removing a Vertex
  // - Create a function called removeVertex, which accepts a vertex to remove
  // - Using a while loop, long as long as there are any vertices connected to that vertex in the adjacency list
  // - Inside of the loop:
  //   - Initialize a variable called adjacentVertex, and assign it to a vertex from the adjaceny list (using pop())
  //   - Call removeEdge and pass it the vertex we are removing (vertex being passed into the function) and any values in the adjacency list for that vertex (adjacentVertex)
  // - Outside of the loop, delete the key in the adjacency list for the vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

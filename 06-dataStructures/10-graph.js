// Graph
// A simple implementation of an undirected graph

// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
// That is, a collection of Nodes + Connections
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding a Vertex Pseudocode
  // - Write a method called addVertex, which accepts a name of a vertex
  // - It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Adding an Edge Pseudocode
  // - This function should accept two vertices, we can call them vertex1 and vertex2
  // - The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // - The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  // - Don’t worry about handling errors/invalid vertices
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // Removing an Edge
  // - This function should accept two vertices, we’ll call them vertex1 and vertex2
  // - The function should reassign the key of vertex1 to be an array that does not contain vertex2
  // - The function should reassign the key of vertex2 to be an array that does not contain vertex1
  // - Don’t worry about handling errors/invalid vertices
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // Removing a Vertex
  // - The function should accept a vertex to remove
  // - The function should loop as long as there are any vertices connected to that vertex in the adjacency list
  // - Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // - Delete the key in the adjacency list for the vertex
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

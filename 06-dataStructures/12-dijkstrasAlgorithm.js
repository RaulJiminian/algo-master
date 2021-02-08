// Dijkstra’s Algorithm (Shortest Path Algorithm)
// To implement this algorithm, it is important to know graphs (weighted) and priority queues created with a binary heap

// Simple Priority Queue (using built in methods for sorting, etc.)
// This version of a simple priority queue is the unoptimized version of dijkstra's algorithm (as we should use a binary heap for a priority queue)
// Notice we are sorting every single time which is O(n * log n)
// Please note - There are better implementations of Priority Queues using a binary heap. The below is for simplification purposes
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// Simple weighted graph below
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  // Dijkstra’s Pseudocode
  // - Write a function that accepts a starting and ending vertex
  // - Create an object (we’ll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
  // - After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that’s where we begin
  // - Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  // - Start looping as long as there is anything in the priority queue
  //   - Dequeue a vertex from the priority queue
  //   - If that vertex is the same as the ending vertex - we are done!
  //   - Otherwise loop through each value in the adjacency list at that vertex
  //     - Calculate the distance to that vertex from the starting vertex
  //     - If that distance is less than what is currently stored in our distances object
  //       - Update the distances object with new lower distance
  //       - Update the previous object to contain that vertex
  //       - Enqueue the vertex with the total distance from the start node
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // Build up initial state (loops over entire adjacency list)
    // Fills the distances object with each vertex and the shortest distance from starting vertex (which is why starting vertex starts at 0)
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // Sets all of the vertex value in the previous object to null (they have not been visited)
      previous[vertex] = null;
    }

    // As long as there is something to visit:
    while (nodes.values.length) {
      // Gives us the value of the vertex with the lowest priority (shortest distance)
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // We are done
        // Build up path to return at end
        // console.log(distance);
        // console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // AdjacencyList[vertex] returns an array; a for/in loop is meant for objects, so "neighbor" is the index of the array (as the array is treated to have a key/value pair; the index is the key, the node is the value)
        for (let neighbor in this.adjacencyList[smallest]) {
          // This gives us a vertex's neighboring nodes
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate new distance to neighboring nodes
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // nextNode has two keys, a node (vertex name, ie "A") and a weight
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    // console.log(path);
    return path.concat(smallest).reverse();
  }
}

// Start of code for sample graph build
// Graph Visualization:
//      A -4- B
//    /2       \3
//   C -2- D -3- E
//    \4   |1  /1
//      \_ F _/
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
// End of code for sample graph build

graph.dijkstra("A", "E");

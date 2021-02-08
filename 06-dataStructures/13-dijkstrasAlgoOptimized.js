// Dijkstra’s Algorithm (Shortest Path Algorithm) - OPTIMIZED
// To implement this algorithm, it is important to know graphs (weighted) and priority queues created with a binary heap
// Optimized Solution using a Priority Queue generated as a binary heap (simple weight graph however)

// Priority Queue (min binary heap implementation)
// Higher priority items get a lower priority number (0 high priority; 5 low priority for instance)
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // changing the direction of the sing (>= versus <=) switches this from a max to a min binary heap
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    // Edge case for when you are down to one item in the list
    if (this.values.length > 0) {
      this.values[0] = end;
      // Sink down (or bubble down) the first item in binary heap to where it belongs
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

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

// Adjacency List Graph
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(name){
    if(!this.adjacencyList[name]) this.adjacencyList[name] = []
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  removeVertex(vertex){
    let edges = this.adjacencyList[vertex]
    for(let i = 0; i < arr.length; i++){
      this.removeEdge(vertex, edges[i])
    }

    delete this.adjacencyList[vertex]
  }
  // DFS search/traversal
  dfsRecursive(start){
    let result = []
    let visited = {}
    const adjList = this.adjacencyList

    function dfsHelper(vertex){
      visited[vertex] = true
      result.push(vertex)
      adjList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfsHelper(neighbor)
        }
      })
    }
    dfsHelper(start)

    return result
  }

  dfsIterate(start){
    let stack = [start]
    let result = []
    let visited = {}
    let currentVertex
    stack.push(start)
    

    while(stack.length){
      currentVertex = stack.pop()
      if(!visited[vertex]){
        visited[vertex] = true
        result.push(vertex)
        this.adjacencyList[vertex].forEach(neighbor => stack.push(neighbor))  
      }
    }
    return result
  }

  // Breadth first search/traversal (iterative)
  bfs(start){
    let queue = []
    let result = []
    let visited = {}
    let currentVertex
    queue.push(start)

    while(queue.length){
      currentVertex = queue.shift()
      if(!visited[vertex]){
        visited[vertex] = true
        result.push(vertex)
        this.adjacencyList[vertex].forEach(neighbor => queue.push(neighbor))  
      }
    }
    return result
  }
}
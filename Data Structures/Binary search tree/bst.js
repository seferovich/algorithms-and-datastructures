class Node {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(val){
    let newNode = new Node(val)
    if(this.root === null){
      this.root = newNode
      return this
    }
    let current = this.root
    while(true){
      if(val === current.val) return undefined
      if(val < current.val){
        if(current.left === null){
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if(current.right === null){
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  } 
  // Returns the node or undefined
  find(val){
    if(this.root === null) return false
    let current = this.root
    let found = false
    while(current && !found){
      if(val > current){
        current = current.right
      }else if(val < current){
        current = current.left
      }else{
        found = true
      }
    }
    if(!found) return undefined
    return current
  }

  // Returns true or false
  contains(val){
    if(this.root === null) return false
    let current = this.root
    while(current && !found){
      if(val > current){
        current = current.right
      }else if(val < current){
        current = current.left
      }else{
        return true
      }
    }
    return false
  }

  // Breadth first search
  bfs(){
    let queue = []
    let data = []
    let node = this.root
    queue.push(node)

    while(queue.length){
      node = queue.shift()
      data.push(node)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }

  // Depth first preOrder
  DFSpreOrder(){
    let data = []
    
    let traverse = (node) => {
      data.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  // Depth first postOrder
  DFSpostOrder(){
    let data = []
    
    let traverse = (node) => {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data
  }
  // Depth first inOrder
  DFSinOrder(){
    let data = []
    
    let traverse = (node) => {
      if(node.left) traverse(node.left)
      data.push(node.val)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}


class Stack {
  constructor() {
    this.head = null
    this.tail = null 
    this.size = 0 
  }

  enqueue(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    return ++this.size
  }

  dequeue() {
    if (!this.head) return null 
    if (this.head === this.tail) {
      this.tail = null
    }
    const removedNode = this.head
    this.head = this.head.next
    
    this.size--
    return removedNode.val
  }
}
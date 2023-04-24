class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}


class Stack {
  constructor() {
    this.head = null 
    this.size = 0 
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    return ++this.size
  }

  pop() {
    if (!this.head) return null
    const removedNode = this.head
    this.head = this.head.next
    this.size--
    return removedNode
  }
}
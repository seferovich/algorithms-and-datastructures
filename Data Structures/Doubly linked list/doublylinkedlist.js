class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    }else{
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop(){
    if(!this.head) return undefined
    let poppedNode = this.tail
    if(this.length === 1){
      this.head = null
      this.tail = null
    }else{
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    
    this.length--
    return poppedNode
  }

  shift(){
    if(!this.head) return undefined
    let shiftedNode = this.head
    if(this.length === 1){
      this.head = null
      this.tail = null
    }else{
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    
    this.length--
    return shiftedNode
  }

  unshift(val){
    let newNode = new Node(val)
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    }else{
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return list
  }

  get(index){
    if(index < 0 || index >= this.length) return null
    if(index <= this.length/2){
      let current = this.head
      let i = 0
      while(i !== index){
        current = current.next
        i++
      }
      return current
    }else{
      let current = this.tail
      let i = this.length - 1
      while(i !== index){
        current = current.prev
        i--
      }
    }
    return current
  }

  set(index, val){
    let node = this.get(index)
    if(node != null){
      node.val = val
      return true
    }
    return false
  }

  insert(index, val){
    if(index < 0 || index >= this.length) return false
    if(index === 0) return !!this.unshift(val)
    if(index === this.length) return !!this.push(val)

    let prevNode = get(index - 1)
    let afterNode = prevNode.next
    let newNode = new Node(val)

    newNode.next = afterNode
    newNode.prev = prevNode
    prevNode.next = newNode
    afterNode.prev = newNode

    this.length++
    return true

  }

  remove(index){
    if(index < 0 || index >= this.length) return false
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
    
    let node = this.get(index)
    node.prev.next = node.next
    node.next.prev = node.prev

    node.next = null
    node.prev = null

    this.length--
    return node
  }

  reverse(){
    let node = this.tail
    let prev = node.next
    let next = node.prev
    this.tail = this.head
    this.head = node
    
    for(let i = 0; i < this.length; i++){
      prev = node.next 
      next = node.prev
      node.next = next
      node.prev = prev
      
      node = next
    }
    
    return this
  }
}
class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}


class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = null
  }

  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = this.head
    }else{
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop(){
    if(!this.head) return undefined
    
    let current = this.head
    let newTail = current     
    while(current.next){
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0){
      this.tail = null
      this.head = null
    }
    return current
  }

  shift(){
    if(!this.head) return undefined 
    let oldHead = this.head
    this.head = this.head.next
    this.length--
    if(this.length === 0){
      this.tail = null
    }
    return oldHead
  }

  unshift(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = this.head
    }else{
      newNode.next = this.head
      this.head = newNode
    }
    
    
    this.length++
    return this

  }

  get(index){
    if(index < 0 || index >= this.length) return null
    let i = 0
    let item = this.head 
    while(i !== index){
      item = item.next 
      i++
    }
    return item
  }

  set(index, newVal){
    if(index < 0 || index >= this.length) return null
    let item = this.get(index)
    item.val = newVal
    return item
  }

  insert(index, newVal){
    if(index < 0 || index > this.length) return false
    if(index === this.length) return !!this.push(newVal)
    if(index === 0) return !!this.unshift(newVal)
    let newNode = new Node(newVal)
    let old = this.get(index-1)
    newNode.next = old.next
    old.next = newNode  
    this.length++
    return true
  
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length -1) return this.pop()
    if(index === 0) return this.shift()
    let before = this.get(index - 1)
    before.next = before.next.next
    this.length--
    return this
  }

  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let prev = null
    let next
    for(let i = 0; i < this.length; i++){
      next = node.next
      node.next = prev
      prev = next
      node = next
    }
  }
}
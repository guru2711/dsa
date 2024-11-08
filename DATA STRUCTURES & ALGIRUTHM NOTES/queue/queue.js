class Node{
 constructor(val){
    this.value = val;
    this.next = null
 }
}  
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
          this.first = newNode
          this.last = newNode
        }else{
            this.last.next = newNode;
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null;
        let temp = this.first
        if(this.first === this.last) this.last = null;
        this.first = this.first.next
        this.size--;
        return temp.val
    }
}

let q = new Queue()
q.enqueue("FIRST")
q.enqueue("SEC")
q.enqueue("THIRD")
console.log(q)
q.dequeue()
q.dequeue()
console.log(q)
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.length === 0 ){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

}
let list = new DoubleLinkedList()
list.push("99")
list.push("100")
console.log(list)
console.log(list.head)
console.log(list.head.next)
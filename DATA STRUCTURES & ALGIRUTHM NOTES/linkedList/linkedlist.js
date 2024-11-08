class Node{
    constructor(val){
        this.head = val;
        this.next = null;
    }
}

class Singlylinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
            if(!this.head){
                this.head = newNode;
                this.tail = this.head;
            }else{
                this.tail.next = newNode;
                this.tail = newNode
            }
            this.length++;
            console.log(this)
            console.log(this.head.next)
            return this;
        
    }
    pop(){
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null
        this.length--;
        return current
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;        
        }
         this.length++;
            return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while (count !== index){
            current = current.next;
            count++
        }
        return current;
    }
}


let list = new Singlylinkedlist()
list.push("hi")
// list.push("there")
// list.push("i'm Guru")
// list.push("!")
// console.log(list)
// console.log(list.head)
// console.log(list.tail)
// console.log(list.get(1))
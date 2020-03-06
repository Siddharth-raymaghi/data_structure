{
    class Node{
        constructor(value){
            this.value = value;
            this.next = null;
        }
    }

    class Stack{
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }

        push(val){
            var node = new Node(val);
            if(!this.first){
                this.first = node;
                this.last = node;
            }else{
                node.next = this.first;
                this.first = node;
            }
            return ++this.size;
        }

        pop(){
            if(this.size == 0){
                console.error("Stack is already empty")
                return null;
            }
            var remove_node = this.first;
            if(this.size == 1){
                this.first = null;
                this.last = null;
            }else{
                this.first = this.first.next;
            }
            remove_node.next = null;
            this.size--;
            return remove_node;
        }
    }

    var stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
}
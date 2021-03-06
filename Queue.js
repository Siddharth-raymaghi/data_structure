{
    class Node{
        constructor(value){
            this.value = value;
            this.next = null;
        }
    }

    class Queue{
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }

        enqueue(value){
            var node = new Node(value);
            if(this.first===null){
                this.first = node;
                this.last = node;
            }else{
                this.last.next = node;
                this.last = node;
            }
            return ++this.size;
        }

        dequeue(){
            if(this.size == 0){
                console.error("Nothing to dequeue");
                return null;
            }

            var remove_node = this.first;
            if(this.first == this.last){
                this.last = null
            }
            this.first = this.first.next;
            --this.size;
            remove_node.next = null;
            return remove_node;
        }
    }

    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
}
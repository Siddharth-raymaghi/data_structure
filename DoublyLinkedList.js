{
    class Node{
        constructor(value){
            this.value = value;
            this.prev = null;
            this.next = null;
        }
    }

    class DoublyLinkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }


        push(val){
            var node = new Node(val);
            if(this.head == null){
                this.head = node;
                this.tail = node;
            }else{
                this.tail.next = node;
                node.prev = this.tail
                this.tail = node;
            }
            ++this.length;
            return this;
        }


        pop(){
            if(this.length == 0){
                console.error("Nothing to pop")
                return
            }
            var pop_node = this.tail
            if(this.length == 1){
                this.head = null
                this.tail = null
            }else{
                this.tail = pop_node.prev;
                this.tail.next = null;
                pop_node.prev = null
            }
            this.length--;
            return pop_node;
        }
        

        shift(){
            if(this.length === 0){
                console.error("Nothing to shift")
                return
            }
            var shift_node = this.head;
            if(this.length == 1){
                this.head = null;
                this.tail = null;
            }else{
                this.head = this.head.next;   
                this.head.prev = null;
                shift_node.next = null;
            }
            this.length--;
            return shift_node;
        }
        

        unshift(value){
            var node = new Node(value)
            if(this.length==0){
                this.head = node;
                this.tail = node;
            }else{
                node.next = this.head;
                this.head = node;
                node.next.prev = this.head
            }
            this.length++;
            return
        }


        get(index){
            if(index < 0 || index >= this.length || isNaN(index)){
                return null
            }
            if(this.length-1 - index < index){
                var i = this.length-1;
                var curr = this.tail
                while(i!=index){
                    curr = curr.prev;
                    i--;
                }
                return curr;
            }else{
                var i = 0;
                var curr = this.head;
                while(i!=index){
                    curr = curr.next;
                    i++;
                }
                return curr;
            }
        }


        set(index,value){
            var change_node = this.get(index)
            if(change_node){
                change_node.value = value;
                return true
            }
            return false;
        }
        

        insert(index,value){
            if(index < 0 || index > this.length){
                console.error("Index out of bound")
                return false
            }
            
            if(index == 0){
                this.unshift(value)
            }else if(index == this.length){
                this.push(value);
            }else{
                var node = new Node(value)
                var pre = this.get(index-1);

                node.next = pre.next;
                node.prev = pre;
                pre.next = node;
                pre.next.prev = node;
                this.length++;
            }
            return true;
        }


        remove(index){
            if(index < 0 || index>this.length-1){
                console.error("Index out of bound")
                return false;
            }

            if(index == 0){
                this.shift();
                return true
            }else if(index == this.length-1){
                this.pop()
                return true;
            }

            var prev = this.get(index-1);
            var remove_node = prev.next;
            prev.next = remove_node.next;
            remove_node.next.prev = prev;
            remove_node.next = null;
            remove_node.prev = null;
            this.length--;
            return remove_node;
        }
 }

    var list = new DoublyLinkedList()
    list.push(10)
    list.push(20)
    list.push(30)
    
}
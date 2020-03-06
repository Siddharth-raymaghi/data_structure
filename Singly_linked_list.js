{
    class Node{
      constructor(value){
        this.value = value;
        this.next = null;
      }
    }


    class Singly_linked_list{
      constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
     }


      push(value){
        var node = new Node(value);
        if(this.head == null){
          this.head = node;
          this.tail = this.head;
        }else{
          this.tail.next = node;
          this.tail = node;
        }
        this.length++;
      }


      print(){
        if(this.length == 0 ){
          console.error("Nothing to print")
          return
        }
        var res = []
        function traverse(curr){
          if(curr == null){
            return
          }
          res.push(curr.value)
          traverse(curr.next)
        }
        traverse(this.head)
        return res
      }

      
      pop(){
        if(this.length == 0){
          console.error("nothing to pop!")
          return
        }else if(this.length==1){
          this.tail = null;
          this.head = null;
          this.length--;
          return;
        }
        var current = this.head;
        var prev = current
        
        function traverse(curr,prev,t){
          if(curr.next == null){
             t.tail = prev;
             t.length--;
             prev.next = null;
             return
          }
          prev = curr;
          curr = curr.next;
          traverse(curr,prev,t)
        }

        traverse(current,prev,this)
      }
      

      shift(){
          if(this.length == 0 ){
              console.error("NOTHING TO SHIFT!!!!!")
              return
          }
          var shift_node = this.head;
          if(this.length==1){
              this.head = null;
              this.tail = null;
          }else{
               this.head = this.head.next;
               shift_node.next = null;
          }
          this.length--;
          return shift_node;
      }


      unshift(value){
          var node = new Node(value);
          if(this.head == null){
              this.head = node;
              this.tail = this.head;
              this.length++;
              return ;
          }
          node.next = this.head;
          this.length++;
          this.head = node;
      }
      

      get(index){
         if(index<0 || index > this.length-1){
              console.error("Index out of bound");
              return null
          }
          var i = 0;
          function traverse(curr,i){
              if(i==index){
                  return curr;
              }
              return traverse(curr.next,i+1)
          }
          return traverse(this.head,i)
      }


      set(index,value){
          var foundNode = this.get(index);
          if(foundNode){
              foundNode.value = value;
              return true;
          }
          return false;
      }

        
      insert(index,val){
          if(index <0 || index > this.length){
            return false;
          }
          if(index == this.length){
             this.push(val)
             return true;
          }else if(index == 0){
             this.unshift(val)
             return true;
          }
          var prev = this.get(index - 1)
          var node = new Node(val)
          node.next = prev.next;
          prev.next = node;
          this.length++;
          return true;
      }


      remove(index){
          if(index < 0 || index>this.length-1){
              console.error("Index out of bound")
              return 
          }
          if(index == 0){
              this.shift();
              return true;
          }else if(index == this.length -1){
              this.pop()
              return true;
          }
          var prev = this.get(index-1);
          var curr_remove = prev.next;
          prev.next = curr_remove.next;
          --this.length;
          return curr_remove;
      }
      

      array_to_linkedList(arr){
        if(arr.length == 1){
            this.push(arr[0])
            return;
        }
        this.array_to_linkedList(arr.slice(0,-1));
        this.push(arr[arr.length-1]);
        return this.head
      }


      reverse(){
        var curr = this.head;
        this.head = this.tail;
        this.tail = curr;
        var next;
        var prev = null;
        while(curr!=null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
      }
 }


    var list = new Singly_linked_list()
    list.push("Hellow")
    list.push("siddharth")
    
}
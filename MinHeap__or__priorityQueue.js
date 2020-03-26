{
//     Creating the priority node
    class PriorityNode{
        constructor(val,prior){
            this.value = val;
            // Adding the priority to the node
            this.priority = prior;
        }
    }

    class MinBinaryHeap{
        constructor(){
            this.values = [];
        }

//==================================START==============================================//
// Insertion and bubling up the new elem to the correct spot

        enqueue(val,p){
            var pNode = new PriorityNode(val,p)
            this.values.push(pNode);
            this.bubbleUp(this.values)
            return this.values
        }

        bubbleUp(arr){
            let self = this;
            let child = arr.length - 1,
                parent = Math.floor((child-1)/2)
            function recursive(){
               if(parent <0){
                   return;
               }
               if(arr[parent]>arr[child]){
                   self.swap(arr,parent,child);
               }else{
                   return
               }
               child = parent;
               parent = Math.floor((child-1)/2)
               recursive()
            }
            recursive()
        }
//==================================== END =============================================//      


//==================================START==============================================//
//      Extract max from the maxHeap and balancing the heap

        dequeue(){
            var res = this.values[0];
            var end = this.values.pop()
            if(this.values.length > 0){
                this.values[0] = end
                //Calling sinkDown function for making max binary heap
                this.sinkDown(this.values);
            }
            //console.log(this.values)
            return res
        }

        sinkDown(arr){
            var self = this;
            var curr = 0;
                   
            function recursive(){
                var left = 2*curr+1,
                    right = 2*curr+2,
                    length = arr.length-1;
                if(left>length || right > length) return;
                
                if(arr[curr].priority < arr[left].priority && arr[curr].priority < arr[right].priority){
                    return;
                }
                if(arr[left]<arr[right]){
                    self.swap(arr,left,curr);
                    curr = left
                }else{
                    self.swap(arr,right,curr);
                    curr = right;
                }
                recursive();
            }
            recursive();
        }
//==================================== END =============================================//      

// Swaping helper method
        swap(arr,first,second){
            var temp = arr[first]
            arr[first] = arr[second]
            arr[second] = temp;
        }
    }


    var minHeap = new MinBinaryHeap();
    minHeap.enqueue(100)
    minHeap.enqueue(99)
    minHeap.enqueue(98)
    minHeap.enqueue(97)
    minHeap.enqueue(1)
    minHeap.dequeue()
}

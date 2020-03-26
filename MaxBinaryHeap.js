{
    class MaxBinaryHeap{
        constructor(){
            this.values = [];
        }
        
//==================================START==============================================//
// Insertion and bubling up the new elem to the correct spot

        insert(val){
            this.values.push(val)
            //Calling bubbleUp function for making max binary heap
            this.bubbleUp(this.values);
            //console.log(this.values)
        }

        bubbleUp(arr){
            var self = this;
            let last_elem_index = arr.length - 1;
            let parent = Math.floor((last_elem_index-1)/2)
            function recursion(last_elem_index,parent){
                // base case
                if(parent<0){
                    return
                }
                if(arr[parent]<arr[last_elem_index]){
                    self.swap(arr,parent,last_elem_index)
                }else{
                    return
                }
                last_elem_index = parent;
                parent = Math.floor((last_elem_index-1)/2)
                recursion(last_elem_index,parent)
            }
            recursion(last_elem_index,parent)
        } 
//==================================== END =============================================//      
        


//==================================START==============================================//
//      Extract max from the maxHeap and balancing the heap

        extract_max(){
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
                if(arr[curr] > arr[left] && arr[curr]>arr[right]){
                    return;
                }
                if(arr[left]>arr[right]){
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

       swap(arr,first,second){
            var temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
        }
    }

    var maxheap = new MaxBinaryHeap()
    maxheap.insert(41)
    maxheap.insert(39)
    maxheap.insert(33)
    maxheap.insert(18)
    maxheap.insert(27)
    maxheap.insert(12)
    maxheap.insert(55)
    maxheap.extract_max()
}

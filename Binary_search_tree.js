{
    class Node{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }


    class BST{
        constructor(){
            this.root = null;
        }

        insert(value){
            var node = new Node(value);
            if(this.root == null){
                this.root = node;
            }else{
               var curr = this.root;
               while(true){
                   if(value = curr.value){
                       return console.error("Value already present")
                   }
                   if(value < curr.value){
                        if(curr.left == null){
                            curr.left = node;
                            break;
                        }else{
                            curr = curr.left;
                        }
                   }else{
                        if(curr.right == null){
                            curr.right = node;
                            break;
                        }else{
                            curr = curr.right;
                        }
                   }
               }
            }
             return this;
        }

        insert_recursive(value){
            function recursive(curr,value){
                if(curr==null){
                    curr = new Node(value)
                    return curr;
                }

                if(curr.value>value){
                   curr.left = recursive(curr.left,value)
                }else{
                    curr.right = recursive(curr.right,value)
                }
                return curr;
            }
            this.root = recursive(this.root,value)
        }


        find(value){
            if(this.root == null) return false;
            var curr = this.root
            while(curr!=null){
                if(curr.value == value){
                    return true;
                }else if(value < curr.value){
                    curr = curr.left;
                }else{
                    curr = curr.right
                }
            }
            return false
        }
        

        find_recursive(value){
            if(this.root == null) return false;

            function recursive(curr){
                if(curr == null){
                    return false
                }

                if(curr.value == value){
                    return true
                }
                var x = null;
                if(value> curr.value){
                    x = recursive(curr.right)
                }else{
                    x = recursive(curr.left)
                }
                return x
            }
            return  recursive(this.root)
        }

        findMaximum(){
            function recursive(curr){
                if(curr.right == null){
                    return curr.value
                }
                return recursive(curr.right)
            }
            return recursive(this.root)
        }


        findMinimum(){
            function recursive(curr){
                if(curr.left == null){
                    return curr.value
                }
                return recursive(curr.left)
            }
            return recursive(this.root)
        }


        maxDepth(){
            function recursive(curr){
                if(curr == null) return 0;
                else{
                    var lDepth = recursive(curr.left)
                    var rDepth = recursive(curr.right);

                    if(lDepth > rDepth) return lDepth+1
                    else  return rDepth+1
                        
                }
            }
            return recursive(this.root)
        }

        sum_of_all_node(){
            var sum = 0;
            function recursive(curr){
                if(curr == null){
                    return 0
                }
                var left_node_sum = recursive(curr.left);
                var right_node_sum = recursive(curr.right);
                var parent_data = curr.value;
                
                var value = left_node_sum + right_node_sum + parent_data;
                return value;
            }
            return recursive(this.root)
        }        
    }

   var tree = new BST();
   tree.insert_recursive(10)
   tree.insert_recursive(20)
   tree.insert_recursive(5)
   tree.sum_of_all_node();
}
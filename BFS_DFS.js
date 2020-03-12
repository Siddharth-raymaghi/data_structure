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

        insert(val){
            function rec_insert(curr,val){
                if(curr==null){
                    curr = new Node(val);
                    return curr;
                }
                if(val > curr.value ){
                    curr.right = rec_insert(curr.right,val)
                }else if(val < curr.value){
                    curr.left = rec_insert(curr.left,val)
                }else{
                    return curr;
                }
                return curr;
            }
            this.root = rec_insert(this.root,val)
            return this.root;
        }
        
        BFS(){
            var visited = [],
                queue = [],
                node = this.root
            queue.push(node);
            while(queue.length){
                node = queue.shift();
                visited.push(node.value);
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            return visited;
        }

        BFS_recursive(){
            var visited = [],
                queue = [],
                node = this.root;
            queue.push(node)
            function recursive(q){
                if(q.length==0){
                    return
                }
                node = q.shift();
                visited.push(node.value);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
                recursive(q)
            }
            recursive(queue)
            return visited
        }
        
        DFS_preOrder(){
            var visited = [],
                curr = this.root;
            function traverse(curr){
                visited.push(curr.value);
                if(curr.left){
                    traverse(curr.left)
                }
                if(curr.right){
                    traverse(curr.right)
                }
                return;
            }
            traverse(curr)
            return visited;
        }

        DFS_postOrder(){
            var visited = [],
                curr = this.root;
            function traverse(curr){
                if(curr.left){
                    traverse(curr.left);
                }
                if(curr.right){
                    traverse(curr.right);
                }
                visited.push(curr.value)
                return 
            } 
            traverse(curr);
            return visited;       
        }

        DFS_inOrder(){
            var visited = [],
                curr = this.root;
            function traverse(curr){
                if(curr.left){
                    traverse(curr.left)
                }
                visited.push(curr.value)
                if(curr.right){
                    traverse(curr.right)
                }
                return;
            }
            traverse(curr)
            return visited
        }
    }

    var bst = new BST();
    bst.insert(50);
    bst.insert(41);
    bst.insert(40);
    bst.insert(49);
    bst.insert(63);
    bst.insert(61);
    bst.insert(79);
    console.log("BFS ",bst.BFS())
    console.log("Pre Order ",bst.DFS_preOrder())
    console.log("Post Order ",bst.DFS_postOrder());
    console.log("In Order ",bst.DFS_inOrder())
}

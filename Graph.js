{
    class Graph{
        constructor(){
            this.adjacencyList = {}
        }

        addVertex(vertex){
            if(!this.adjacencyList[vertex])
                this.adjacencyList[vertex] = []
        }

        addEdge(vertex1, vertex2){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }

        removeEdge(v1,v2){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(function(v){
                return v != v2;
            })

            this.adjacencyList[v2] = this.adjacencyList[v2].filter(function(v){
                return v != v1;
            })
        }

        removeVertex(vertex){
            var all_arr = this.adjacencyList[vertex];
            for(var v1 of all_arr){
                this.removeEdge(v1,vertex)
            }
            delete this.adjacencyList[vertex]
        }
//         ================Graph traversal =======================
        
        //=====BFS=====

        bfs(start = "A"){
            var visited = [],
                queue = [],
                node_visited = {};
            var list  = this.adjacencyList;
            queue.push(start);
            node_visited[start] = true;
            (function recusive(){
                if(queue.length == 0 ){
                    return
                }
                start = queue.shift();
                visited.push(start)
                var vertex_list = list[start]
                
                for(var v of vertex_list){
                    if(!node_visited[v]){
                        node_visited[v] = true;
                        queue.push(v)    
                    }
                }
                recusive()
            })()
            return visited;     
        }
        
        //=====DFS======
        dfs(start="A"){
            var res = [],
                visited_node = {},
                list = this.adjacencyList;

            (function recursion(vertex){
                visited_node[vertex] = true;
                res.push(vertex);
                list[vertex].forEach(function(v){
                    if(!visited_node[v]){
                        recursion(v)
                    }
                })
            })(start)
            return res;
        }


//         Print the graph
        printGraph(){
            return this.adjacencyList;
        }
    }

    var g = new Graph()
    var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
    vertices.forEach(function(a){
        g.addVertex(a);
    })

    g.addEdge('A', 'B'); 
    g.addEdge('A', 'C'); 
    g.addEdge('B', 'D'); 
    g.addEdge('C', 'E'); 
    g.addEdge('D', 'E'); 
    g.addEdge('D', 'F'); 
    g.addEdge('E', 'F'); 

    g.bfs()
    g.dfs()
}

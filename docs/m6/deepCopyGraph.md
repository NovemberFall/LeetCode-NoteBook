# 133. Clone Graph | Deep Copy Undirected Graph

```ruby
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
```



## Analysis:

- Assumptions:
  - if grahp is null, return null

- Approach:

```ruby
N1  --  N2
  \     /
    N3

# deep copy 

N1'  --  N2'
  \     /
    N3'
```

- Method1: BFS

- step1: create a HashMap to hash `<old GraphNode, new GraphNode>`,
  - 同时创建一个 `queue`, 来记录已经遍历过的 old GraphNode
  - 这也是一种暂时的 "顺序", 因为我们必须在之后遍历操作中，知道哪一个已经遍历过了

- Step2: 每一个 new `GraphNode` 都contains a `List<GraphNode> negihbors`, 
  所以必须对其 也进行一次deep copy，hashTable 来 copy old GrapNode
  - 同时， queue 继续记录old graphNode's neighbors List's `neighbor Node`

- 第一步执行完，对old GraphNode的copy, 然后queue进行队列操作，然后每一个队列里的old GraphNode
  进行遍历，然后call hashTable 对old Node's neighbors's GraphNode进行copy,
  最后把遍历过的新的neighbor GraphNode, 全部加进 new GraphNode's negihbors List 里
  最后一个新的list.addAll(new GraphNode)



```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

//BFS
class Solution {
    public Node cloneGraph(Node node) {
        if(node == null){
            return null;
        }
        Map<Node, Node> map = new HashMap<>();
        Queue<Node> queue = new ArrayDeque<>();
        map.put(node, new Node(node.val));
        queue.offer(node);
        while(!queue.isEmpty()){
            Node nei = queue.poll();
            for(Node neiNode : nei.neighbors){
                if(!map.containsKey(neiNode)){
                    map.put(neiNode, new Node(neiNode.val));
                    queue.offer(neiNode);
                }
                map.get(nei).neighbors.add(map.get(neiNode));
                
            }
        }
        return map.get(node);
    }
}
```


## 


```java
/*
* class GraphNode {
*   public int key;
*   public List<GraphNode> neighbors;
*   public GraphNode(int key) {
*     this.key = key;
*     this.neighbors = new ArrayList<GraphNode>();
*   }
* }
*/
public class Solution {
  public List<GraphNode> copy(List<GraphNode> graph) {
    // Write your solution here.
    if(graph == null){
      return null;
    }
    List<GraphNode> copy = new ArrayList<>();
    Queue<GraphNode> queue = new ArrayDeque<>();
    Map<GraphNode, GraphNode> map = new HashMap<>();
    for(GraphNode old : graph){
        map.put(old, new GraphNode(old.key));
        queue.offer(old);
    }
    while(!queue.isEmpty()){
      GraphNode old = queue.poll();
      for(GraphNode neiNode : old.neighbors){
        if(!map.containsKey(neiNode)){
          map.put(neiNode, new GraphNode(neiNode.key));
          queue.offer(neiNode);
        }
        map.get(old).neighbors.add(map.get(neiNode));
      }
      copy.add(map.get(old));
    }
    return copy; 
  }
}
```

---

## DFS

```java
//DFS
class Solution {
    public Node cloneGraph(Node node) {
        if(node == null){
            return null;
        }
        Map<Node, Node> map = new HashMap<>();
        map.put(node, new Node(node.val));
        DFS(node, map);
        return map.get(node);
    }
    
    private void DFS(Node seed, Map<Node, Node> map){
        Node copy = map.get(seed);
        for(Node nei : seed.neighbors){
            if(!map.containsKey(nei)){
                map.put(nei, new Node(nei.val));
                DFS(nei, map);
            }
            copy.neighbors.add(map.get(nei));
        }
    }
}
```
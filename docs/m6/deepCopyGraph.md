## 133. Clone Graph | Deep Copy Undirected Graph | BFS | DFS
![](img/2021-08-11-17-29-26.png)
![](img/2023-01-02-12-15-00.png)
![](img/2021-08-11-17-32-14.png)
---
## Analysis:

- Assumptions:
  - if grahp is null, return null

![](img/2021-08-30-12-14-41.png)

- Approach:

![](img/2021-08-11-18-51-20.png)

```ruby
N1  --  N2
  \     /
    N3

# deep copy 

N1'  --  N2'
  \     /
    N3'
```

![](img/2021-08-30-12-15-27.png)

- Method1: BFS

![](img/2021-08-11-18-52-03.png)

![](img/2021-08-30-13-07-36.png)

![](img/2021-08-30-13-08-08.png)


```java
class _133_CloneGraph {
    static class Node {
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

        @Override
        public String toString() {
            return "Node's value: " + this.val;
        }
    }

    public Node cloneGraph(Node node) {
        if (node == null) {
            return node;
        }
        Map<Node, Node> map = new HashMap<>();
        Queue<Node> queue = new ArrayDeque<>();
        map.put(node, new Node(node.val));
        queue.offer(node);
        while (!queue.isEmpty()) {
            Node oldNode = queue.poll();
            for (Node oldNeiNode : oldNode.neighbors) {
                if (!map.containsKey(oldNeiNode)) {
                    map.put(oldNeiNode, new Node(oldNeiNode.val));
                    queue.offer(oldNeiNode);
                }
                
                // Node copyOldNeiNode = map.get(oldNeiNode);
                // map.get(oldNode).neighbors.add(copyOldNeiNode);

                map.get(oldNode).neighbors.add(map.get(oldNeiNode));
            }
        }
        return map.get(node);
    }

    public static void main(String[] args) {
        Node node1 = new Node(1);
        Node node2 = new Node(2);
        Node node3 = new Node(3);
        Node node4 = new Node(4);
        node1.neighbors.add(node2);
        node1.neighbors.add(node4);
        node2.neighbors.add(node1);
        node2.neighbors.add(node3);
        node3.neighbors.add(node2);
        node3.neighbors.add(node4);
        node4.neighbors.add(node1);
        node4.neighbors.add(node3);

        _133_CloneGraph cloneGraph = new _133_CloneGraph();
        Node cloneNode1 = cloneGraph.cloneGraph(node1);
        System.out.println(cloneNode1.neighbors); // [Node's value: 2, Node's value: 4]
        System.out.println(cloneNode1.neighbors.get(0).neighbors); // [Node's value: 1, Node's value: 3]
        System.out.println(cloneNode1.neighbors.get(1).neighbors); // [Node's value: 1, Node's value: 3]
    }
}
```



---

## DFS

```java
//DFS
class Solution {
    Map<Node, Node> map = new HashMap<>();
    
    public Node cloneGraph(Node node) {
        if (node == null) return node;
        
        return dfs(node);
    }
    
    private Node dfs(Node node) {
        if (node == null) return node;
        
        //1. 已经找到过这个node
        if (map.containsKey(node)) {
            return map.get(node);
        } else {//没有找到过这个node
            //copyNode's val
            Node copyNode = new Node(node.val);
            map.put(node, copyNode);
            //copyNode's neighbors
            List<Node> list = new ArrayList<>();
            for (Node nei : node.neighbors) {
                list.add(dfs(nei));
            }
            copyNode.neighbors = list;
            return copyNode;
        }
    }
}
```
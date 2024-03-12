## 684. Redundant Connection
![](img/2024-02-29-20-47-26.png)

---
```java
class Solution {
    static class UnionFind {
        int[] parent;
        int[] rank;
        
        UnionFind(int size) { 
            parent = new int[size];
            rank = new int[size];
            for (int i = 0; i < size; i++) {
                parent[i] = i;
                rank[i] = 1;
            }            
        }
            
        public int find(int x) {
            if (x == parent[x]) {
                return x;
            }
            return parent[x] = find(parent[x]);
        }

        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX == rootY) {
                return;
            }
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX] += 1;
            }
        }
        public boolean isConnect(int x, int y) {
            return find(x) == find(y);
        }

    }
    public int[] findRedundantConnection(int[][] edges) {
        int[] res = new int[2];
        int size = edges.length;
        UnionFind uf = new UnionFind(size);
        for (int[] edge : edges) {
            int x = edge[0] - 1;
            int y = edge[1] - 1;
            int rootX = uf.find(x);
            int rootY = uf.find(y);
            if (rootX == rootY) {
                res[0] = edge[0];
                res[1] = edge[1];
            } else {
                uf.union(x, y);
            }
        }
        return res;
    }
}
```


---
### method 2

```java
class Solution {
    static class UnionFind {
        int[] parent;
        int[] rank;

        public UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                rank[i] = 1;
            }
        }

        public int find(int x) {
            if (x == parent[x]) {
                return x;
            }
            return parent[x] = find(parent[x]);
        }

        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX == rootY) {
                return false;
            }
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX] += 1;
            }
            return true;
        }
    }

    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        UnionFind uf = new UnionFind(n);
        for (int[] edge : edges) {
            if (!uf.union(edge[0] - 1, edge[1] - 1)) {
                return new int[]{edge[0], edge[1]};
            }
        }
        return new int[]{};
    }
}
```
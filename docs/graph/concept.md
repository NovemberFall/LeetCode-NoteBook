## Introduction

- [LeetCode Graph](https://leetcode.com/explore/learn/card/graph/)

---
- Types of “graphs”
  - `undirected graphs`, 
    - The edges between any two vertices in an “undirected graph” do not have a direction, indicating a two-way relationship.
  - `directed graphs`
    - The edges between any two vertices in a “directed graph” graph are directional.
![](img/2022-09-15-22-30-15.png)
  - `weighted graphs`
    - Each edge in a “weighted graph” has an associated weight. The weight can be of any metric, such as time, distance, size, etc. The most commonly seen “weighted map” in our daily life might be a city map.
![](img/2022-09-15-22-31-09.png)
---


### Disjoint Set 不相交集

- [Disjoint Sets using union by rank and path compression Graph Algorithm | youtube](https://www.youtube.com/watch?v=ID00PMy0-vE&t=28s)

- [Introduction to Disjoint Sets](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/#:~:text=Introduction%20to%20Disjoint%20Sets)

- [find && union function](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/#:~:text=Implementing%20%E2%80%9Cdisjoint%20sets%E2%80%9D)
  
- [Explanation of Quick Union](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3840/#:~:text=Explanation%20of%20Quick%20Union)

- [Why is Quick Union More Efficient than Quick Find?](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3840/#:~:text=Why%20is%20Quick%20Union%20More%20Efficient%20than%20Quick%20Find%3F)

- [Union by Rank - Disjoint Set](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3879/#:~:text=Disjoint%20Set%20%2D%20Union%20by%20Rank)

- [Path Compression Optimization - Disjoint Set](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3880/#:~:text=Next-,Path%20Compression%20Optimization%20%2D%20Disjoint%20Set,-Report%20Issue)
  - Thre reason of **Path Compression** can be optimiz:
    - 1. **Initial Find Operation**:
      - When you perform the find operation initially on an element, you indeed traverse all the parent nodes until you reach the root node. 
        This is where the optimization starts.
    - 2. **Recursion and Path Compression**:    
      - After finding the root node, during the recursive backtracking, you update the parent node of each traversed element to directly point 
        to the root node. This process effectively compresses the path from each node to the root node.
      - This means that every element in the path from the initial element to the root node directly points to the root node after the initial 
        find operation. Subsequent find operations for the same element or any element in the same path will require minimal traversal, 
        typically just one or two hops, because the path has been compressed.
  

- [Optimized “disjoint set” with Path Compression and Union by Rank](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/#:~:text=Next-,Optimized%20%E2%80%9Cdisjoint%20set%E2%80%9D%20with%20Path%20Compression%20and%20Union%20by%20Rank,-Report%20Issue)





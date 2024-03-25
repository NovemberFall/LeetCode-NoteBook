## 787. Cheapest Flights Within K Stops
![](img/2024-03-06-23-07-42.png)
![](img/2024-03-06-23-08-07.png)
---

### Bellman Ford

- Using **Dynamic Programming** to Find the Shortest Path

- [youtube bellman ford](https://www.youtube.com/watch?v=FtN3BYH2Zes)


```java
class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Distance from source to all other nodes.
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        // Run only K+1 times since we want shortest distance in K hops
        for (int i = 0; i <= k; i++) { 
            // Create a copy of dist vector.
            int[] temp = Arrays.copyOf(dist, dist.length);
            for (int[] edge: flights) { // Go over all edges
                int u = edge[0];
                int v = edge[1];
                int w = edge[2];
                if (dist[u] == Integer.MAX_VALUE) continue;
                if (dist[u] + w < temp[v]) { // relax function
                    temp[v] = dist[u] + w;
                }
            }
            // Copy the temp vector into dist.
            dist = temp;
        }
        return dist[dst] == Integer.MAX_VALUE ? -1 : dist[dst];      
    }
}
```


---
### Dijkstra Algorithm

```java
class cheapestFlightsWithinKStops {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int K) {
        Map<Integer, List<int[]>> fmap = new HashMap<>();
        for (int[] flight : flights) { // flights[i] = [from, to, price]
            fmap.putIfAbsent(flight[0], new ArrayList<>());
            fmap.get(flight[0]).add(new int[]{flight[1], flight[2]});
        }
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        // [0]: price, [1]: curNode, [3]: stops
        minHeap.offer(new int[]{0, src, K + 1});
        Map<Integer, Integer> visited = new HashMap<>();

        while (!minHeap.isEmpty()) {
            int[] e = minHeap.poll();
            int price = e[0], cur = e[1], stops = e[2];
            if (visited.containsKey(cur) && visited.get(cur) >= stops) {
                continue;
            }
            visited.put(cur, stops);

            if (cur == dst) {
                return e[0];
            }
            if (stops > 0) {
                List<int[]> list = fmap.get(cur);
                if (list == null || list.isEmpty()) {
                    continue;
                }
                for (int[] f : list) {
                    minHeap.offer(new int[]{price + f[1], f[0], stops - 1});
                }
            }
        }
        return -1;
    }
}
```



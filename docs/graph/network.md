## 743. Network Delay Time
![](img/2024-03-05-19-34-04.png)

- **dijkstra** are very similar problems. It's just that djikstra cost is different compared with bfs, so use priorityQueue instead a Queue for a standard bfs search.

---

#### [Dijkstra - Shortest Path | youtube video](https://youtu.be/EaphyqKU4PQ?t=278)

- `boolean[] visited = new boolean[n + 1]`, Here's why you need boolean[] visited:
  -  **Preventing Infinite Loops**: Without marking visited nodes, you risk getting stuck in infinite loops in cyclic graphs. Marking visited 
    nodes ensures that you won't revisit the same node multiple times, preventing infinite loops

---
```java
class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        // for `List[int[]{TargetNode, Path}]`, index-0 is the `previous Node`, or `from Node`, index-1 is the `time` of edge,
        
        Map<Integer, List<int[]>> map = new HashMap<>();
        for (int[] time : times) {
            // time[0] : source node, time[1] : target node, time[2] : time
            map.putIfAbsent(time[0], new ArrayList<>());
            map.get(time[0]).add(new int[]{time[1], time[2]});
        }
        
        //distance, node into pq
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        minHeap.offer(new int[]{0, k});
        
        // since a network of n nodes, labeled from `1` to `n`.
        boolean[] visited = new boolean[n + 1];
        int res = 0;
        
        while (!minHeap.isEmpty()) {
            int[] cur = minHeap.poll();
            int curDist = cur[0];
            int curNode = cur[1];
            if (visited[curNode]) {
                continue;
            }
            visited[curNode] = true;
            res = curDist;
            n--;
            if (map.containsKey(curNode)) {
                for (int[] nextEdge : map.get(curNode)) {
                    minHeap.offer(new int[]{curDist + nextEdge[1], nextEdge[0]});
                }
            }
        }
        
        return n == 0 ? res : -1;
    }
}
```


---

### method 2

- for `Map<TargetNode, Path>`, key is the `previous Node`, or `from Node`, value is the `time` of edge,

```java
class _743_NetworkDelayTime {
    public int networkDelayTime(int[][] times, int n, int k) {
        // for `Map<TargetNode, Path>`, key is the `previous Node`, or `from Node`, value is the `time` of edge,
        Map<Integer, Map<Integer, Integer>> map = new HashMap<>();
        for (int[] time : times) {
            // time[0] : source node, time[1] : target node, time[2] : time
            map.putIfAbsent(time[0], new HashMap<>());
            map.get(time[0]).put(time[1], time[2]);
        }

        //distance, node into pq
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> (a[0] - b[0]));
        minHeap.offer(new int[]{0, k});

        // since a network of n nodes, labeled from `1` to `n`.
        boolean[] visited = new boolean[n + 1];
        int res = 0;

        while (!minHeap.isEmpty()) {
            int[] cur = minHeap.poll();
            int curDist = cur[0];
            int curNode = cur[1];
            if (visited[curNode]) {
                continue;
            }
            visited[curNode] = true;
            res = curDist;
            n--;
            if (map.containsKey(curNode)) {
                for (int nextNode : map.get(curNode).keySet()) {
                    minHeap.offer(new int[]{curDist + map.get(curNode).get(nextNode), nextNode});
                }
            }
        }

        return n == 0 ? res : -1;
    }
}
```
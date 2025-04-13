## 973. K Closest Points to Origin
![](img/2023-11-29-17-07-23.png)
![](img/2023-11-29-17-07-36.png)
---

```java
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        int[][] res = new int[k][2];
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(
            (a, b) -> (b[0] * b[0] + b[1] * b[1]) -  (a[0] * a[0] + a[1] * a[1]) 
        );
        
        for (int[] point : points) {
            maxHeap.offer(point);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }
        
        for (int i = 0; i < k; i++) {
            res[i] = minHeap.poll();
        }
        return res;
    }
}
```
---

```py
import heapq

class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        maxHeap = []  # Use a list to simulate a max-heap

        for point in points:
            distance_sq = point[0]**2 + point[1]**2
            # Python's heapq is a min-heap, so we store the negative distance
            # to simulate a max-heap based on distance.
            heapq.heappush(maxHeap, (-distance_sq, point))
            if len(maxHeap) > k:
                heapq.heappop(maxHeap)

        res = []
        for _ in range(k):
            neg_distance_sq, point = heapq.heappop(maxHeap)
            res.append(point)

        return res
```


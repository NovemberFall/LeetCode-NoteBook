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
        
        while (k > 0) {
            res[--k] = maxHeap.poll();
        }
        return res;
    }
}
```

---

### version II

```java
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>( (a, b) ->  
            ((a[0] - 0)*(a[0] - 0) + (a[1] - 0) * (a[1] - 0)) - ((b[0] - 0)*(b[0] - 0) + (b[1] - 0) * (b[1] - 0)) 
        );
        
        for (int[] point : points) {
            minHeap.offer(point);
        }
        
        int[][] res = new int[k][2];
        for (int i = 0; i < k; i++) {
            res[i] = minHeap.poll();
        }
        
        return res;
    }
}
```
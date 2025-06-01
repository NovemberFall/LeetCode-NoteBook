## 215. Kth Largest Element in an Array
![](img/2022-05-12-01-22-26.png)
---


---

- `O(N lg K)` running time + `O(K)` memory, **online algorithm**

- [video c6 - 39.50]()

```java
class _215_KthLargestElementInArray {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
                (a, b) -> (a - b)
        );

        for (int num : nums) {
            minHeap.offer(num);

            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }
}
```

---

#### Python


```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        res = []
        for i in range(len(nums)):
            if len(res) < k:
                heapq.heappush(res, nums[i])
            else:
                if nums[i] > res[0]:
                    heapq.heappop(res)
                    heapq.heappush(res, nums[i])
        return res[0]
```
---





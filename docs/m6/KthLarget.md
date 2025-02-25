## 215. Kth Largest Element in an Array
![](img/2022-05-12-01-22-26.png)

- `O(N lg N)` running time + `O(1)` memory

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        if (nums.length == 0 || k == 0) {
            return new int[0];
        }
        int n = nums.length;
        Arrays.sort(nums);
        return nums[n - k];
    }
}
```


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
        minHeap = []  # Create an empty list to represent the min-heap

        for num in nums:
            heapq.heappush(minHeap, num)  # Add the element to the min-heap

            if len(minHeap) > k:
                heapq.heappop(minHeap)   # Remove the smallest element if the size exceeds k

        return minHeap[0]  # The top of the min-heap is the kth largest element

```
## 215. Kth Largest Element in an Array

```ruby
Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
```





```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        if(nums.length == 0 || nums == null){
            return nums[0];
        }
        PriorityQueue<Integer> maxHeap = 
            new PriorityQueue<>((a, b) -> b-a);

        for(int elem : nums){
            maxHeap.offer(elem);
        }

        int res = 0;
        for(int i=0; i<k; i++){
            res = maxHeap.poll();
        }
        return res;
    }
}
```
## 215. Kth Largest Element in an Array
![](img/2022-05-12-01-22-26.png)

- `O(N lg N)` running time + `O(1)` memory

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int n = nums.length;
        Arrays.sort(nums);
        return nums[n - k];
    }
}
```

---

- `O(N lg K)` running time + `O(K)` memory

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(k, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                if (o1.equals(o2)) {
                    return 0;
                }
                
                return o1 > o2 ? -1 : 1;
            }
        });
        
        for (int num : nums) {
            maxHeap.offer(num);
        }
        
        int res = 0;
        for (int i = 0; i < k; i++) {
            res = maxHeap.poll();
        }
        
        return res;
    }
}
```


---

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
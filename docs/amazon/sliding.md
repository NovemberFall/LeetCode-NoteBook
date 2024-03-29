## 239. Sliding Window Maximum

![](img/2021-12-22-16-45-41.png)
---

### Max Heap

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        List<Integer> res = new ArrayList<>();
        int curMax = Integer.MIN_VALUE;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b) -> b - a);
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            // add right
            maxHeap.offer(nums[right]);
            
            // remove left
            if (right - left + 1 > k) {
                maxHeap.remove(nums[left]);
                left++;
            }
            
            if (right - left + 1 >= k) {
                res.add(maxHeap.peek());
            }
        }
        
        int[] ans = new int[res.size()];
        for (int i = 0; i < ans.length; i++) {
            ans[i] = res.get(i);
        }
        return ans;
    }
}
```

---
### Brute Force
![](img/2022-12-22-23-47-49.png)

```java
class _239_SlidingWindowMaximum {
    public static int[] maxSlidingWindow_BruteForce(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k == 0) return new int[0];

        List<Integer> res = new ArrayList<>();
        for (int i = k - 1; i < nums.length; i++) {
            int curMax = nums[i];
            for (int j = 0; j < k; j++) {
                curMax = Math.max(curMax, nums[i - j]);
            }
            res.add(curMax);
        }
        return res.stream().mapToInt(i -> i).toArray();
    }
}
```


---

- [4.1  || 1:47:10]()
- [LeetCode 官方解释](https://leetcode.cn/problems/sliding-window-maximum/solutions/1212012/acm-xuan-shou-tu-jie-leetcode-hua-dong-c-i3wj/)


```ruby
k = 3

      0    1     2     3     4     5     6     7
     [1,   3,   -1,   -3,    5,    3,    6,    7]
DQ:  [0]
DQ:       [1]
DQ:       [1]   [2]                                 List[3, ]
DQ:       [1]   [2]   [3]                           List[3, 3]
DQ:                                                 List[3, 3]  # poll() <== 1, 2, 3
DQ:                         [4]                     List[3, 3, 5]
DQ:                         [4]   [5]               List[3, 3, 5, 5]
DQ:                                     [6]         List[3, 3, 5, 5]  # poll() <== 4, 5
DQ:                                     [6]         List[3, 3, 5, 5, 6]
DQ:                                           [7]   List[3, 3, 5, 5, 6, 7]
```
---

- **What if every num is decreasing?**

```java
    // 如果当前队列最左侧存储的下标等于 i-k 的值，代表目前队列已满。
    // 但是新元素需要进来，所以列表最左侧的下标出队列
    if (deque.peekFirst() == i - k) {
        deque.pollFirst();
    }
```

![](img/2024-03-18-17-40-18.png)

---
```java
class slidingWindowMaximum_monotonicStack {

    // Sliding Window
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k == 0) return new int[0];

        List<Integer> res = new ArrayList<>();

        // 双端队列 保存当前窗口最大值的数组位置 保证队列中数组位置的数值按从大到小排序
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < nums.length; i++) {
            // 保证从大到小 如果前面数小则需要依次弹出，直至满足要求
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            // 添加当前值对应的数组下标
            deque.offerLast(i);

            // 如果当前队列最左侧存储的下标等于 i-k 的值，代表目前队列已满。
            // 但是新元素需要进来，所以列表最左侧的下标出队列
            if (deque.peekFirst() == i - k) {
                deque.pollFirst();
            }

            // 当窗口长度为k时 保存当前窗口中最大值
            if (i + 1 >= k) {
                res.add(nums[deque.peekFirst()]);
            }
            /*
            这里为什么 是 i + 1 >= k, 而不是 i + 1 == k
                比如 i = 2,  2 + 1 == k, 成立
                但是 i = 3,  3 + 1 ?= k, 不成立，就不会再添加新元素
            */
        }
        return res.stream().mapToInt(Integer::intValue).toArray();
    }

    public static void main(String[] args) {
        slidingWindowMaximum_monotonicStack slidingWindowMaximumMonotonicStack = new slidingWindowMaximum_monotonicStack();
        int[] nums = new int[]{1, 3, -1, -3, 5, 3, 6, 7};
        int[] res = slidingWindowMaximumMonotonicStack.maxSlidingWindow(nums, 3);
        System.out.println(Arrays.toString(res));
    }
}
```

---



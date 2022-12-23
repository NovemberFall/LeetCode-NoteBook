## 239. Sliding Window Maximum

![](img/2021-12-22-16-45-41.png)


- Key insight: when `a[i]` and `a[j]` are both in the slide window, 
  `i < j` and `a[i] <= a[j]`, we can remove `a[i]` from the sliding 
  window without affecting the result, because `a[i]` can no longer be
  the max element in the sliding window (又新又大)

- Operations on the simplified sliding window:
  - 1. push something to the right
  - 2. pop something from the left
  - 3. pop something from tht right
  - 4. peek left

- we must maintain all the values in the dequeue to keep them in a 
  `descending` order. WHY??? Because when a new element `X` comes in,
  if it is bigger and newer than the right most element `r`, then `r` 
  cannot be the solution wahtsover, so we can just delete `r`

- so the `deque[leftMost]` is the final result to return whenever the
  window slides one step to the right.

- Data structure: a `deque` maintains the elments in the sliding window
  that either are the max now or can be the max in the future
  - simplified sliding window = {7, 3}
    - in `ascending` order of index
    - in `decending` order of value

```java
/*
          0  1   2   3  4  5  6  7
         [1, 3, -1, -3, 5, 3, 6, 7]
    PQ:   1  3
    PQ:      3


 */
class _239_SlidingWindowMaximum {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) return nums;

        List<Integer> res = new ArrayList<>();
        Deque<Integer> dq = new ArrayDeque<>();
        for (int i = 0; i < nums.length; i++) {
            while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) {
                dq.pollLast();
            }
            while (!dq.isEmpty() && dq.peekFirst() <= i - k) {
                dq.pollFirst();
            }

            dq.offerLast(i);

            if (i + 1 >= k) {
                res.add(nums[dq.peekFirst()]);
            }
        }
        return res.stream().mapToInt(Integer::intValue).toArray();
    }
}
```
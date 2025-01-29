## 658. Find K Closest Elements
![](img/2022-12-10-17-51-54.png)
---

```java
class _658_Find_K_Closest_Elements {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        List<Integer> res =new ArrayList<>();
        if (arr == null || arr.length == 0 || k == 0) {
            return res;
        }

        int close = cloest(arr, x);
        int left = close - 1, right = close + 1;
        while (right - left - 1 < k) {
            if (left < 0) {
                right++;
            } else if (right >= arr.length) {
                left--;
            } else if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
                left--;
            } else {
                right++;
            }
        }
        for (int i = left + 1; i < right; i++) {
            res.add(arr[i]);
        }
        return res;
    }

    private int cloest(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left < right - 1) {
            int mid = (left + right) >>> 1;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
        if (Math.abs(arr[left] - target) <= Math.abs(arr[right] - target)) {
            return left;
        } else {
            return right;
        }
    }
}
```
---

## Algorithm

- **Step 1**: 先找到最接近**target**的元素！
- **Step 2**： 左右开花，expanding from both sides. 


```ruby
         0   1   2   3   4
        [1   2   3   4   5]   k = 4, x = 3
                                          # binary search 找到最佳元素 =>  3 index 2

Init: 
         0   1   2   3   4
        [1   2   3   4   5]   k = 4, x = 3     #  total # of loops: k = 4
             l       r    
                                          #  left = close_index -1 = 1, 
                                          #  right = close_index + 1 = 3





       # Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)
         0   1   2   3   4
        [1   2   3   4   5]   k = 4, x = 3     #  total # of loops: r - l - 1 < k
         l           r                         #  left = 0, right = 3



       # Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)       
         0   1   2   3   4
        [1   2   3   4   5]   k = 4, x = 3     #  total # of loops: r - l - 1 < k
         l               r                     #  left = 0, right = 4



       # Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)
         0   1   2   3   4
        [1   2   3   4   5]   k = 4, x = 3     #  total # of loops:  r - l - 1 < k
     l                   r                     #  left = -1, right = 4


        
        return => [1, 2, 3, 4]
```



## Why do we have `while (right - left - 1 < k)` ?

- assume l = -1, r = 4,   r - l - 1 = 4 - (-1) - 1 = 4,  **4 < k ?**, **所以跳出循环， 刚好留下 k 个元素**
---



#### Python

```py
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        if len(arr) == 0 or k == 0:
            return []

        # Find the closest element
        close = self.closest(arr, x)

        # Initialize pointers around the closest element
        left = close - 1
        right = close + 1

        # Expand the window to include `k` elements
        while right - left - 1 < k:  # Ensure window size is `k`
            if left < 0:  # If no more elements on the left, move right
                right += 1
            elif right >= len(arr):  # If no more elements on the right, move left
                left -= 1
            elif abs(arr[left] - x) <= abs(arr[right] - x):  # Compare distances
                left -= 1
            else:
                right += 1

        # Return the subarray of size `k`
        return arr[left + 1:right]

    def closest(self, arr, target):
        left, right = 0, len(arr) - 1
        if right < 0:
            return -1

        # Binary search to find the closest element
        while left < right - 1:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid
            else:
                right = mid

        # Determine the closer of the two candidates
        if abs(arr[left] - target) <= abs(arr[right] - target):
            return left
        return right
```

---

## Method 2

#### Look at the example 1:

![](img/2025-01-25-17-25-12.png)]

- can we return `[2, 3, 4, 5]` ?, **No!**
- even though `|1 - 3| == |5 - 3| == 2` but it doesn't meet **a < b** because **5 > 1**



---

```java
class FindKClosestElements {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        List<Integer> res = new ArrayList<>();

        int left = 0, right = arr.length - k;
        while (left < right) {
            int mid = left + ((right - left) >> 1);
            if ((x - arr[mid]) > (arr[mid + k] - x)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        for (int i = left; i < left + k; i++) {
            res.add(arr[i]);
        }
        return res;
    }
}
```

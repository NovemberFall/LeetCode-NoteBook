## 81. Search in Rotated Sorted Array II
![](img/2023-04-02-19-52-31.png)

- [refer to LC 33]()
---
```java
class searchInRotatedSortedArray_II {
    public boolean search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                return true;
            }
            // 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
            while (left <= mid && nums[left] == nums[mid]) {
                left++;
            }
            if (left > mid) {
                continue;
            }

            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target <= nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] <= target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return false;
    }
}
```


- 注意： 可以两个判定都为**闭区间 closed interval**

- 需要小心极端条件： `1, 1, 1, 1, 1, 1, 0, 1, 1, 1`
  - 假设 `target = 0`


```java
        // 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
        while (left <= mid && nums[left] == nums[mid]) {
            left++;
        }
        if (left > mid) {
            continue;
        }
```

- 还需要小心case: 

![](img/2023-04-08-16-41-56.png)

![](img/2023-04-08-16-42-54.png)

- 此时， `left = 1`, 跳出 `while (left <= right)` 的loop, 直接 `index out of bounds`




---
- [find peak 英文教程](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/discuss/1654316/C%2B%2B-oror-Binary-Search-Approach-oror-O(log-N)-oror-Divided-and-Conquered)


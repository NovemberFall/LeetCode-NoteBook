## 33. Search in Rotated Sorted Array
![](img/2022-05-22-21-09-41.png)

---
### One Pass Method  | Template 1


-  the main idea is that we need to find some parts of array that we could adopt
   binary search on that, which means we need to find some completed sorted parts, 
   then determine whether target is in left part or right part. There is at least one 
   segment (left part or right part) is monotonically increasing.

- If the entire left part is monotonically increasing, which means the pivot point is 
  on the right part
  - If `left <= target < mid` ------> drop the right half
  - Else ------> drop the left half
- If the `entire right part` is `monotonically increasing`, which means the `pivot` point 
  is on the `left part`
  - If `mid < target <= right` ------> drop the left half
  - Else ------> drop the right half

![](img/2022-05-23-13-09-22.png)
---
```java
class Solution {
    public int search(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return -1;
        }

        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (target == nums[mid]) {
                return mid;
            }
            if (nums[left] <= nums[mid]) {

                if (nums[left] <= target && target <= nums[mid]) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }
            else {
                if (nums[mid] <= target && target <= nums[right]) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
```
---
![](img/2023-08-16-22-34-18.png)

- **将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环.**

```ruby
if (nums[0] <= nums[mid]) {
    // 左半边有序
} else {
    // 右半边有序
}
```

---

- 注意代码，可以全部统一成两边都是 **闭区间**
- 但是不可以写成： `if (nums[left] < nums[mid])` 因为:

![](img/2023-04-08-14-10-02.png)
![](img/2023-04-08-14-11-10.png)
 
- 可以看到right 会向左边越界!

- [本题如何debug? 可以看b站](https://www.bilibili.com/video/BV1pp4y1W7eZ/?spm_id_from=333.880.my_history.page.click&vd_source=333bb18bd89bdbb4a7c9b3b16c3947f3)
---

- [中文解释](https://suanfa8.com/binary-search/solutions-1/0033-search-in-rotated-sorted-array)



---

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left >>> 1);
            if (nums[mid] == target) {
                return mid;
            } 
            
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
}
```


---


#### python

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            
            if nums[left] <= nums[mid]:
                if nums[left] <= target and target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target and target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        
        return -1
```


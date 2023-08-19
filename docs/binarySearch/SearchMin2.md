## 154. Find Minimum in Rotated Sorted Array II
![](img/2023-08-19-01-09-46.png)
---
![](img/2023-08-19-01-10-35.png)
![](img/2023-08-19-01-10-49.png)
![](img/2023-08-19-01-11-06.png)

```java
class FindMinimumInRotatedSortedArray_II {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] < nums[right]) {
                right = mid;
            } else if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right--;
            }
        }
        return nums[left];
    }
}
```
## 162. Find Peak Element
![](img/2022-05-23-15-37-49.png)

- [bineary Search](https://courses.csail.mit.edu/6.006/spring11/lectures/lec02.pdf)

```java
class Solution {
    public int findPeakElement(int[] nums) {
        if (nums.length <= 1) return 0;
        
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else if (nums[mid] < nums[mid + 1]) {
                left = mid + 1;
            }
        }
        return left;
    }
}
```
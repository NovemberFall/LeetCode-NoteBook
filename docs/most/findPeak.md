## 162. Find Peak Element
![](img/2022-05-23-15-37-49.png)

- [youtube video](https://youtu.be/kMzJy9es7Hc?t=490)
---

### template 1

```java
class findPeakElement_v1 {
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        int left = 0, right = n - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;

            // left neighour greater
            if (mid > 0 && nums[mid - 1] > nums[mid]) {
                right = mid - 1;
            } else if (mid < n - 1 && nums[mid] < nums[mid + 1]) {
                left = mid + 1;
            } else  {
                return mid;
            }
        }
        return -1;
    }
}
```

---

### template 2

```java
public class Solution {
    public int findPeakElement(int[] nums) {
        int len = nums.length;
        int left = 0;
        int right = len - 1;
        // 在 nums[left..right] 中查找峰值
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[mid + 1]) {
                // 下一轮搜索的区间 [mid + 1..right]
                left = mid + 1;
            } else {
                // 下一轮搜索的区间 [left..mid]
                right = mid;
            }
        }
        // left 与 right 重合
        return left;
    }
}
```
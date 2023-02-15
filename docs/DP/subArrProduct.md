## 152. Maximum Product Subarray
![](img/2023-02-05-23-29-45.png)
---
![](img/2023-02-15-09-46-58.png)

```java
public class maxProductSubarray {
    public int maxProduct(int[] nums) {
        int n = nums.length;
        int[] largest = new int[n];
        int[] smallest = new int[n];
        largest[0] = nums[0];
        smallest[0] = nums[0];
        int max = largest[0];

        for (int i = 1; i < n; i++) {
            int tmpLargest = Math.max(nums[i] * largest[i - 1], nums[i] * smallest[i - 1]);
            largest[i] = Math.max(tmpLargest, nums[i]);

            int tmpSmallest = Math.min(nums[i] * largest[i - 1], nums[i] * smallest[i - 1]);
            smallest[i] = Math.min(tmpSmallest, nums[i]);

            max = Math.max(max, largest[i]);
        }
        return max;
    }
}
```
---
- [中文教程 ｜ 博大精深!](https://leetcode.cn/problems/maximum-product-subarray/solution/hua-jie-suan-fa-152-cheng-ji-zui-da-zi-xu-lie-by-g/)
---
![](img/2023-02-05-23-30-49.png)

![](img/2023-02-05-23-31-41.png)

![](img/2023-02-05-23-31-07.png)

![](img/2023-02-05-23-31-58.png)

![](img/2023-02-05-23-32-12.png)

![](img/2023-02-05-23-32-33.png)
---

```ruby
max = 1, min = 1
res = MIN_VALUE
            [2   -2   3    2   -3    5]
+Product:    2   -2   3    6   72   360
-Product:    2   -4  -12  -24  -18  -90 
```
---

```java
class _152_MaximumProductSubarray {
    public int maxProduct(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int globalMax = Integer.MIN_VALUE;
        int imax = 1, imin = 1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                int tmp = imax;
                imax = imin;
                imin = tmp;
            }
            imax = Math.max(imax * nums[i], nums[i]);
            imin = Math.min(imin * nums[i], nums[i]);

            globalMax = Math.max(globalMax, imax);
        }
        return globalMax;
    }

    public static void main(String[] args) {
        _152_MaximumProductSubarray maximumProductSubarray = new _152_MaximumProductSubarray();
        int[] nums = {2, 3, -2, 4};
        System.out.println(maximumProductSubarray.maxProduct(nums)); // 6

        nums = new int[]{2, 3, -2, 4, -2};
        System.out.println(maximumProductSubarray.maxProduct(nums)); // 96
    }
}
```

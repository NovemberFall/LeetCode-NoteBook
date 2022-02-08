## 42. Trapping Rain Water

- Given `n` non-negative integers representing an elevation map where the width of each 
  bar is `1`, compute how much water it can trap after raining.

![](img/2021-09-25-16-21-26.png)
---

### Dynamic Programming

![](img/2021-09-25-16-26-52.png)

- Algorithm
  - Find maximum height of bar from the left end upto an index i in the array `left_max`.
  - Find maximum height of bar from the right end upto an index i in the array `right_max`.
    - Add `min(left_max[i], right_max[i]) - height[i]` to ans
  - `Min(leftMax, rightMax) - Height[i]` (we don't count negative, convert it to be 0)

![](img/2022-02-06-23-05-33.png)

```java
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }
        int n = height.length;
        int leftMax = 0, rightMax = 0;
        int [] left = new int[n];
        int [] right = new int[n];
        int count = 0;
        
        for (int i = 1; i < n; i++) {
            leftMax = Math.max(leftMax, height[i - 1]);
            left[i] = leftMax;
        }
        for (int j = n - 2; j >= 0; j--) {
            rightMax = Math.max(rightMax, height[j + 1]);
            right[j] = rightMax;
        }
        
        for (int i = 0; i < n; i++) {
          count += 
            Math.max(0, Math.min(left[i], right[i])-height[i]);
        }
        return count;
    }
}
```
---
![](img/2022-02-06-22-24-42.png)
---

### Two points

```java
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }
        int leftMax = 0, rightMax = 0;
        int left = 0;
        int right = height.length - 1;
        int count = 0;
        
        while (left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            // 取左右两边比较矮的bar
            if (leftMax < rightMax) {
                count += leftMax - height[left];
                left++;
            } else {
                count += rightMax - height[right];
                right--;
            }
        }
        return count;
    }
}
```

![](img/2022-02-06-22-26-14.png)
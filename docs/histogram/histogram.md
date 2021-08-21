## 84. Largest Rectangle in Histogram
![](img/2021-08-21-00-24-22.png)

![](img/2021-08-21-00-24-37.png)
---
### brute force
![](img/2021-08-21-13-50-07.png)
- 固定高度，求最长底边:
![](img/2021-08-21-13-52-02.png)
- T = O(N^2)
- Space = O(1), 使用常数个临时变量

#### 此方法（超时) :
![](img/2021-08-21-14-25-07.png)

```java
public class Solution {
    public int largestRectangleArea(int[] heights) {
        int len = heights.length;
        if (len == 0) return 0;
        
        int res = 0;
        for (int i = 0; i < len; i++) {
            // 找左边最后 1 个大于等于 heights[i] 的下标
            int left = i;
            int curHeight = heights[i];
            while (left > 0 && heights[left - 1] >= curHeight) {
                left--;
            }
            // 找右边最后 1 个大于等于 heights[i] 的索引
            int right = i;
            while (right < len - 1 && heights[right + 1] >= curHeight) {
                right++;
            }
            int width = right - left + 1;
            res = Math.max(res, width * curHeight);
        }
        return res;
    }
}
```


---
![](img/2021-08-21-00-25-06.png)

- 1. touch x-axis
- 2. touch one of the tops
- 3. touch certain one's left and right

```ruby
for i = 0; i < n; i++
    从 a[i] 向左延伸到哪里
    从 a[i] 向右延伸到哪里
```

![](img/2021-08-21-00-39-18.png)

![](img/2021-08-21-13-33-56.png)

- stack!!! 单调栈 O(N)
  - 性质： 单调递增，or 单调递减
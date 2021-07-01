## 27. Remove Element

![](img/2021-06-30-19-13-01.png)

![](img/2021-06-30-19-13-23.png)

- Time = O(n)
- Space = 0(1)

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int slow = 0;
        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != val) {
                nums[slow++] = nums[fast];
            }
        }
        return slow;
    }
}
```
## 53. Maximum Subarray      |       Largest SubArray Sum
![](img/2021-08-09-02-33-59.png)
---

## Analysis

![](img/2021-08-17-21-15-46.png)
![](img/2021-08-17-21-17-35.png)
![](img/2023-02-05-22-49-36.png)

- T = O(n)
- Space = O(n)


```java
class Solution {
    public int maxSubArray(int[] nums) {
        if(nums == null || nums.length == 0){
            return 0;
        }
        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        int globalMax = nums[0];
        for(int i = 1; i < nums.length; i++){
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            globalMax = Math.max(dp[i], globalMax);
        }
        return globalMax;
    }
}
```
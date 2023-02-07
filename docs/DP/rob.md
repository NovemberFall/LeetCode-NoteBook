## 198. House Robber
![](img/2023-02-06-16-22-32.png)
---
![](img/2023-02-06-16-22-51.png)

![](img/2023-02-06-16-23-12.png)

![](img/2023-02-06-16-25-03.png)

![](img/2023-02-06-16-25-19.png)
---

```java
class _198_HouseRobber {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int[] dp = new int[nums.length + 1];
        dp[0] = 0;
        dp[1] = nums[0];
        for (int i = 2; i <= nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
        }
        return dp[nums.length];
    }

    public static void main(String[] args) {
        _198_HouseRobber houseRobber = new _198_HouseRobber();
        int[] nums = {3, 1, 2, 4};
        System.out.println(houseRobber.rob(nums)); // 7
    }
}

```
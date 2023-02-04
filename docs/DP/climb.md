## 70. Climbing Stairs
![](img/2023-02-03-22-47-20.png)
---
- Linear Scan 回头看问题

![](img/2023-02-03-22-59-25.png)
---

```java
public class _70_ClimbingStairs {
    public int climbStairs(int n) {
        if (n < 1) {
            return 0;
        }
        if (n == 1 || n == 2) {
            return n;
        }
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }

    public static void main(String[] args) {
        _70_ClimbingStairs climbingStairs = new _70_ClimbingStairs();
        int res = climbingStairs.climbStairs(3);
        System.out.println(res); // 3
    }
}
```

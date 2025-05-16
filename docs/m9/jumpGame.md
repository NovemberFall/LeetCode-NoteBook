## 55. Jump Game
![](img/2021-07-31-22-29-02.png)
---
### Analysis

- [请先看lc 45 的解释]()

![](img/2023-02-18-22-55-03.png)

```java
// Method 2: DP, canJump[i] means from index `0`, can jump to index i.
public class Solution2 {
    public boolean canJump(int[] nums) {
        int n = nums.length;
        boolean[] dp = new boolean[n];
        dp[0] = true;
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                // if index j is reachable from index 0, and from index j
                // it is possible to jump to index i.
                if (dp[j] && nums[j] + j >= i) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n - 1];
    }
}
```

---
```ruby
from right hand side to left hand side DP


index   0   1   2   3   4
A   =  [2   3   1   1   4]
                        <- 
m   =                   T


index   0   1   2   3   4
A   =  [2   3   1   1   4]
                        <- 
m   =               T   T


index   0   1   2   3   4
A   =  [2   3   1   1   4]
                        <- 
m   =           T   T   T


index   0   1   2   3   4
A   =  [2   3   1   1   4]
                        <- 
m   =       T   T   T   T


index   0   1   2   3   4
A   =  [2   3   1   1   4]
                        <- 
m   =   T   T   T   T   T
```

---

```py
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        dp = [False] * n
        dp[n - 1] = True
        for i in range(n - 2, -1, -1):
            dp[i] = any(dp[i + 1: min(i + nums[i] + 1, n)])
        return dp[0]
```
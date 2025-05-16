## 45. Jump Game II | Array Hopper II
![](img/2022-11-28-17-40-05.png)
---

### DP 

- 从终点往前推， 这其实也是一种 贪心 思维： 就是在可以到达终点的状态下，向前推算最小距离。
- [c14  **06:50**]
---
```ruby
        index   0   1   2   3   4
         A =   [2   3   1   1   4]
                                <-
         dp =                   0   # since we have already reached to last step, we don't need to jump


        index   0   1   2   3   4
         A =   [2   3   1   1   4]
                            <-
         dp =               1   0   # index =3, 看后面那个落脚点，只有1， max([i + 1, .. i + nums[i]]) + 1


        index   0   1   2   3   4
         A =   [2   3   1   1   4]
                        <-
         dp =           2   1   0   # 1 + 1 = 2


        index   0   1   2   3   4
         A =   [2   3   1   1   4]
                    <-
         dp =       1   2   1   0  # index = 1,  max([i + 1, ... i + nums[i]]) + 1


        index   0   1   2   3   4
         A =   [2   3   1   1   4]
                <-
         dp =   2   1   2   1   0  # index = 0, max([i + 1, ... i + nums[i]]) + 1

```

- dp[i]: represent the min numbers of jumps from i-th element to the last element
- dp[i] = 1 + min(dp[j]) where **i < j <= i + A[i]**

---

```py
class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [float('inf')] * n
        dp[n - 1] = 0
        for i in range(n - 2, -1, -1):
            # Try all jumps from i to i + nums[i]
            for j in range(i + 1, min(i + nums[i] + 1, n)):
                dp[i] = min(dp[i], dp[j] + 1)
        return dp[0]
```
---

### using `build-in` for optimal 

```py
class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [float('inf')] * n
        dp[n - 1] = 0
        for i in range(n - 2, -1, -1):
            # Try all jumps from i to i + nums[i]
            dp[i] = 1 + min(dp[i + 1: min(i + nums[i] + 1, n)], default=float('inf'))
        return dp[0]
```
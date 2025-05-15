## 188. Best Time to Buy and Sell Stock IV
![](img/2023-04-01-00-42-43.png)

---

### Top-Down Memoization DFS (solve it by meself 🎉)

```py
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        dp = [ [[-1 for _ in range(k + 1) ]for _ in range(2)] for _ in range(len(prices))]
        return self.dfs(prices, 1, k, dp, 0)
    
    def dfs(self, prices, is_buy, transactions_left, dp, index):
        if index >= len(prices):
            return 0
        if transactions_left == 0:
            return 0
        if dp[index][is_buy][transactions_left] != -1:
            return dp[index][is_buy][transactions_left]
        
        if is_buy:
            buy = -prices[index] + self.dfs(prices, 0, transactions_left, dp, index + 1)
            skip = 0 + self.dfs(prices, 1, transactions_left, dp, index + 1)
            dp[index][is_buy][transactions_left] = max(buy, skip)
        else:
            sell = prices[index] + self.dfs(prices, 1, transactions_left - 1, dp, index + 1)
            hold = 0 + self.dfs(prices, 0, transactions_left, dp, index + 1)
            dp[index][is_buy][transactions_left] = max(sell, hold)
        
        return dp[index][is_buy][transactions_left]
```

![](img/2025-03-06-14-31-02.png)

![](img/2025-03-06-14-31-49.png)
---

### Tabulation

```py
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        if k == 0 or n < 2:
            return 0
        if k >= n // 2:
            return self.greedy(prices)

        dp = [[[0] * 2 for _ in range(k + 1)] for _ in range(n + 1)]

        for j in range(0, k + 1):
            dp[0][j][1] = -float('inf')

        for i in range(1, n + 1):
            for j in range(1, k + 1):
                dp[i][j][1] = max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i - 1])
                dp[i][j][0] = max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1])
        return dp[n][k][0]

    def greedy(self, prices: List[int]) -> int:
        res = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                res += prices[i] - prices[i - 1]
        return res
```
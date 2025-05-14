## 122. Best Time to Buy and Sell Stock II
![](img/2023-03-30-17-08-27.png)
---

### Memoization

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        dp = [[-1 for _ in range(2)] for _ in range(len(prices))]
        return self.dfs(prices, 1, dp, 0)

    def dfs(self, prices, is_buy, dp, index) -> int:
        if index >= len(prices):
            return 0
        if dp[index][is_buy] != -1:
            return dp[index][is_buy]

        if is_buy:
            buy = -prices[index] + self.dfs(prices, 0, dp, index + 1)
            skip = self.dfs(prices, 1, dp, index + 1)
            dp[index][is_buy] = max(buy, skip)
            return dp[index][is_buy]
        else:
            sell = prices[index] + self.dfs(prices, 1, dp, index + 1)
            hold = self.dfs(prices, 0, dp, index + 1)
            dp[index][is_buy] = max(sell, hold)
            return dp[index][is_buy]
```

---
### bottom-up DP

- for each day
  - either 1. hold a share
  - or     2. not hold a share 

---
```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        # Handle the case of an empty price list
        if n == 0:
            return 0
        
        # dp[i][0]: max cash at the end of day i, not holding stock
        # dp[i][1]: max cash at the end of day i, holding stock
        # (0 for not holding, 1 for holding)
        dp = [[0] * 2 for _ in range(n)]

        # dp[0][0]: At the end of day 0, if not holding -> 0 cash (no transactions yet)
        dp[0][0] = 0
        # dp[0][1]: At the end of day 0, if holding -> bought on day 0 (cash is -prices[0])
        dp[0][1] = -prices[0]

        # Calculate the DP states for the current day 'i' based on the states of day 'i-1'
        for i in range(1, n):
            # Calculate dp[i][0]: Max cash at the end of day i, not holding stock
            # 1. Being not holding yesterday (dp[i-1][0]) and doing nothing today (skip).
            # 2. Being holding yesterday (dp[i-1][1]) and selling the stock today (+ prices[i]).
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])

            # Calculate dp[i][1]: Max cash at the end of day i, holding stock
            # 1. Being not holding yesterday (dp[i-1][0]) and buying a stock today (- prices[i]).
            # 2. Being holding yesterday (dp[i-1][1]) and continuing to hold the stock today.
            dp[i][1] = max(dp[i - 1][0] - prices[i], dp[i - 1][1])

        # The final answer is the maximum cash on hand at the end of the last day (index n-1),
        # when not holding stock (dp[n-1][0]), as this represents the total profit realized after all potential transactions.
        return dp[n - 1][0]
```
## 123. Best Time to Buy and Sell Stock III
![](img/2023-03-31-10-14-06.png)
---
### Memoization

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        # Initialize a 3D DP array with -1
        dp = [[[-1 for _ in range(3)] for _ in range(2)] for _ in range(n)]
        return self.dfs(prices, 1, 2, dp, 0)

    def dfs(self, prices, is_buy, transactions_left, dp, index) -> int:
        if index >= len(prices) or transactions_left == 0:
            return 0
        # if transactions_left == 0:
        #     return 0
        if dp[index][is_buy][transactions_left] != -1:
            return dp[index][is_buy][transactions_left]

        if is_buy:
            buy = -prices[index] + self.dfs(prices, 0, transactions_left, dp, index + 1)
            skip = self.dfs(prices, 1, transactions_left, dp, index + 1)
            dp[index][is_buy][transactions_left] = max(buy, skip)
        else:
            sell = prices[index] + self.dfs(prices, 1, transactions_left - 1, dp, index + 1)
            hold = self.dfs(prices, 0, transactions_left, dp, index + 1)
            dp[index][is_buy][transactions_left] = max(sell, hold)

        return dp[index][is_buy][transactions_left]
```
---

### Tabulation

```py

```


---
- **Only 2 transaction**


- for every day, `4` cases:
  - 1. has the first share **buy1**
  - 2. sell the first share **sell1**
  - 3. has the second share **buy2**
  - 4. sell the second share **sell2**
  - `buy1 = max(buy1, -prices[i])`
  - `sell1 = max(sell1, buy1 + prices[i])`
  - `buy2 = max(buy2, sell1 - prices[i])`
  - `sell2 = max(sell2, buy2 + prices[i])`
---

```java
class bestTimeToBuyAndSellStock_III_dp {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        if (n == 0) return 0;

        int buy1 = -prices[0];
        int sell1 = 0;
        int buy2 = -prices[0]; // 这里也必须是 -prices[0]
        int sell2 = 0;

        for (int i = 1; i < n; i++) {
            buy1 = Math.max(buy1, -prices[i]);
            sell1 = Math.max(sell1, buy1 + prices[i]);
            buy2 = Math.max(buy2, sell1 - prices[i]);
            sell2 = Math.max(sell2, buy2 + prices[i]);
        }

        return Math.max(sell1, sell2); // 这里为什么选择其中一个，因为题目最多要求at most 2 transactions
                                       // 也就是说，一次也可以
    }
}
```

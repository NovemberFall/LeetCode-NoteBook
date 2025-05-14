## Dynamic Programming

- [121. Best Time to Buy and Sell Stock](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/38477/bao-li-mei-ju-dong-tai-gui-hua-chai-fen-si-xiang-b/)

1. In dynamic programming problems, when constraints are involved, it's helpful to **add an extra dimension** to the DP array to represent those constraints for easier analysis. You must understand each constraint thoroughly and define a "constraint state" that can be used as the additional dimension in your DP table.

2. If you're **only allowed one transaction**, then when you're holding a stock, you're technically losing money because your cash decreases — so what you're tracking is the minimum cost (maximum loss). The profit is calculated by subtracting this minimum cost from the current price. If you consider this loss as negative profit, then the total profit becomes:
current price + (negative profit)
In DP terms, that's: dp[i-1][1] + prices[i].
If only one transaction is allowed, then dp[i-1][1] will be a negative number — the most negative (i.e., smallest) value so far.

3. If you're **not holding a stock today**, there are two possible scenarios:
   - You **sold a long time ago** and haven't traded since. You're near the "end" of your trading. In this case, today's state 
     (dp[i][0]) should consider dp[i-1][0] (i.e., continue not holding).
   - You're in the **middle of a trade cycle**. So for today to be a "not holding" state, it means you sold today, 
     hence yesterday you were holding: dp[i-1][1]

4. If you're **holding a stock today**, again two scenarios:
   - You've been **holding it for a long time**, so yesterday you were also holding — consider dp[i-1][1].
   - You're in the **middle of a new trade**, so you must have **bought today**, which means yesterday you were not holding: consider dp[i-1][0].


5. If you're allowed to do at most **k transactions**, then on each day when you calculate the max profit for holding or not holding a stock, you need to **iterate over all k possible transactions**. This lets you determine the max profit for **each day and each transaction count**, so that when you reach the final day, you can pick the best result across all scenarios.



- [原评论](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/38477/bao-li-mei-ju-dong-tai-gui-hua-chai-fen-si-xiang-b/#:~:text=1%E3%80%81%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92,%E5%88%A9%E6%B6%A6%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%82)

--- 


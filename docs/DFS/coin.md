## 322. Coin Change
![](img/2023-01-30-15-51-48.png)


```ruby
coins[1, 3, 4, 5]               Amount = 7


                                    [1, 3, 4, 5]
           1/                 3/               4\                   5\
           {6}                {4}               {3}                 {2}
       1/  3|  4\   5\                                       1/     3/    4\      5\
      {5}  {3}  {2}  {1}                                   {1}    {-1}   {-2}     {-3}
                      1|                                  1/
                      {0}                                {0} 


MinCoin = 3

#####################################################################################


                            [1, 3, 4, 5]
    1/                 3/               4\                        5\
    {6}                {4}               {3}                       {2}
                1/   3|  4\   5\                        1/     3/    4\      5\
               {5}  {3}   {0}  {1}                    {1}    {-1}   {-2}   {-3}
                                                     1/
                                                    {0} 

MinCoin = 2
```



![](img/2023-01-30-16-00-17.png)

- note: this is a repeated branch, so we need to cut

- For **DFS** approach, **TLE**


```java
class backtracking {
    public int coinChange(int[] coins, int amount) {
        int[] res = new int[1];
        res[0] = Integer.MAX_VALUE;
        Arrays.sort(coins);
        dfs(coins, amount, res, new ArrayList<>());
        return res[0] == Integer.MAX_VALUE ? -1 : res[0];
    }

    private void dfs(int[] coins, int amount, int[] res, List<Integer> list) {
        if (amount == 0) {
            res[0] = Math.min(res[0], list.size());
            return;
        }

        for (int i = 0; i < coins.length; i++) {
            if (amount < 0) {
                continue;
            }

            list.add(coins[i]);
            dfs(coins, amount - coins[i], res, list);
            list.remove(list.size() - 1);
        }
    }
}
```
---


#### Dynamic Programming

- [youtube | en](https://www.youtube.com/watch?v=H9bfqozjoqs)
- [youtube | cn](https://www.youtube.com/watch?v=KzkQMXpWSuA&t=463s)


![](img/2024-07-26-16-23-40.png)
![](img/2024-07-26-16-24-26.png)


```java
class _322_CoinChange {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;

        for (int amo = 1; amo <= amount; amo++) {
            for (int coin : coins) {
                if (amo < coin) {
                    continue;
                }
                dp[amo] = Math.min(dp[amo], dp[amo - coin] + 1);
            }
        }

        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }
}

```
---


### Python

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for a in range(1, amount + 1):
            for coin in coins:
                if a - coin >= 0:
                    dp[a] = min(dp[a], dp[a - coin] + 1)

        return dp[amount] if dp[amount] != amount + 1 else -1
```
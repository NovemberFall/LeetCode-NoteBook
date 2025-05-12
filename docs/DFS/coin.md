## 322. Coin Change
![](img/2023-01-30-15-51-48.png)
---

![](img/2023-01-30-16-00-17.png)

- note: this is a repeated branch, so we need to cut
---
## **DFS** approach, **TLE**


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
### Memorization 

```java
class memo {
    private int[] dp;
    public int coinChange(int[] coins, int amount) {
        // Initialize the dp array with size amount + 1
        // Index 0 will store the result for amount 0, up to index 'amount'
        dp = new int[amount + 1];
        if (amount < 1) {
            return 0;
        }
        return dfs(coins, amount);
    }

    private int dfs(int[] coins, int amount) {
        // Base Case 1: If remaining amount is negative, this path is invalid
        if (amount < 0) {
            return -1;
        }
        // Base Case 2: If remaining amount is 0, we found a valid combination
        if (amount == 0) {
            return 0;// We needed 0 additional coins to reach this state
        }
        if (dp[amount] != 0) {
            return dp[amount];
        }
        int min = Integer.MAX_VALUE;
        // Try each coin
        for (int coin : coins) {
            // Recursively find the minimum coins for the remaining amount after using the current coin
            int res = dfs(coins, amount - coin);
            if (res == -1) {
                continue;
            }
            // Update the minimum with 1 (for the current coin) + result from subproblem
            min = Math.min(min, 1 + res);
        }
        
        // Store the result: -1 if amount is unreachable, otherwise the minimum coins
        dp[amount] = (min == Integer.MAX_VALUE) ? -1 : min;
        return dp[amount];
    }
}
```


```py
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [None] * (amount + 1)
        return self.dfs(coins, dp, amount)

    def dfs(self, coins: List[int], dp: List[int], amount: int) -> int:
        if amount < 0:
            return -1

        if amount == 0:
            return 0

        if dp[amount] is not None:
            return dp[amount]

        min_count = float('inf')
        for coin in coins:
            res = self.dfs(coins, dp, amount - coin)
            if res >= 0 and res < min_count:
                min_count = res + 1
        dp[amount] = -1 if min_count == float('inf') else min_count
        return dp[amount]
```

---


## Tabulation

- [youtube | cn](https://www.youtube.com/watch?v=KzkQMXpWSuA&t=463s)


![](img/2024-07-26-16-23-40.png)
![](img/2024-07-26-16-24-26.png)


```java
class tabulation {
    public int coinChange(int[] coins, int amount) {
        // If amount is zero or less, no coins are needed.
        if (amount < 1) {
            return 0;
        }

        // dp[i] will store the minimum coins needed for amount i.
        int[] dp = new int[amount + 1];

        // Initialize dp array: fill with a large value
        // (amount + 1 works since it's impossible to need more than amount coins)
        Arrays.fill(dp, amount + 1);

        // base case: 0 coins needed for amount 0
        dp[0] = 0;

        // Iterate through each amount from 1 up to the target amount.
        for (int i = 1; i <= amount; i++) {
            // For each amount 'i', iterate through all available coin denominations.
            for (int coin : coins) {
                // If the current coin can be used to make change for amount 'i'
                // (i.e., if 'i' is greater than or equal to the coin value)
                if (i - coin >= 0) {
                    // We are trying to find the minimum coins for amount 'i'.
                    // One possibility is to use the current 'coin'.
                    // If we use 'coin', the remaining amount needed is 'i - coin'.
                    // The number of coins for this path is 1 (for the current 'coin') + dp[i - coin]
                    // (the minimum coins for the remaining amount).
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        // If dp[amount] is still the large initial value, it means the amount is unreachable.
        // Otherwise, it contains the minimum number of coins.
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```
---
![](img/2025-04-29-14-54-48.png)
![](img/2025-04-29-16-28-26.png)


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

## 583. Delete Operation for Two Strings
![](img/2023-04-02-14-33-40.png)

- refer to: `lc 72`,`lc 161`

---

### memorization

```py
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)

        @cache
        def dfs(i, j):
            if i < 0:
                return j + 1
            if j < 0:
                return i + 1
            if i < 0 and j < 0:
                return 0

            if word1[i] == word2[j]:
                return dfs(i - 1, j - 1)
            else:
                return min(dfs(i - 1, j), dfs(i, j - 1)) + 1

        return dfs(m - 1, n - 1)
```
---

### tabulation

```py
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        # dp[i][j] will store the minimum deletions needed to make
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]

        # Base cases:
        # To make word1[0...i-1] identical to an empty string (word2[0...-1]),
        # we must delete all i characters from word1.
        for i in range(1, m + 1):
            dp[i][0] = i

        # To make an empty string (word1[0...-1]) identical to word2[0...j-1],
        # we must delete all j characters from word2.
        for j in range(1, n + 1):
            dp[0][j] = j

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + 1
        return dp[m][n]
```
---

### Rolling Array

```py
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]

        for j in range(1, n + 1):
            dp[0][j] = j

        for i in range(1, m + 1):
            dp[i % 2][0] = i
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    dp[i % 2][j] = dp[(i - 1) % 2][j - 1]
                else:
                    dp[i % 2][j] = min(dp[(i - 1) % 2][j], dp[i % 2][j - 1]) + 1
        return dp[m % 2][n]
```
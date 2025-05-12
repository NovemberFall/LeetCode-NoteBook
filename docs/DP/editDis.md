## 72. Edit Distance

![](img/2021-08-18-00-53-05.png)
---
### 本题DFS 解法 TLE

![](img/2023-04-01-21-24-59.png)

- There are at most `m + n` levels in the recursion tree, and there are at most 3 branches
  in each node. Thus
  - Time = O(3^(m + n))

```java
class dfs_with_TLE {
    private String word1, word2;
    public int minDistance(String word1, String word2) {
        this.word1 = word1;
        this.word2 = word2;
        return dfs(0, 0);
    }

    private int dfs(int i, int j) {
        // Base cases: if one string is finished,
        // the cost is to insert/delete the rest of the other string
        if (i == word1.length()) {
            return word2.length() - j;  // insert remaining chars of word2
        }
        if (j == word2.length()) {
            return word1.length() - i;  // delete remaining chars of word1
        }

        // If the current characters match
        if (word1.charAt(i) == word2.charAt(j)) {
            // No operation needed for these matching characters.
            // The minimum distance is the distance of the remaining substrings.
            int nothing = dfs(i + 1, j + 1);
            return nothing;
        } else {
            // 1. Insert: Insert word2[j] into word1. This means we now need to match
            //    word1[i...end] with the rest of word2[j+1...end]. Cost is 1 + distance of remaining.
            int insert = 1 + dfs(i, j + 1);

            // 2. Delete: Delete word1[i]. This means we now need to match
            //    word1[i+1...end] with word2[j...end]. Cost is 1 + distance of remaining.
            int delete = 1 + dfs(i + 1, j);

            // 3. Replace: Replace word1[i] with word2[j]. This means we now need to match
            //    word1[i+1...end] with word2[j+1...end]. Cost is 1 + distance of remaining.
            int replace = 1 + dfs(i + 1, j + 1);

            return Math.min(insert, Math.min(delete, replace));
        }
    }
}
```
---
![](img/2025-04-26-15-20-59.png)


---

### Meorization DFS

```py
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        self.word1 = word1
        self.word2 = word2
        m, n = len(word1), len(word2)
        # dp[i][j] will store the minimum edit distance between word1[i:] and word2[j:]
        dp = [[-1 for _ in range(n + 1)] for _ in range(m + 1)]
        return self.dfs(dp, m, n, 0, 0)

    # i: current index in word1, j: current index in word2
    def dfs(self, dp, m, n, i, j):
        # Base case 1: If word1 is exhausted, insert remaining characters from word2
        if i == m:
            return n - j
        # Base case 2: If word2 is exhausted, delete remaining characters from word1
        if j == n:
            return m - i

        if dp[i][j] != -1:
            return dp[i][j]

        # If current characters match, no operation needed, move to the next pair
        if self.word1[i] == self.word2[j]:
            dp[i][j] = self.dfs(dp, m, n, i + 1, j + 1)
        else:
            # If characters don't match, consider three operations:
            # Insert: Insert char from word2 into word1 (match word1[i] with word2[j+1:])
            insert = 1 + self.dfs(dp, m, n, i, j + 1)
            # Delete: Delete char from word1 (match word1[i+1:] with word2[j:])
            delete = 1 + self.dfs(dp, m, n, i + 1, j)
            # Replace: Replace char in word1 with char from word2 (match word1[i+1:] with word2[j+1:])
            replace = 1 + self.dfs(dp, m, n, i + 1, j + 1)
            dp[i][j] = min(insert, delete, replace)
        return dp[i][j]
```

---
## Tabulation 

```java
class tabulation {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // --- Base Cases ---
        // 1. If word2 is empty (j=0), we need 'i' deletions to make word1 empty.
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        // 2. If word1 is empty (i=0), we need 'j' insertions to create word2.
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }

        // Iterate forwards through prefixes of word1 (length i)
        for (int i = 1; i <= m; i++) {
            // Iterate forwards through prefixes of word2 (length j)
            for (int j = 1; j <= n; j++) {
                // Compare the LAST characters of the current prefixes
                // (character at index i-1 in word1 and j-1 in word2)
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    // Cost if we inserted word2[j-1] into word1
                    int insert = dp[i][j - 1] + 1;

                    // Cost if we deleted word1[i-1] from word1
                    int delete = dp[i - 1][j] + 1;

                    // Cost if we replaced word1[i-1] with word2[j-1]
                    int replace = dp[i - 1][j - 1] + 1;

                    dp[i][j] = Math.min(Math.min(insert, delete), replace);
                }
            }
        }
        return dp[m][n];
    }
}
```


- T = O(m * n)
- Space = O(m * n)

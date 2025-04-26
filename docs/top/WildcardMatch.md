## 44. Wildcard Matching
![](img/2022-11-28-11-29-06.png)


- [video DP](https://youtu.be/3ZDZ-N0EPV0?t=316)

- Note: if `s = aa`, `p = "*b"` => `return false`

- Note: "*" represents **Matches any sequence of characters** (including the empty sequence).
  - if `s = "aa", p = "**"` => return **true**, thus we can **remove duplicate** `"*"` to make it easy to solve


---
### Memorization DFS

```java
class Solution {
    private Boolean[][] dp;

    public boolean isMatch(String s, String p) {
        // Keep the initialization style
        dp = new Boolean[s.length() + 1][p.length() + 1];
        // Keep the initial dfs call style
        return dfs(s, p);
    }

    // Keep the method signature and basic structure
    private boolean dfs(String s, String p) {
        int m = s.length();
        int n = p.length();

        // Keep memoization check style
        if (dp[m][n] != null) {
            return dp[m][n];
        }

        // Keep base case for empty pattern (logic is same for LC44)
        if (n == 0) {
            return dp[m][n] = (m == 0); // True only if s is also empty
        }

        // --- Main Logic Adapted for LC 44 ---
        // The main difference is how '*' works. It doesn't depend on p[1].
        // We check p.charAt(0) directly.

        // Case 1: Current pattern character p[0] is '*'
        if (p.charAt(0) == '*') {
            // Option 1: '*' matches zero characters in s.
            // Check if s matches the rest of the pattern p.substring(1).
            if (dfs(s, p.substring(1))) {
                // If skipping '*' leads to a match, return true.
                return dp[m][n] = true;
            }
            // Option 2: '*' matches one or more characters in s.
            // This requires s not to be empty (m > 0).
            // Check if the rest of s (s.substring(1)) matches the current pattern p
            // (we stay at '*' because it can match more).
            if (m > 0 && dfs(s.substring(1), p)) {
                // If matching one char in s and continuing works, return true.
                return dp[m][n] = true;
            }
            
            // If neither '*' option leads to a match.
            return dp[m][n] = false;

        } else {
            // Case 2: Current pattern character p[0] is NOT '*' (it's '?' or a letter)
            // This logic block resembles the non-'*' case from your LC10 code.

            // Check if the first characters match:
            // - s must not be empty (m > 0)
            // - EITHER p[0] is '?' (matches any char)
            // - OR p[0] is the same as s[0]
            if (m > 0 && (p.charAt(0) == '?' || p.charAt(0) == s.charAt(0))) {
                // If they match, the result depends on the rest of the strings.
                // Recursively call for s.substring(1) and p.substring(1).
                dp[m][n] = dfs(s.substring(1), p.substring(1));
                // Store and return the result of the recursive call.
                return dp[m][n];
            }

            // If s is empty OR the first characters don't match.
            return dp[m][n] = false; // Store and return false.
        }
    }
}
```

---

```java
class tabulation {
    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];

        // Base Case: Empty string vs Empty pattern
        dp[m][n] = true;
        for (int i = m; i >= 0; i--) {
            // Iterate through pattern p backwards (j = n-1 to 0)
            // We still need dp[...][n] which is handled by the base case dp[m][n]
            // and the default false for dp[i<m][n].
            for (int j = n - 1; j >= 0; j--) {
                if (p.charAt(j) == '*') {
                    // Option 1: '*' matches zero chars -> dp[i][j+1] (works even if i=m)
                    boolean matchZero = dp[i][j + 1];
                    // Option 2: '*' matches one or more chars -> dp[i+1][j]
                    // This requires i < m (string s must have chars left to match)
                    boolean matchOnePlus = (i < m) && dp[i + 1][j];
                    dp[i][j] = matchZero || matchOnePlus;

                } else { // pChar is '?' or a letter
                    // Match requires:
                    // 1. String s is not empty (i < m)
                    // 2. Pattern char matches string char ('?' or equal letters)
                    if (i < m && (p.charAt(j) == '?' || s.charAt(i) == p.charAt(j))) {
                        // If first chars match, result depends on the rest -> dp[i+1][j+1]
                        dp[i][j] = dp[i + 1][j + 1];
                    }
                    // else: If i == m OR first chars don't match, dp[i][j] remains false (default)
                }
            }
        }

        // Result for full string s[0:] vs full pattern p[0:]
        return dp[0][0];        
    }
}
```
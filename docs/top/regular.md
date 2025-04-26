## 10. Regular Expression Matching
![](img/2022-11-08-21-55-18.png)


- since **'*'** Matches zero or more of the preceding element.
    - thus, s = `ab` doesn't match to p = `a*`,   =>   `s = ab` compare to `p = aa`


- recursive method:

```java
class _10_RegularExpressionMatching {
    public boolean isMatch(String s, String p) {
        if (p.length() == 0) {
            return s.length() == 0;
        }
        //Note: "*b" is invalid!!!
        if (p.length() > 1 && p.charAt(1) == '*') {// second char is *
            if (isMatch(s, p.substring(2))) {
                return true;
            }
            if (s.length() > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
                return isMatch(s.substring(1), p);
            }
            return false;
        } else {                                    // second char is not *
            if (s.length() > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
                return isMatch(s.substring(1), p.substring(1));
            }
            return false;
        }
    }
}
```
---

### Memorization

```java
class Solution {
    private Boolean[][] dp;

    public boolean isMatch(String s, String p) {
        dp = new Boolean[s.length() + 1][p.length() + 1];
        return dfs(s, p);
    }

    private boolean dfs(String s, String p) {
        int m = s.length(), n = p.length();
        if (dp[m][n] != null) {
            return dp[m][n];
        }

        // Base case: if pattern is empty, string must also be empty
        if (n == 0) {
            return dp[m][n] = (m == n);
        }

        // If the second char in pattern is '*', we have two choices
        if (n > 1 && p.charAt(1) == '*') {
            // Option 1: Treat "x*" as empty (zero occurrences)
            if (dfs(s, p.substring(2))) {
                return dp[m][n] = true;
            }

            // Option 2: If s is not empty and first char matches, consume one char from s\
            // for Option2, look at the explanation under the codes
            if (m > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
                if (dfs(s.substring(1), p)) {
                    return dp[m][n] = true;
                }
            }

            // Neither option worked
            return dp[m][n] = false;
        } else {
            // Normal case: if current characters match or pattern has '.', move both pointers
            if (m > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
                dp[m][n] = dfs(s.substring(1), p.substring(1));
                return dp[m][n];
            }
            return dp[m][n] = false;
        }
    }
}
```


-  if s = `"aaaaaab"`, p = `"a*b"`, so `"a*"` can **consume** "aaaaaa"(remaining a **b**) and p is unchanged, right?
   -  Exactly right!
   -  Let a* consume all `'a'`s → so `s = "b"` remains
   -  Pattern is still at **"a*b"** (we haven’t moved past * yet)
   -  Then try `isMatch("b", "a*b")` again:
      -  "a" still matches → a* consumes nothing this time
      -  Move on: try isMatch("b", "b")
---

### Bottom-Up DP

```java
class tabulation_v1 {
    public boolean isMatch(String s, String p) {
        int m = s.length();
        int n = p.length();
        // Use boolean primitive, defaults to false
        boolean[][] dp = new boolean[m + 1][n + 1];

        // Base case: empty string matches empty pattern
        dp[m][n] = true;

        // Fill the table bottom-up
        // i = index in s (from end to start), j = index in p (from end to start)
        for (int i = m; i >= 0; i--) {
            // Start j from n-1 since dp[...][n] is handled by the base case or implicitly false,
            // except for dp[m][n].
            for (int j = n - 1; j >= 0; j--) {
                // Check if current characters match (only if s is not exhausted(耗尽) at index i)
                boolean first_match = (i < m && (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j)));

                // Check if the next pattern character is '*'
                if (j < n - 1 && p.charAt(j + 1) == '*') {
                    // If p[j+1] is '*':
                    // Option 1: Treat '*' as zero occurrences of p[j].
                    // Check if s[i:] matches p[j+2:] (equivalent to skipping p[j] and '*')
                    boolean match_zero = dp[i][j + 2];

                    // Option 2: Treat '*' as one or more occurrences of p[j].
                    // Requires current characters to match (first_match)
                    // AND s[i+1:] must match p[j:] (stay at p[j] due to '*')
                    boolean match_one_or_more = first_match && dp[i + 1][j];

                    dp[i][j] = match_zero || match_one_or_more;
                } else {
                    // Normal character match (no '*' following p[j])
                    // Check if current s[i] matches p[j] (and s is not exhausted)
                    dp[i][j] = first_match && dp[i + 1][j + 1];


                    // No else needed here: if the characters don't match,
                    // dp[i][j] remains default false, which is correct.
                }
            }
        }

        // The result is whether the full string s (from index 0) matches the full pattern p (from index 0)
        return dp[0][0];
    }
}
```
---

1. `dp[m][n]` corresponds to checking if `s.substring(m)` matches `p.substring(n)`. Since m is the length of s and n is the length of p, both 
   substring(m) and substring(n) represent empty strings ("").

2. for init **i = m**, **j = n - 1**, why?

![](img/2025-04-25-14-53-05.png)




---
## DP

- [video 5:38](https://www.youtube.com/watch?v=l3hda49XcDE&t=303s)


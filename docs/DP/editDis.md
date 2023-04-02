## 72. Edit Distance

![](img/2021-08-18-00-53-05.png)
---


## Analysis


```java
case0: 
if  s1[0] == s2[0]: 
            do nothing 


case1: replace
s1 = a -> s
s2 = s
M[1][1] => M[0][0] + 1

M[i][j] => M[i - 1][j - 1] + 1
因为实际上，你在这里 'a' -> 's', 's', 这里 'a', 's' 实际上就互相抵消掉了 


case2: delete
s1 = a -> ""    0
s2 = s          1
M[1][1] => M[0][1] + 1

M[i][j] => M[i - 1][j] + 1
  


case3: insert
s1 = a -> sa  其实对比的是 'a'      
s2 = s -> s              ' '
M[1][1] => M[1][0] + 1

M[i][j] => M[i][j - 1] + 1


Final Rule =>

M[i][j] = Math.min(M[i - 1][j - 1], M[i - 1][j], M[1][j - 1]) + 1


How to fill in the 2D M[i][j] matrix?


s2     |    s   g   h   j
size   | 0  1   2   3   4
--------------------------
s1   0 | 0  1   2   3   4
a    1 | 1  1   2   3   4
s    2 | 2  1   2   3   4
d    3 | 3  2   2   3   4
f    4 | 4  3   3   3   4 -> return
```

![](img/2021-08-18-09-27-43.png)


- T = O(m * n)
- Space = O(m * n)


```java
class EditDistance_dp {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 0; i < dp.length; i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j < dp[0].length; j++) {
            dp[0][j] = j;
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                char c1 = word1.charAt(i - 1);
                char c2 = word2.charAt(j - 1);

                if (c1 == c2) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j])) + 1;
                }
            }
        }
        return dp[m][n];
    }
}
```





---


## 本题DFS 解法

![](img/2023-04-01-21-24-59.png)

- There are at most `m + n` levels in the recursion tree, and there are at most 3 branches
  in each node. Thus
  - Time = O(3^(m + n))

```java
class EditDistance_dfs {
    public int minDistance(String word1, String word2) {
        // base case
        if (word1.isEmpty()) return word2.length();
        if (word2.isEmpty()) return word1.length();

        // a. Check what the distance is if the charaxters[0] are identical and we do nothing first
        if (word1.charAt(0) == word2.charAt(0)) {
            int nothing = minDistance(word1.substring(1), word2.substring(1));
            return nothing;
        }

        // b. chech what the distance is if we do a Replace first?
        int replace = 1 + minDistance(word1.substring(1), word2.substring(1));

        // c. check what the distance is if we do a Delete first?
        int delete = 1 + minDistance(word1.substring(1), word2);

        // d. chech what the distance is if we do a Insert first?
        int insert = 1 + minDistance(word1, word2.substring(1));

        return Math.min(delete, Math.min(replace, insert));
    }
}
```
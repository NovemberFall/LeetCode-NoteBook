## 279. Perfect Squares
![](img/2023-02-03-23-39-45.png)
---
![](img/2023-02-03-23-40-21.png)
![](img/2023-02-03-23-40-36.png)
---

```ruby
dp[0] = 0 
dp[1] = dp[0]+1 = 1
dp[2] = dp[1]+1 = 2
dp[3] = dp[2]+1 = 3
dp[4] = Min{ dp[4-1*1]+1, dp[4-2*2]+1 } 
      = Min{ dp[3]+1, dp[0]+1 } 
      = 1				
dp[5] = Min{ dp[5-1*1]+1, dp[5-2*2]+1 } 
      = Min{ dp[4]+1, dp[1]+1 } 
      = 2
						.
						.
						.
dp[13] = Min{ dp[13-1*1]+1, dp[13-2*2]+1, dp[13-3*3]+1 } 
       = Min{ dp[12]+1, dp[9]+1, dp[4]+1 } 
       = 2
						.
						.
						.
dp[n] = Min{ dp[n - i*i] + 1 },  n - i*i >=0 && i >= 1
``` 
---

- [中文教程](https://leetcode.cn/problems/perfect-squares/solution/dai-ma-sui-xiang-lu-279-wan-quan-ping-fa-9ieo/)

![](img/2023-02-04-22-17-39.png)

---
```java
public class _279_PerfectSquares {
    public int numSquares(int n) {
        if (n == 0) {
            return 0;
        }
        int[] dp = new int[n + 1];
        dp[0] = 0;
        for (int i = 1; i <= n; i++) {
            dp[i] = i;
            for (int j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }

    public static void main(String[] args) {
        _279_PerfectSquares perfectSquares = new _279_PerfectSquares();
        int res = perfectSquares.numSquares(5);
        System.out.println(res); // 2
    }
}
```
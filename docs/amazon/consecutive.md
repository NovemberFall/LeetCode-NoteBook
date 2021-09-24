## 829. Consecutive Numbers Sum

- Given an integer `n`, return the number of ways you can write `n` as the sum of 
  consecutive positive integers.
![](img/2021-09-23-12-30-47.png)
---

### Brute Force

- We enumerate the starting value start of consecutive positive integers and 
  accumulate until the result is greater than or equal to N. If the result is 
  exactly equal to N, we have found one of this set of answers.
  - For example, when `N = 6`, if the starting value is `1`, we will add up to 
    `1 + 2 + 3 = 6`, and get a set of answers; if the starting value is `2`, we 
    will add up to `2 + 3 + 4 = 9`, which `exceeds 6`. And so on, until the 
    starting value `greater than N`.


```java
class Solution {
    public int consecutiveNumbersSum(int n) {
        int ans = 0;
        for (int start = 1; start <= n; i++) {
            int target = n;
            int x = start;

            while (target > 0) {
                target -= x;
                x++;
            }

            if (target == 0) {
                ans++;
            }
        }
        return ans;
    }
}
```
---
![](img/2021-09-23-17-39-13.png)

```ruby
x + x+1 + x+2 ... + x+m-1 = N

按照公式： Sn = (a1 + an) * n / 2
         N =  (x+x+m-1) / 2 
         
```

- set the consecutive positive number named `a`, set the numbers as `k`
-  N = k * (2a + k - 1) / 2

## 509. Fibonacci Number
![](img/2023-01-04-01-21-15.png)

```java
class Solution {
    public int fib(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }
        
        return fib(n - 1) + fib(n - 2);
    }
}
```
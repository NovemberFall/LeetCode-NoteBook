## 509. Fibonacci Number

![](img/2021-06-11-00-00-28.png)

![](img/2021-06-14-03-09-36.png)

![](img/2021-06-14-03-10-04.png)

```java
class Solution {
    public int fib(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        return fib(n - 1) + fib(n - 2);
    }
}
```
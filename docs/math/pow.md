## 50. Pow(x, n)
![](img/2023-01-04-01-31-06.png)
---
```java
class Pow {
    public double myPow(double x, int n) {
        if (n < 0) {
            return 1.0 / recursion(x, -n);
        }

        return recursion(x, n);
    }

    private double recursion(double x, int n) {
        if (n == 0) {
            return 1.0;
        }

        double half = recursion(x, n / 2);
        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
}
```
---
```java
class Solution {
    private double helpPow(double x, long N){
        if(N == 0){
            return 1.0;
        }
        double temp = helpPow(x, N/2);
        return (N % 2 == 0)? (temp * temp) : (temp * temp * x);
    }
    
    public double myPow(double x, int n) {
        //to avoid integer overflow, cast int to long
        long N = n;
        if(N < 0){
           x = 1 / x;   // if N is negative, x = 1/x 直接转换成倒数
           N = -N;      // convert N to be postive, since x already = 1/x
        }
        
        return helpPow(x, N);
        //we need to write a helper function , since myPow(double x, int n)
        //we can not assign Long to int   int n != Long N, 精度只有从低往高走！
    }
}
```
---
### Brute Force
```java
class Pow_BruteForce {
    public double myPow(double x, int n) {
        if (n == 0) {
            return 1.0;
        }
        if (n < 0) {
            return 1.0 / myPow(x, -n);
        }

        return x * myPow(x, n - 1);
    }

    public static void main(String[] args) {
        Pow_BruteForce pow_bruteForce = new Pow_BruteForce();
        double res = pow_bruteForce.myPow(2.1, 3);
        System.out.println(res); // 9.2610

        res = pow_bruteForce.myPow(2.0, -2);
        System.out.println(res); // 0.25
    }
}
```

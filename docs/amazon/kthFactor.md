## 1492. The kth Factor of n

![](img/2022-04-19-13-58-53.png)

```ruby
Let's assume n is 12. The divisors of n are: {1, 2, 3, 4, 6, 12}. 
now look at them from another angle:

1 * 12 = 12
2 * 6 = 12
3 * 4 = 12

If i is a divisor of n, then n / i is a divisor of n as well. 
Consequently, we can find all the divisors of n only by 
rocessing the numbers that are smaller or equal to the square root of n.


Long Explanation:
Let's divide all the divisors of n into 2 parts:

1. divisors smaller than the square root of n
2. divisors bigger than the square root of n.

Note: There's an edge case when the square root of n is an integer 
            (for example when n is 9 or 16) which we'll discuss later.

FIrst for loop:
We start at 1 and check every number to see whether or not it's a divisor of n. 
If it is, we deduct one from k 
            (because we found one of the k divisors we were looking for). 
Then continue until we reach the square root of n.  
If during this process k becomes 0, it means that 
        we have successfully found the first k divisors of n. 
        So we can jump for joy, cheer loudly, and return the current number.


```
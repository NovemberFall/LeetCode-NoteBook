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
We start at 1 and check every number to see whether or 
not it's a divisor of n. If it is, we deduct one from k 
            (because we found one of the k divisors we were looking for). 
Then continue until we reach the square root of n.  
If during this process k becomes 0, it means that 
      we have successfully found the first k divisors of n. 
      So we can jump for joy, cheer loudly, and return the current number.


Second for loop

Otherwise, we will continue from the square root of n and go down to 1. 
However, this time, instead of checking if the current number (i) 
is a divisor of n (something that we have already checked), 
                we check if n/i is a divisor of n. If k becomes zero, 
                we do what we are supposed to do. 

Note for person who will comment: "n % i == 0 and n % (n/i) == 0 
        has the same results." I know :) but it's easier to understand.


Edge case

When the square root of n is an integer. We want to make sure that, 
on the one hand, we don't forget to count it, 
and on the other hand we don't count it twice.

Here's the trick: we don't count it 
                        in the first for loop: i < Math.sqrt(n).

For the second for loop we start from: int i = (int) Math.sqrt(n).
If the square root of n is an integer, i will be the square root. 
For example, if n is 9, i will start from 3. 
        Otherwise, it will be floored to the first integer. 
        For example, if n is 8, the square root is 2.8 so i will be 2 


Really?

If after all those efforts k is still bigger than zero, 
we return -1 after cursing.
```

---

- brute force:

```java
class Solution {
    public int kthFactor(int n, int k) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }           
            if (count == k) {
                return i;
            }
        }
        return -1;
    }
}
```

---


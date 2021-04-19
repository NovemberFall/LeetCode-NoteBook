## Combinations Of Coins

```ruby
Given a number of different denominations of coins (e.g., 1 cent, 5 cents, 10 cents, 25 cents), 
get all the possible ways to pay a target number of cents.


Arguments

coins - an array of positive integers representing the different denominations of coins, 
there are no duplicate numbers and the numbers are sorted by descending order, 
eg. {25, 10, 5, 2, 1}

target - a non-negative integer representing the target number of cents, eg. 99


Assumptions:

coins is not null and is not empty, all the numbers in coins are positive
target >= 0
You have infinite number of coins for each of the denominations, 
you can pick any number of the coins.


Return

a list of ways of combinations of coins to sum up to be target.
each way of combinations is represented by list of integer, 
the number at each index means the number of coins used for the denomination 
at corresponding index.
```

---

- what does it store on each level?
  - 4 levels, and for each level, we consider one coin value
- How many different states should we try to put on this level?

```ruby
level 0:                                   root(99)

                    /                 |             |                   \
level1(25 cent)  0*25(remain=99)   1*25(rem=74)   2*25(rem=49)   3*25(rem=24)

                    / ||| ||||| \                      /|||\  
level2(10 cent)  0*10(rem=99),... 9*10(rem=9)      0*10(rem=49)...4*10(rem=9)


level3(5 cent)  0*5(rem=99), ... 19*5(rem=4)


level4(1 cent)   0*1(99), 1*1(98), 2*1(97)...99*1(rem=0)


 Summary: 一共四层， 每一层按最后一层做多叉出来99个叉的upper bound计算，就是 99 * 99 * 99 * 99

 Because there are 4 levels, and each level has AT MOST 99 branches.

 Time = O(99^4)
```

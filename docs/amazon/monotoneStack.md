## 907. Sum of Subarray Minimums

![](img/2022-04-18-17-57-06.png)

---

- [youtube](https://leetcode.com/problems/sum-of-subarray-minimums/discuss/4595335/Beats-100-C%2B%2BJavaPythonJS-Explained-with-Video-Monotonic-Stack)

```ruby
        [2, 9, 7, 8, 3, 4, 6, 1]
                     |
the previous less       the next less 
element of 3          element of 3

After finding both NLE and PLE of 3, we can determine the
distance between 3 and 2(previous less) , 
and the distance between 3 and 1(next less).
In this example, the distance is 4 and 3 respectively.
```

---

```ruby
X   0   [3   2   4   5]   1   X   X
             ^
      2 * 3 = 6, # 2 -> 3 , distance = 2
                 # 2 -> 5, distance = 3
      that means there are total 6 subarrays which minimum is 2
      
     result += 2 * 6
            += 4 * ?   # minimum is 4
            += 5 * ?   # minimum is 5

总之，盯准一个数，寻找他的所有subarray # 但是这样做，还是 o(N^2)

prev smaller element # 从左往右扫
next smaller element # 从右往左扫


corner case:
    2   [8   5   6   7   5   6]  2
             ^    # 这里5会被扫两次, 如果不只2个5，比如：3 个 5


所以我们约定:
    2   8   5   [6   5   7   5   6]  2
                     ^
    nums[i]:    next smaller element
                previous smaller or equal element
```
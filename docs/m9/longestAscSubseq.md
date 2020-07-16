# 300. Longest Increasing Subsequence

```ruby
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n^2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?
```

- 首先来看， Subsequence, 意思可以不连续，不是substring, 可以jump char.
  - 所以看此题前，我们先来看下 [674. Longest Continuous Increasing Subsequence | Longest Ascending SubArray](m9/longestSubarray.md)


- 回到本题：

```ruby
approach: (liner scan && look back)

index    0   1   2   3   4   5   6   7
input = {7   2   3   1   5   8   9   6 }           
M[i]     1   1   2   1   3   4   5   4

1. Base Case dp[0] = 1
2. Induction rule:
    a. dp[i] represents what? [from the 0-th index to the i-th index] the length of
    the longest increasing subsequence, ended at the i-th index,(must include i-th 
    index)
    b. dp[i] = 1 + max[M[j]]          where input[j] < input[i]
                   0 <= j < i

Time = O(n^2)
```




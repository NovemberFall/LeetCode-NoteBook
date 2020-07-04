# 45. Jump Game II | Array Hopper II

```ruby
Given an array of non-negative integers, 
you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.


Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
```


## 本题Dp 解法：

- Minimum Jumps to reach end
  - Dynamic Programming

```ruby
Array   [2   3   1   1   4]
         0   1   2   3   4

at most 2 places: means you can jump index0 -> index1   OR:   index0 -> index1 -> index2


Minimum Jumps Array  [2   3   X   1   4]
                      0   1   2   3   4

X : means the minimum number of jumps 

For every i, j start from 0
         
             i
Array   [2   3   1   1   4]

i is from index 1, because for minimum jumps array [ 0                 ]
                                                     0   1   2   3   4
there is no jump needed at index 0


                      j   i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

j jumps to i, only 1 jump
 Minimum Jumps Array [0   1            ]
                      0   1   2   3   4    



                      j       i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

j jumps to i, only 1 jump
 Minimum Jumps Array [0   1   1        ]
                      0   1   2   3   4    

increasing j++
                          j   i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

j from index0 -> index1; j from index1 to index2 only 1 jump
go via index1, so path(0 => 1 => 2), then 2 jumps needed, min(min_jump[i], min_jump[j] + 1)
 Minimum Jumps Array [0   1   1        ]
                      0   1   2   3   4    


increasing i++
                      j           i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 0, but can not reach to i, is not in range
 Minimum Jumps Array [0   1   1        ]
                      0   1   2   3   4    

increasing j++
                          j       i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 1, can reach to i, j from 0 -> 1, 1 -> i needed 2 jump
 Minimum Jumps Array [0   1   1   2    ]
                      0   1   2   3   4    


increasing j++
                              j   i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 1, can reach to i, j from 0 -> 2, 2 -> i needed 2 jumps
call  min(min_jump[i], min_jump[j] + 1) == 2
 Minimum Jumps Array [0   1   1   2    ]
                      0   1   2   3   4
                      

increasing i++
                      j               i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 0, but can not reach to i, is not in range
 Minimum Jumps Array [0   1   1   2    ]
                      0   1   2   3   4


increasing j++
                          j           i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 1, can reach to i, j from 0 -> 1, 1 -> 4 needed 2 jumps
 Minimum Jumps Array [0   1   1   2   2]
                      0   1   2   3   4


increasing j++
                              j       i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 2, but can not reach to i, is not in range
 Minimum Jumps Array [0   1   1   2   2]
                      0   1   2   3   4


increasing j++
                                  j   i
Array                [2   3   1   1   4]
                      0   1   2   3   4 

now j is from index 3, can reach to i, j from 0 -> 3, 3 -> 4 needed 3 jumps
call  min(min_jump[i], min_jump[j] + 1) == 2
 Minimum Jumps Array [0   1   1   2   2]
                      0   1   2   3   4

```

- [youtube video](https://www.youtube.com/watch?v=jH_5ypQggWg)


```java
class Solution {
    public int jump(int[] nums) {
        if(nums == null || nums.length == 0){
          return -1;
        }
        int[]dp_min_jump = new int[nums.length];
        dp_min_jump[0] = 0;
        for(int i = 1; i < nums.length; i++){
          dp_min_jump[i] = Integer.MAX_VALUE;
          for(int j = 0; j < i; j++){
            if(dp_min_jump[j] != Integer.MAX_VALUE && j + nums[j] >= i){
              dp_min_jump[i] = Math.min(dp_min_jump[j] + 1, dp_min_jump[i]);
            }
          }
        }
        return dp_min_jump[nums.length - 1] == Integer.MAX_VALUE ? -1 : dp_min_jump[nums.length - 1];
     }          
}
```
---


## Greedy 解法, 本题只有greedy 解法可以通过leetCode, running time

- In this problem, we are asked to find the minimum steps to jump to the last element in the given 
  integer array nums. Note that we do NOT have to jump the exact jump length represented in nums[i] 
  while jumping at position i. In other words, we can make a jump length less than the number in 
  nums[i].

- 此题的核心方法是利用贪婪算法 Greedy 的思想来解，想想为什么呢？ 为了较快的跳到末尾，想知道每一步能跳的范围，这里贪婪并
  不是要在能跳的范围中选跳力最远的那个位置，因为这样选下来不一定是最优解，这么一说感觉又有点不像贪婪算法了。其实这里贪的是
  一个能到达的最远范围，遍历当前跳跃能到的所有位置，然后根据该位置上的跳力来预测下一步能跳到的最远距离，贪出一个最远的范
  围，一旦当这个范围到达末尾时，当前所用的步数一定是最小步数。


```java
[2, 3, 1, 1, 4]
i    nums[i]   jump     cur   next
-      -         0       0     0
0      2         0       0     2
1      3         1       2     4
2      1         1       2     4
3      1         2       4     4
4      4         2       4     8
```



```java
class Solution {
    public int jump(int[] nums) {
        if(nums.length <= 1){
            return 0;
        }
        int jump = 0;
        int cur = 0;
        int next = 0;
        for(int i = 0; i < nums.length; i++){
            if(cur < i){
                jump++;
                cur = next;
            }
            next = Math.max(next, nums[i] + i);
        }
        return jump;
     }        
}
```
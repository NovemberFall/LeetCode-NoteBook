# 55. Jump Game

```ruby
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

 

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0,
which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 3 * 10^4
0 <= nums[i][j] <= 10^5
```

## Analysis

```ruby
from left hand side to right hand side DP

index   0   1   2   3   4
A   =  [2   3   1   1   4]

                        ->
m   =   T   T   T   T   T


Base case: M[0] = true
Induction rule: M[i] represents whether I can reach index i from the start.
M[i] = true   if there exists a j where j < i, M[j] == true AND j + A[j] >= i
Return M[length - 1]
Time = O(n^2)



Counter-example:

index   0   1   2   3   4
a   =  [3   2   1   0   4]

assume i == 1 :
j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, => jump[i==1] = true;

assume i == 2 :
j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, => jump[i==2] = true;

assume i == 3 :
j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, -> j++ == 2
j == 2, if jump[2] == true, AND a[j]==1 + 0 >= i, 

assume i == 4 :
j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, -> j++ == 2
j == 2, if jump[2] == true, AND a[j]==1 + 0 >= i, -> j++ == 3
j == 3, if jump[3] == false, 
return => jump[array.length - 1] == jump[3] == false
```



```java
class Solution {
    public boolean canJump(int[] nums) {
        if(nums == null || nums.length == 0){
            return true;
        }
        
        boolean[] jump = new boolean[nums.length];
        jump[0] = true;
        for(int i = 1; i < nums.length; i++){
            for(int j = 0; j < i; j++){
                if(jump[j] && nums[j] + j >= i){
                    jump[i] = true;
                    break;
                }
            }
        }
        return jump[nums.length - 1];
    }
}
```







---

## 更优解：

```java
class Solution {
    public boolean canJump(int[] nums) {
        if(nums == null || nums.length == 0){
            return true;
        }
        int max = 0;
        for(int i = 0; i < nums.length; i++){
            if(i > max){
                return false;
            }
            max = Math.max(nums[i] + i, max);
        }
        
        return true;
    }
}

```


- 核心思想： Array[i] + currentIndex >= currentIndex;
- 否则如何跳到最后呢？ 😂
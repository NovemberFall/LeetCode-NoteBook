# 674. Longest Continuous Increasing Subsequence

```ruby
Given an unsorted array of integers, 
find the length of longest continuous increasing subsequence (subarray).

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, 
it's not a continuous one where 5 and 7 are separated by 4. 

Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
```



## Analysis:

![](img/2020-06-06-02-12-40.png)

- Time O(n)
- Space = O(n) -> 0(1) if we can optimize it



## Ans:

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        if(nums == null || nums.length == 0){
            return 0;
        }
        //dp[i] = 1     (array[i] <= array[i - 1])
        //dp[i] = dp[i - 1] + 1       (array[i] > array[i - 1])
        //so we can make the space consumption more efficient by only
        //recording the latest dp[i]
        int cur = 1;
        int result = 1;
        for(int i = 1; i < nums.length; i++){
            if(nums[i] > nums[i - 1]){
                //the second case, we can update dp[i]
                cur++;
                result = Math.max(cur, result);
            }else{
                //the first case, we need to reset dp[i]
                cur = 1;
            }
        }
        return result;
    }
}
```
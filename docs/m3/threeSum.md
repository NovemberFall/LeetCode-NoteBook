## 15. 3Sum
![](img/2021-08-09-17-18-30.png)

![](img/2021-08-09-17-19-38.png)





```java
/*
  -1   3   2  -4  -1  -4  3
  -4  -4  -1  -1   2   3  3  //sort
  
  -4  -4  -1  -1   2   3  3  
   i  
       l                  r

  -4  -4  -1  -1   2   3  3  
   i  
                   l      r

  -4  -4  -1  -1   2   3  3  
   i  
                   l   r

  -4  -4  -1  -1   2   3  3  
   i  
                   lr

  -4  -4  -1  -1   2   3  3  
       i    

  -4  -4  -1  -1   2   3  3  
           i                // since -4 == -4, skip

  -4  -4  -1  -1   2   3  3  
           i               
               l          r   // -1 + (-1) + 3 > 0

  -4  -4  -1  -1   2   3  3  
           i               
               l   r        
               
   [-1 -1  2] should be the ans               
*/
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        int target = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;//skip same result
            }
            int left = i + 1;
            int right = nums.length - 1;
            while (left < right) {
                if (nums[i]+nums[left]+nums[right] == target) {
                    res.add(Arrays.asList(nums[i],nums[left],nums[right]));
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;//skip same result
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;//skip same result
                    }                    
                } else if (nums[i]+nums[left]+nums[right] < target) {
                    left++;               
                } else {
                    right--;                   
                }
            }
        }
        return res;
    }
}
```
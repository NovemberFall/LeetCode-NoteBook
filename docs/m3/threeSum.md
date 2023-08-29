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
        if (nums == null || nums.length == 0) return res;
        int n = nums.length;
        Arrays.sort(nums);
        for (int first = 0; first < n - 2; first++) {
            if (first > 0 && nums[first] == nums[first - 1]) {
                continue;
            }
            int second = first + 1;
            int third = n - 1;
            while (second < third) {
                int curSum = nums[first] + nums[second] + nums[third];
                if (curSum == 0) {
                    res.add(Arrays.asList(nums[first], nums[second], nums[third]));
                    second++;
                    third--;
                    while (second < third && nums[second] == nums[second - 1]) {
                        second++;
                    }
                    while (second < third && nums[third] == nums[third + 1]) {
                        third--;
                    }
                } else if (curSum < 0) {
                    second++;
                } else {
                    third--;
                }
            }
        }
        return res;
    }
}
```

---

## HashSet

```java
class _15_3Sum_Set {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>> res = new HashSet<>();
        int n = nums.length;
        Arrays.sort(nums);
        for (int first = 0; first < n - 2; first++) {
            if (first > 0 && nums[first] == nums[first - 1]) {
                continue;
            }
            int second = first + 1;
            int third = n - 1;
            while (second < third) {
                int curSum = nums[first] + nums[second] + nums[third];
                if (curSum == 0) {
                    res.add(Arrays.asList(nums[first], nums[second++], nums[third--]));
                } else if (curSum > 0) {
                    third--;
                } else {
                    second++;
                }
            }
        }
        return new ArrayList<>(res);
    }
}
```
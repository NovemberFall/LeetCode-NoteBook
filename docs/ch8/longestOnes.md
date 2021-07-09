## 485. Max Consecutive Ones | Longest Consecutive 1s

- Given a binary array, find the maximum number of consecutive 1s in this array.

- Example 1:
  Input: [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s.
  The maximum number of consecutive 1s is 3.

- Note:
  The input array will only contain 0 and 1.
  The length of input array is a positive integer and will not exceed 10,000



## Analysis:

```ruby
M[i] represents the longest contiguous 1s 
from the 0-th element to the i-th element 
(including the i-th element).

Base case: M[0] = Array[0]
Induction rule:

M[i] = M[i - 1] + 1                 if Array[i] == 1
        0                           otherwise
```



```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null || nums.lnegth == 0) {
            return 0;
        }
        int count = 0;
        int globalMax = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                count++;
            } else {
                count = 0;
            }
            globalMax = Math.max(globalMax, count);
        }
        return globalMax;
    }
}
```
# 283. Move Zeroes

```ruby
Given an array nums, write a function to move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.
```

---

## Analysis:

- [reference -> Move 0s To The End](https://novemberfall.github.io/LeetCode-NoteBook/#/ch1/move0toEnd)
- [reference -> Move 0s To The End II](https://novemberfall.github.io/LeetCode-NoteBook/#/ch1/move0toEnd2)

```ruby
[0      1       0       3       12]
i++
1       
        i++
        3       
                i++
                12
                        i++
                        0       
                                i++
                                0
```



---

```java
class Solution {
    public void moveZeroes(int[] nums) {
        if(nums == null || nums.length == 0){
            return;
        }
        int insertPos = 0;
        for(int num : nums){
            if(num != 0){
                nums[insertPos++] = num;
            }
        }
        while(insertPos < nums.length){
            nums[insertPos++] = 0;
        }
    }
}
```
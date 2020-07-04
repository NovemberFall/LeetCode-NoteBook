# 2. 3 Sum

- Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero.

- Example:

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
---

## Explain:

1. make sure this array is a sorted array, so we call `Arrays.sort()`

2. We try to traverse this array:

  0     1     2     3     4     5 
---   

[-1     0     1     2    -1    -4]

3. exclude nums[i] != nums[i - 1]

4. low index we use `low = i + 1`

5. high index we use `high = nums.length - 1`

6. make sure `the other two numbers's sum + nums[i] = 0`, we make use: 

```java
nums[i] + (nums[low] + numse[high]) = 0
=> nums[i] = -(nums[low] + numse[high])
=> sum = 0 - nums[i]  //if nums[i] is +, sum => -; if nums[i] is -, sum => +
```

7. while low < high, we begin to traverse:

8. if `(nums[low] + numse[high]) == sum`, then meas we find out the target

9. call the list to push this array

10. if duplicate elment occurs, we let `low index += 1` , else `high index -= 1`

11. update high++ and low--


- my ans:

```java
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * 3Sum
 */
public class Three_sum {
    private static List<List<Integer>> threeSum(int[] nums) {
            Arrays.sort(nums);
            List<List<Integer>> res_arr = new LinkedList<>();
            for(int i=0; i<nums.length; i++){
                if(i == 0 || (i >0 && nums[i] != nums[i-1])){
                    int low = i + 1;
                    int high = nums.length - 1;
                    int sum = 0 - nums[i];
                    while(low < high){
                        if(nums[low] + nums[high] == sum){
                            res_arr.add(Arrays.asList(nums[i], nums[low], nums[high]));
                            while(low < high && nums[low] == nums[low + 1]){
                                low++;
                            }
                            while(low < high && nums[high] == nums[high - 1]){
                                high--;
                            }
                            low++;
                            high--;
                        }else if(nums[low] + nums[high] < sum){
                            low++;
                        }else{
                            high--;
                        }
                    }
                }  
            }
            return res_arr;
    }

    public static void main(String[] args) {
        List<List<Integer>> list = new LinkedList<>();
        int[] myArray = new int[]{-1, 0, 1, 2, -1, -4};
        list = threeSum(myArray);
        System.out.println(list);
    }
}
```
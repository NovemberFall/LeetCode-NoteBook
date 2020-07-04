# 34. First&LastPositionElementInSortedArr

```js
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].


Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

## Analysis:

#### First Occurrence

- https://novemberfall.github.io/Algorithm-FullStack/ch2/firstOccurrence.html


#### Last Occurrence

- https://novemberfall.github.io/Algorithm-FullStack/ch2/lastOccurrence.html


```java
// 34. Find First and Last Position of Element in Sorted Array

import java.util.Arrays;

public class FindFirstLastPositionElementInSortedArray {
    public static int[] searchRange(int[] nums, int target) {
        if(nums == null || nums.length == 0){
            return new int[]{-1, -1};
        }

        int [] temp = new int[2];
        temp[0] = firstOccurrence(nums, target);
        temp[1] = lastOccurrence(nums, target);

        return temp;
    }

    private static int firstOccurrence(int[] nums, int target){
        int left = 0;
        int right = nums.length - 1;
        while(left < right - 1){// l = r - 1, stop;
            int mid = (left + right) / 2;
            if(nums[mid] >= target){//array[mid] >= target,
                right = mid;
            }else{
                left = mid;
            }
        }
        //post processing
        if(nums[left] == target){
            return left;
        }else if(nums[right] == target){
            return right;
        }else{
            return -1;
        }
    }

    private static int lastOccurrence(int[] nums, int target){
        int left = 0;
        int right = nums.length - 1;
        while(left < right - 1){
            int mid = (left + right) / 2;
            if(nums[mid] <= target){
                left = mid;
            }else{
                right = mid;
            }
        }

        //post processing
        if(nums[right] == target){
            return right;
        }else if(nums[left] == target){
            return left;
        }else{
            return -1;
        }
    }

    public static void main(String[] args) {
        int[] nums = new int[]{5,7,7,8,8,10};
        int[] temp = new int[2];
        temp = searchRange(nums, 8);
        System.out.println(Arrays.toString(temp));
        temp = searchRange(nums, 6);
        System.out.println(Arrays.toString(temp));
    }
}

```


## Analysis:

![](img/2020-06-02-22-33-33.png)

- Note: ` while(left < right - 1)`  // l = r - 1, stop;
- 如果这里改成 `while(left < right)`
- 将无限循环下去:
  - 因为 初始化 left == 0, right == 4   => 那么 mid = (0 + 4) / 2 = 2
  - since `array[mid] == 5 < target` => `left = mid = 2`
  - then, `left == 2, right == 4`   => 那么 mid = (2 + 4) / 2 = 3
  - `(array[3] == 6 ) >= target` => `right == 3`
  - 这样 right 就被更新成了 right == 3
  - 这样 `while(left < right)` => mid = (2 + 3) / 2 = 2
  - `array[mid] == array[2] = 5` => `left == mid == 2`
  - 这样无限循环 `(2 + 3) / 2 == 2` 
  - 所以让 ` while(left < right - 1)` 就可以跳出循环

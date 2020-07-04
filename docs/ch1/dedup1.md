# 26. Remove Duplicates from Sorted Array | Array Deduplication I

```ruby
Given a sorted array nums, remove the duplicates in-place such that each element appear only once 
and return the new length.

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.


Example 1:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, 
with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```


- 用两个变量，一个变量记录当前指针的位置(= fast index), 一个变量记录隔板位置(= slow index)
  - 物理意义： slow 隔板左边是处理好的元素，当前指针fast 右边是未处理的元素，隔板slow和当前指针fast之间的区域是无用元素
  - 处理完毕之后，return 结果中，每个integer/char的相对应的位置不变



```js

1   1   2   2   3
    f->
    s->          //since arr[f] == arr[s],  f++;


1   1   2   2   3
        f->
    s->          


1   1   2   2   3
        f->
    s->          //since arr[f] != arr[s],  copy arr[f] to arr[s]
                 //then, s++;


1   2   2   2   3
        f->
        s->      //then, loop => f++    


1   2   2   2   3
            f->
        s->      //since arr[f] == arr[s],  f++;


1   2   2   2   3
                f->
        s->      //since arr[f] != arr[s],  copy arr[f] to arr[s]
                 //then, s++;


1   2   3   2   3
                f->
            s->     

finally, return slow.
```


```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums == null || nums.length == 0){
            return 0;
        }
        if(nums.length == 1){
            return 1;
        }
        int slow = 1;
        for(int fast = 1; fast < nums.length; fast++){
            if(nums[fast] == nums[slow - 1]){
                continue;
            }
            nums[slow] = nums[fast];
            slow++;
        }
        return slow;
    }
}
```





## 一个变种题型

```ruby
Given a sorted integer array, remove duplicate elements. For each group of elements 
with the same value keep only one of them. Do this in-place, 
using the left side of the original array and maintain the relative order of the elements of the array. 
Return the array after deduplication.

Assumptions

The array is not null
Examples

{1, 2, 2, 3, 3, 3} → {1, 2, 3}
```

- 需要注意的是 `Arrays.copyOf(array, slow);`, return 一个specific size的array


```java
public class Solution {
  public int[] dedup(int[] array) {
    // Write your solution here
    if(array.length <= 1){
      return array;
    }
    int slow = 1;
    for(int fast = 1; fast < array.length; fast++){
      if(array[fast] == array[slow - 1]){
        continue;
      }
      array[slow] = array[fast];
      slow++;
    }
    return Arrays.copyOf(array, slow);
  }
}
```
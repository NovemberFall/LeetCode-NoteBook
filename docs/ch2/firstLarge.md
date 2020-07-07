# Smallest Element Larger than Target

```ruby
Given a target integer T and an integer array A sorted in ascending order, 
find the index of the smallest element in A that is larger than T or return -1 
if there is no such index.



Assumptions
There can be duplicate elements in the array.



Examples

A = {1, 2, 3}, T = 1, return 1

A = {1, 2, 3}, T = 3, return -1

A = {1, 2, 2, 2, 3}, T = 1, return 1



Corner Cases

What if A is null or A of zero length? We should return -1 in this case.
```


## Analysis:

- [具体分析这里不再解释，可以参考leetCode q.34](https://novemberfall.github.io/LeetCode-NoteBook/#/m3/FirstLastPositionOfSortedArr)

- 以及也对 `while(left < right - 1){//prevent infinite loop` 做了充分解释



```java
public class Solution {
  public int smallestElementLargerThanTarget(int[] array, int target) {
    // Write your solution here
    if(array == null || array.length == 0){
      return -1;
    }
    int left = 0;
    int right = array.length - 1;
    while(left < right - 1){//prevent infinite loop
      int mid = left + (right - left) / 2;
      if(array[mid] <= target){
        left = mid;
      }else{
        right = mid;
      }
    }
    if(array[left] > target){
      return left;
    }
    if(array[right] > target){
      return right;
    }
    return -1;
  }
}
```
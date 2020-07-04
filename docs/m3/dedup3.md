# Array Deduplication III

```ruby
Given a sorted integer array, remove duplicate elements. 
For each group of elements with the same value do not keep any of them. 
Do this in-place, using the left side of the original array and 
and maintain the relative order of the elements of the array. 
Return the array after deduplication.

Assumptions

The given array is not null
Examples

{1, 2, 2, 3, 3, 3} → {1}

{1, 1, 1} -> {1}
```




```java
public class Solution {
  public int[] dedup(int[] array) {
    // Write your solution here
    if(array.length <= 1){
      return array;
    }
    boolean flag = false;
    int end = 0;
    for(int i = 1; i < array.length; i++){
      if(array[i] == array[end]){
        //set flag to be true and do nothing
        flag = true;
      }else if(flag == true){
        //if flag == true, it means duplicate elment exists
        //current array[end] should not be in valid subarray
        //so replace it by current array[i], since it is differnt
        array[end] = array[i];
        flag = false;
      }else{
        //if array[i] != array[end], means no duplicate elem exists
        array[++end] = array[i];
      }
    }
    return Arrays.copyOf(array, flag? end : end + 1);
  }
}

```
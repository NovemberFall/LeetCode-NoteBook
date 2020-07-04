# Move 0s To The End

```ruby
Given an array of integers, move all the 0s to the right end of the array.

The relative order of the elements in the original array does not need to be maintained.

Assumptions:

The given array is not null.
Examples:

{1} --> {1}
{1, 0, 3, 0, 1} --> {1, 3, 1, 0, 0} 
or {1, 1, 3, 0, 0} 
or {3, 1, 1, 0, 0}
```


## Analysis:

- [reference to 283. Move Zeroes](https://novemberfall.github.io/LeetCode-NoteBook/#/ch1/move0)
- [reference to Move 0s To The End II](https://novemberfall.github.io/LeetCode-NoteBook/#/ch1/move0toEnd2)



```ruby
[1  0   3   0   1]    
l++
                r--
```

- when left don't meet 0, left++
- when right meet with 0, right--
- when left meet with 0 AND right don't meet 0,    =>  swap(left, right)


```java
public class Solution {
  public int[] moveZero(int[] array) {
    // Write your solution here
    if(array == null || array.length == 0){
      return array;
    }
    int left = 0;
    int right = array.length - 1;

    while(left <= right){
      if(array[left] != 0){
        left++;
      }else if(array[right] == 0){
        right--;
      }else if(array[left] == 0 && array[right] != 0){
        swap(array, left++, right--);
      }
    }
    return array;
  }

  private void swap(int[] arr, int left, int right){
    int tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  }
}
```
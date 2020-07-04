# Move 0s To The End II

```ruby
Given an array of integers, move all the 0s to the right end of the array.

The relative order of the elements in the original array need to be maintained.

Assumptions:

The given array is not null.
Examples:

{1} --> {1}
{1, 0, 3, 0, 1} --> {1, 3, 1, 0, 0}
```


## Analysis:

- [reference to 283. Move Zeroes](https://novemberfall.github.io/LeetCode-Algorithm/ch1/move0.html)
- [reference to Move 0s To The End](https://novemberfall.github.io/LeetCode-Algorithm/ch1/move0toEnd.html)


- **Note: quick sort doesn't work because 相向而行不保证相对顺序**

- slow: a[0... slow-1] is the remainder of the elements that have been processed 
  with all zeros removed
- fast: the current element being processed


```js
1      0       3       0       1
f->                                 //a[f] != 0,
s->                                 //arr[slow++] = arr[fast]                         


1      0       3       0       1
       f->
       s->                          //a[fast] == 0 , then f++;



1      0       3       0       1
               f->
       s->                          //a[fast] != 0 , arr[slow++] = arr[fast]      



1      3       3       0       1
               f->
               s->                  //next loop, => f++         



1      3       3       0       1
                       f->
               s->                    //a[fast] == 0 , then f++;



1      3       3       0       1
                               f->
               s->                    //a[fast] != 0 , arr[slow++] = arr[fast]      



1      3       1       0       1
                               f->
                       s->               

当处理完中间遇到的0， 剩下只要把 slow pointer剩下的元素全部 assign to 0


1      3       1       0       1
                       s->                      //arr[s] = 0



1      3       1       0       0
                               s->                      //arr[s] = 0
```



```java
public class Solution {
  public int[] moveZero(int[] array) {
    // Write your solution here
    if(array.length <= 1){
      return array;
    }
    int slow = 0;
    for(int fast = 0; fast < array.length; fast++){
      if(array[fast] != 0){
        array[slow++] = array[fast];
      }
    }

    for(int i = slow; i < array.length; i++){
      array[i] = 0;
    }

    return array;
  }
}
```
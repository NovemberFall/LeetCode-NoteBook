## Smallest Element Larger than Target

![](img/2022-12-09-09-05-33.png)


## Analysis:

- [具体分析这里不再解释，可以参考leetCode q.34](https://novemberfall.github.io/LeetCode-NoteBook/#/m3/FirstLastPositionOfSortedArr)

- 以及也对 `while(left < right - 1){//prevent infinite loop` 做了充分解释

```ruby
T = 1
0  1  2  3  4  
1  2  2  2  3  
l           r


0  1  2  3  4  
1  2  2  2  3  
l     r              m  =  2


0  1  2  3  4  
1  2  2  2  3  
l  r                 m  =  1


0  1  2  3  4  
1  2  2  2  3  
l  r                 m  =  0


## that's why we need to set :
##    while (left < right - 1),    otherwise infinite loop
```



```java
public class Solution {
  public int smallestElementLargerThanTarget(int[] array, int target) {
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
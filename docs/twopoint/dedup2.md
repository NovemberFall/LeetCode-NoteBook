## 80. Remove Duplicates from Sorted Array II || Array Deduplication II
![](img/2021-08-10-11-48-57.png)
![](img/2021-08-10-11-49-07.png)

## Analysis:

- [reference 26. Remove Duplicates from Sorted Array](https://novemberfall.github.io/LeetCode-NoteBook/#/twopoint/rmDupEle)

- slow: all elements to the left side of the slow (excluding slow) pointer are the result for  
  the elements that have been processed.

- fast: the current index being processed. (all elements to the right side of the fast pointer
  have not been processed.)

## Algorithm

- Initialize: s = 2, f = 2
- case1: a[f] == a[s-2], we are sure a[f] == a[s - 1], not copy
- case2: a[f] != a[s - 2], a[s] = a[f]; s++; 



```js
1   2   2   3   3   3
        f->
        s->             //since arr[f] != arr[s - 2], 
                        //copy arr[f] to arr[s]
                        //slow++;

1   2   3   3   3   3
        f->             
            s->        //then loop, f++;


1   2   3   3   3   3
            f->             
            s->        //since arr[f] != arr[s - 2], 
                       //copy arr[f] to arr[s] 
                       //slow++;


1   2   3   3   3   3
            f->             
                s->        
                       //then loop, f++;
    


1   2   3   3   3   3
                f->             
                s-> //since arr[f] = arr[s - 2], continue
                    //f++;
                     

1   2   3   3   3   3
                    f->             
                s->        
                    //then loop is done!                 


return slow index.
```




```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        
        int slow = 2;
        for (int fast = 2; fast < nums.length; fast++) {
            if (nums[fast] != nums[slow - 2]) {
                nums[slow++] = nums[fast];
            }
        }
        return slow;
    }
}
```



---

## 不同写法


```ruby
class _80_RemoveDuplicatesFromSortedArray_II {
    public int removeDuplicates(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int slow = 2;
        for (int fast = 2; fast < nums.length; fast++) {
            if (nums[fast] == nums[slow - 2]) {
                continue;
            }
            nums[slow] = nums[fast];
            slow++;
        }
        return slow;
    }
}
```







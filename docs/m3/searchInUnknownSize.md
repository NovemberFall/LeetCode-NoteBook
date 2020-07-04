# 702. Search in a Sorted Array of Unknown Size

```ruby
Given an integer array sorted in ascending order, write a function to search target in nums.  
If target exists, then return its index, otherwise return -1. 
However, the array size is unknown to you. You may only access the array using an ArrayReader 
interface, where ArrayReader.get(k) returns the element of the array at index k (0-indexed).

You may assume all integers in the array are less than 10000, and if you access the array out of bounds, ArrayReader.get will return 2147483647.

 

Example 1:
Input: array = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4


Example 2:
Input: array = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:
You may assume that all elements in the array are unique.
The value of each element in the array will be in the range [-9999, 9999].
```




## Analysis:

- 本题最大难点在于如何向右扩展size, 也就是说这个字典很可能非常大size, 所以如何extend, 成为本题关键要素
  - when `reader.get(right) < target` 最右边那个元素还是 < target的情况下 => 扩容 
  - 既然已经知道 每一次的极右元素已经小于target, 那就没有必要保留left index, 所以我们 `left = right`
  - 然后采用 `right = 2 * right` 向右扩容
- 然后采取经典binarySearch

```java
class Solution {
    public int search(ArrayReader reader, int target) {
        if (reader == null) {
            return 0;
        }
        int left = 0;
        int right = 1;
        //find the right boundary for binary search
        //extends until we  are sure the target is within the [left, right] range.
        while (reader.get(right) < target) {
            //1. move left to right
            //2. double right index
            left = right;
            right = 2*right;
        }
        return binarySearch(reader, target, left, right);
    }
  
    private int binarySearch(ArrayReader reader, int target, int left, int right) {
        //classical binary search
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (reader.get(mid) > target) {
                right = mid-1;
            } else if (reader.get(mid) < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
```
---

## 一道变种题目，需要处理是否 每一次字典里是否存在该单词，以及是否已经越界，因为在越界的情况，也应当向左边缩减size

```ruby
Given a integer dictionary A of unknown size, where the numbers in the dictionary 
are sorted in ascending order, determine if a given target integer T is in the dictionary. 
Return the index of T in A, return -1 if T is not in A.


Assumptions
dictionary A is not null
dictionary.get(i) will return null(Java)/INT_MIN(C++)/None(Python) if index i is out of bounds
Examples

A = {1, 2, 5, 9, ......}, T = 5, return 2
A = {1, 2, 5, 9, 12, ......}, T = 7, return -1
```

```java
/*
*  interface Dictionary {
*    public Integer get(int index);
*  }
*/

// You do not need to implement the Dictionary interface.
// You can use it directly, the implementation is provided when testing your solution.
public class Solution {
  public int search(Dictionary dict, int target) {
    // Write your solution here
    if(dict == null){
      return -1;
    }
    int left = 0;
    int right = 1;
    while(dict.get(right) != null && dict.get(right) < target){
      left = right;
      right = right * 2;
    }
    return binarySearch(dict, target, left, right);
  }
  private int binarySearch(Dictionary dict, int target, int left, int right){
    while(left <= right){
      int mid = left + (right - left) / 2;
      if(dict.get(mid) == null || dict.get(mid) > target){
        //注意这里，因为极其有可能，right边界已经越界，所以这种情况出现也要向左边缩减 size
        right = mid - 1;
      }else if(dict.get(mid) < target){
        left = mid + 1;
      }else{
        return mid;
      }
    }
    return -1;
  }
}
```
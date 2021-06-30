# 658. Find K Closest Elements

- Given a sorted array arr, two integers k and x, find the k closest elements to x in the 
  array. 
- The result should also be sorted in ascending order. 
- If there is a tie, the smaller elements are always preferred.


Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]




---

## Analysis:

```ruby
Assume: Target = 4, k = 3
    0   1   2       3   4
[   1   2   3  t=4  8   9]
谁小移谁

-> Array[2] == 3, left == index == 2
-> right = left + 1 = 2 + 1 == 3, Array[right == 3] == 8


    0   1   2       3   4
[   1   2   3  t=4  8   9]

case1: right is out of right bound, 
    if(right >= Array.length)   =>  array[left--]

case2: target - Array[left] <= Array[right] - target
    array[left--]

case3: right is not out of bound ||target - Array[left] >  Array[right] - target >
    array[right++]
```



```java
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        if(arr == null || arr.length == 0){
            return new ArrayList<>();
        }
        
        int left = largestSmallerEqual(arr, x);
        int right = left + 1;
        List<Integer> res = new ArrayList<>(k);
        for(int i = 0; i < k; i++){
            if(right >= arr.length ||
              left >= 0 && x - arr[left] <= arr[right] - x){
                res.add(arr[left--]);
            }else{
                res.add(arr[right++]);
            }
        }
        Collections.sort(res);
        return res;
    }
    
    private int largestSmallerEqual(int[] array, int target){
        int left = 0;
        int right = array.length - 1;
        while(left < right - 1){
            int mid = left +(right - left)/2;
            if(array[mid] <= target){
                left = mid;
            }else{
                right = mid;
            }
        }
        if(array[right] <= target){
            return right;
        }
        if(array[left] <= target){
            return left;
        }
        return -1;
    }
}
```
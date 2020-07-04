# 344. Reverse String

```ruby
Write a function that reverses a string. 
The input string is given as an array of characters char[].

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]


Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```






## Analysis


```java
class Solution {
    public void reverseString(char[] s) {
        if(s == null || s.length == 0){
            return;
        }
        
        int left = 0;
        int right = s.length - 1;
        while(left <= right){
            swap(s, left++, right--);
        }
    }
    
    private void swap(char[] res, int left, int right){
        char tmp = res[left];
        res[left] = res[right];
        res[right] = tmp;
    }
}
```
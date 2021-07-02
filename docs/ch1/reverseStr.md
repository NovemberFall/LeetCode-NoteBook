## 344. Reverse String


- Write a function that reverses a string. 
  The input string is given as an array of characters char[].

- Do not allocate extra space for another array, 
  you must do this by modifying the input array in-place with O(1) extra memory.

- You may assume all the characters consist of printable ascii characters.

 
```ruby
Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]


Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```






## Analysis

- Time = O(n)
- Space = O(1)

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

---

## solution 2: recursive

- Time = O(n)
- Space = O(n)

```java
class Solution {
    public void reverseString(char[] s) {
        int i = 0;
        int j = s.length - 1;
        
        recursive(s, i, j);
    }
    
    private void recursive(char[] s, int i, int j) {
        if (i >= j) {
            return;
        }
        
        char tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
        
        recursive(s, ++i, --j);
    }
}
```
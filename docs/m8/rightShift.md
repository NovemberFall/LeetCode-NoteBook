## Right Shift By N Characters

```ruby
Right shift a given string by n characters.

Assumptions

The given string is not null.
n >= 0.
Examples

"abc", 4 -> "cab"
```
---

## Analysis:

```ruby

shift the whole string to the right-hand side 
by two positions


 0  1   2   3   4   5   
[a  b   c   d   e   f]

[e  f   a   b   c   d]

reverse(0 ,  n - 1)
reverse(0, 1)
reverse(2, n - 1)
```
---

```java
public class Solution {
  public String rightShift(String input, int n) {
    // Write your solution here
    if(input.length() <= 1){
      return input;
    }
    char[] arr = input.toCharArray();
    n %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, n - 1);
    reverse(arr, n, arr.length - 1);
    return new String(arr);
  }

  private void reverse(char[] res, int left, int right){
        while(left < right){
            char temp = res[left];
            res[left] = res[right];
            res[right] = temp;
            left++;
            right--;
        }
  }
}
```
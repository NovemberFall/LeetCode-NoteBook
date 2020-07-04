# Right Shift By N Characters

```ruby
Right shift a given string by n characters.

Assumptions

The given string is not null.
n >= 0.
Examples

"abc", 4 -> "cab"
```


## Analysis:

```ruby

 0  1   2   3   4   5   
[a  b   c   d   e   f]

reverse(index == 2 ,  index == 5)
reverse(index == 0, array.length - n - 1)
reverse(0, array.length - 1)
```


```java
public class Solution {
  public String rightShift(String input, int n) {
    // Write your solution here
    if(input.length() <= 1){
      return input;
    }

    char[] res = input.toCharArray();
    int mod = n % res.length;
    reverse(res, res.length - mod, res.length - 1);
    reverse(res, 0, res.length - mod - 1);
    reverse(res, 0, res.length - 1);
    return new String(res);
  }

  private void reverse(char[] res, int left, int right){
        while(left <= right){
            char temp = res[left];
            res[left] = res[right];
            res[right] = temp;
            left++;
            right--;
        }
  }
}

```
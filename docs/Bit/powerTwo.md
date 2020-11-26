## Power Of 2

```
Determine if a given integer is power of 2.

Examples

16 is power of 2 (2 ^ 4)
3 is not
0 is not
-1 is not
```



```ruby
0000 0000 
在二进制中，每一位都是2的power, 假如在十进制中，那每一位都是10的倍数
e.g 
0000 0010  => 2
0000 0100  => 4
0000 1000  => 8

以 0000 1000， 为例子
那么用 & (AND) 操作， 假如 最后一位bit,  & 1 == 0, 我们就设法 shift right, >>>
直到 确定最后一位 & 1 == 1, otherwise 继续 shift right

但是我们要考虑一种情况： 0000 0011, 最后一位 & 1 == 1 is true, 但他不是2的power

所以我们只需要做一个判断， return number == 1;
```




```java
public class Solution {
  public boolean isPowerOfTwo(int number) {
    // Write your solution here
    if (number <= 0) {
      return false;
    }

    while ((number & 1) == 0) {
      number = number >>> 1;
    }
    return number == 1;
  }
}
```


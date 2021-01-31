## Number Of Different Bits

```ruby
Determine the number of bits that are different for two given integers.

Examples

5(“0101”) and 8(“1000”) has 3 different bits
```


- 0101 = 5,  1000 = 8

- 我们先用 ^ (XOR) 的操作, num1 ^ num2，识别出不同的bit 的个数，**if different bit => 1, otherwise, same bit => 0**

- 接下来我们可以用 AND & 的操作 加上 shift right >>> 来遍历全部 bits， 来识别是否为1， 直到 a != 0 (作为terminal condition), 
  is True 这就意味着已经遍历完最后一个bit了，因为继续遍历 a 永远 = b = 0, 



```java
public class Solution {
  public int diffBits(int a, int b) {
    // Write your solution here
    a = a^b;
    int count = 0;
    while (a != 0) {
      count += (a & 1);
      a >>>= 1;
    }
    return count;
  }
}
```















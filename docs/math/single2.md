## 137. Single Number II
![](img/2023-04-07-16-59-17.png)

- [BIT MANIPULATION youtube](https://youtu.be/cOFAmaMBVps?t=485)


```ruby
       arr [2   2   2   3]
            -
Ones = 0
Twos = 0

           0 0     => Ones
    XOR(^) 1 0     => arr[0]
   ------------
           1 0  
    AND(&) 1 1     complement => ~Twos (00 -> 11)
   ------------
           1 0     this is new value of `Ones` is `1 0`

Ones = 2
Twos = 0

           0 0    => Twos
    XOR(^) 1 0
   ------------
           1 0  
    AND(&) 0 1     complement => ~Ones (10 -> 01)
   ------------
           0 0    this is new value of `Twos` is `0 0`





           [2   2   2   3]
                -
Ones = 0
Twos = 0

           1 0     => Ones
    XOR(^) 1 0     => arr[1]
   ------------
           0 0   
    AND(&) 1 1     complement => ~Twos (00 -> 11)
   ------------
           0 0     this is new value of `Ones` is `0 0`

Ones = 0
Twos = 2

           0 0    => Twos
    XOR(^) 1 0
   ------------
           1 0  
    AND(&) 1 1     complement => ~Ones (00 -> 11)
   ------------
           1 0    this is new value of `Twos` is `1 0`






           [2   2   2   3]
                    -
Ones = 0
Twos = 2

           0 0     => Ones
    XOR(^) 1 0     => arr[2]
   ------------
           1 0   
    AND(&) 0 1     complement => ~Twos (10 -> 01)
   ------------
           0 0     this is new value of `Ones` is `0 0`

Ones = 0
Twos = 0

           1 0    => Twos
    XOR(^) 1 0
   ------------
           0 0  
    AND(&) 1 1     complement => ~Ones (00 -> 11)
   ------------
           0 0    this is new value of `Twos` is `0 0`








           [2   2   2   3]
                        -
Ones = 3
Twos = 0

           0 0     => Ones
    XOR(^) 1 1     => arr[2]
   ------------
           1 1   
    AND(&) 1 1     complement => ~Twos (00 -> 11)
   ------------
           1 1     this is new value of `Ones` is `1 1`

Ones = 3
Twos = 0

           0 0    => Twos
    XOR(^) 1 1
   ------------
           1 1  
    AND(&) 0 0     complement => ~Ones (11 -> 00)
   ------------
           0 0    this is new value of `Twos` is `0 0`
```

---

```java
class singleNumber_II {
    public int singleNumber(int[] nums) {
        int ones = 0, twos = 0;

        for (int num : nums) {
            ones = (ones ^ num) & (~twos);
            twos = (twos ^ num) & (~ones);
        }
        return ones;
    }
}
```


---

### Brute Force

```java
class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        return freq.entrySet()
                .stream()
                .filter(e -> e.getValue() < 3)
                .findFirst()
                .map(entry -> entry.getKey())
                .orElse(-1);  
    }
}
```
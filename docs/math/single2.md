## 137. Single Number II
![](img/2023-04-07-16-59-17.png)



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
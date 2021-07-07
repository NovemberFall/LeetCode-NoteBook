## 443. String Compression

![](img/2021-07-07-16-14-48.png)

![](img/2021-07-07-16-32-11.png)

```java
class Solution {
    public int compress(char[] chars) {
        int ansIdx = 0;
        int slow = 0;
        int fast = 0;
        while (fast < chars.length) {
            slow = fast;
            while (fast < chars.length && chars[slow] == chars[fast]) {
                fast++;
            }
            chars[ansIdx++] = chars[slow];
            //if: fast - slow == 1, continue
            if (fast - slow == 1) {
                continue;
            }
            for (char c : Integer.toString(fast - slow).toCharArray()) {
                chars[ansIdx++] = c;
            }
        }
        return ansIdx;
        
    }
}
```
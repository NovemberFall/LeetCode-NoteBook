## 159. Longest Substring with At Most Two Distinct Characters
![](img/2023-03-21-01-30-07.png)
---

```java
class _159_LongestSubstringWithAtMostTwoDistinctCharacters {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int slow = 0, count = 0, len = 0; // fast = 0;

        for (int fast = 0; fast < s.length(); fast++) {
            char c = s.charAt(fast);
            map.put(c, map.getOrDefault(c, 0) + 1);
            if (map.get(c) == 1) {
                count++; // new char
            }
            while (count > 2) {
                char cTmp = s.charAt(slow);
                map.put(cTmp, map.get(cTmp) - 1);
                if (map.get(cTmp) == 0) {
                    count--;
                }
                slow++;
            }
            len = Math.max(len, fast - slow + 1);
        }
        return len;
    }
}
```
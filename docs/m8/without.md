## 3. Longest Substring Without Repeating Characters
![](img/2023-03-12-18-28-08.png)
---
### Sliding Window    |  哈希表（整形数组）

- 注意： Counter 可以直接写 `cnt[c] += 1`, 而 `dict` 不行

```py
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = 0
        cnt = Counter()  # hashmap char int
        left = 0
        for right, c in enumerate(s):
            cnt[c] += 1
            while cnt[c] > 1:
                cnt[s[left]] -= 1
                left += 1
            res = max(res, right - left + 1)
        return res
```

![](img/2025-05-23-02-30-28.png)

- SC: O(|∑|), ASCII valus |∑| <= 128
---

### 哈希集合（布尔数组）

```py
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen = 0
        window = set()
        left = 0
        
        for right, c in enumerate(s):
            while c in window:
                window.remove(s[left])
                left += 1
            window.add(c)
            maxLen = max(maxLen, right - left + 1)
        return maxLen
```
---

```java
class LongestSubstringWithoutRepeatCharacters_slidingWindow {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;

        Set<Character> set = new HashSet<>();
        int left = 0, longest = -1;
        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
```
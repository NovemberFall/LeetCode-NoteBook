## 3. Longest Substring Without Repeating Characters
![](img/2023-03-12-18-28-08.png)
---
## Sliding Window

```java
    public int lengthOfLongestSubstring(String s) {
        char[] chars = s.toCharArray();
        Set<Character> set = new HashSet<>();
        int globalMax = 0;
        int fast = 0, slow = 0;
        while (fast < s.length()) {
            if (!set.contains(chars[fast])) {
                set.add(chars[fast]);
                fast++;
            } else {
                set.remove(chars[slow]);
                slow++;
            }
            globalMax = Math.max(globalMax, set.size());
        }
        return globalMax;
    }
```

---

```ruby
过一个例子：

s = "pawwwky"


   longest = 1      set[p ]
   p  a  w  w  w  k  y
   l
   r


   longest = 2      set[p a]
   p  a  w  w  w  k  y
   l
      r


   longest = 3      set[p a w]
   p  a  w  w  w  k  y
   l
         r


   longest = 3      set[  a w]
   p  a  w  w  w  k  y
      l
            r


   longest = 3      set[w ]
   p  a  w  w  w  k  y
         l
            r


   longest = 3      set[ ]
   p  a  w  w  w  k  y
            l
            r


   longest = 3      set[w ]
   p  a  w  w  w  k  y
            l
            r


   longest = 3      set[w ]
   p  a  w  w  w  k  y
            l
               r


   longest = 3      set[ ]
   p  a  w  w  w  k  y
               l
               r
```

---


#### Python


```py
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen = 0
        window = set()
        slow, fast = 0, 0
        
        while fast < len(s):
            if s[fast] not in window:
                window.add(s[fast])
                fast += 1
            else:
                window.remove(s[slow])
                slow += 1
            
            maxLen = max(maxLen, len(window))
        
        return maxLen
```
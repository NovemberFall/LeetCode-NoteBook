## 3. Longest Substring Without Repeating Characters
![](img/2023-03-12-18-28-08.png)
---
## Sliding Window

```java
public int lengthOfLongestSubstring(String s) {
    if (s == null || s.length() == 0) return 0;

    Set<Character> set = new HashSet<>();
    int left = 0, longest = -1;
    for (int right = 0; right < s.length(); right++) {
        // 这里需要用while loop 是当遇到duplicate, 我们需要舍弃全部左边的元素，直到 left == right
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
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
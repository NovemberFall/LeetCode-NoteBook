## 5. Longest Palindromic Substring
![](img/2021-08-22-16-01-43.png)

- [youtube](https://www.youtube.com/watch?v=QhFkiwPLvHg)


```ruby
assume i = 3,   s is even length

    0  1  2  3  4  5  6  7
   [a  c  d  b  b  d  a  a]
             l
                r

    0  1  2  3  4  5  6  7
   [a  c  d  b  b  d  a  a]
          l
                   r

    0  1  2  3  4  5  6  7
   [a  c  d  b  b  d  a  a]
       l
                      r
```
---

- 注意： `odd`, `even` 两种情况下的palindrome 的判断

---

```java
class longestPalindromicSubstring {
    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }
        String res = "";
        for (int i = 0; i < s.length(); i++) {
            String oddStr = expandAroundCenter(s, i, i);
            if (oddStr.length() > res.length()) {
                res = oddStr;
            }

            String evenStr = expandAroundCenter(s, i, i + 1);
            if (evenStr.length() > res.length()) {
                res = evenStr;
            }
        }
        return res;
    }

    private String expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
}
```

---

### Recursion

```py
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        for i in range(len(s)):
            # odd case
            odd_str = self.dfs(s, i, i)
            if len(odd_str) > len(res):
                res = odd_str
            # even case
            even_str = self.dfs(s, i, i + 1)
            if len(even_str) > len(res):
                res = even_str
        return res

    def dfs(self, s, l, r) -> str:
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1: r]
```


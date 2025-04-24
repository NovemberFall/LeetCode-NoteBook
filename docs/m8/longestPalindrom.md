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

right - left - 1 = 6 - 1 - 1 = 4, # dbbd => len = 4
lo = left + 1 # since we need to put lo back to begin of palindrome
```
---

- 注意： `odd`, `even` 两种情况下的palindrome 的判断

---

```java
class Solution {
    int maxLen = Integer.MIN_VALUE;
    String res = "";    
    
    public String longestPalindrome(String s) {
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            extendPalindrome(s, i, i);
            extendPalindrome(s, i, i + 1);
        }
        return res;
    }
    
    private void extendPalindrome(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            if (right - left + 1 > maxLen) {
                res = s.substring(left, right + 1);
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
}
```

---

#### Python

```py
class Solution:
    maxLen = float('-inf')
    res = ""

    def longestPalindrome(self, s: str) -> str:

        for i in range(len(s)):
            # odd-length palindromes
            oddLeft, oddRight = i, i
            self.extendPalindromes(s, oddLeft, oddRight)

            # even-length palindromes
            evenLeft, evenRight = i, i + 1
            self.extendPalindromes(s, evenLeft, evenRight)
        return self.res

    def extendPalindromes(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            if right - left + 1 > self.maxLen:
                self.res = s[left: right + 1]
                self.maxLen = right - left + 1
            left -= 1
            right += 1
```
---

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


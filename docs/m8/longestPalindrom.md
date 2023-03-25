## 5. Longest Palindromic Substring
![](img/2021-08-22-16-01-43.png)


```ruby
assume i = 3

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
class longestPalindromicSubstring {
    public String longestPalindrome(String s) {
        String res = "";
        int maxLen = Integer.MIN_VALUE;
        char[] chars = s.toCharArray();
        int n = s.length();

        for (int i = 0; i < n; i++) {
            // odd length
            int oddLeft = i, oddRight = i;
            while (oddLeft >= 0 && oddRight < n && chars[oddLeft] == chars[oddRight]) {
                if (oddRight - oddLeft + 1 > maxLen) {
                    res = s.substring(oddLeft, oddRight + 1);
                    maxLen = oddRight - oddLeft + 1;
                }
                oddLeft--;
                oddRight++;
            }

            // even length
            int evenLeft = i, evenRight = i + 1;
            while (evenLeft >= 0 && evenRight < n && chars[evenLeft] == chars[evenRight]) {
                if (evenRight - evenLeft + 1 > maxLen) {
                    res = s.substring(evenLeft, evenRight + 1);
                    maxLen = evenRight - evenLeft + 1;
                }
                evenLeft--;
                evenRight++;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        longestPalindromicSubstring lps = new longestPalindromicSubstring();
        String str = "babadbbbaaa ababababa bbabaab";
        System.out.println(lps.longestPalindrome(str)); // ababababa
    }
}
```
---

### Brute Force

```java
class bruteForce {
    public String longestPalindrome(String s) {
        int n = s.length();
        int maxLen = Integer.MIN_VALUE;
        String res = "";
        // check for every substring
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                String temp = s.substring(i, j + 1);
                if (isPalindrome(temp)) {
                    if (maxLen < temp.length()) {
                        str = temp;
                        maxLen = temp.length();
                    }
                }
            }
        }
        return str.toString();
    }

    private boolean isPalindrome(String temp) {
        int n = temp.length();
        int i = 0, j = n - 1;
        while (i <= j) {
            if (temp.charAt(i) != temp.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    public static void main(String[] args) {
        bruteForce bf = new bruteForce();
        String str = "babadbbbaaa ababababa bbabaab";
        System.out.println(bf.longestPalindrome(str)); // ababababa
    }
}
```
---

###

```java
class extendFromCenter {
    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) return "";

        int start = 0, end = 0;
        int maxLen = 0;
        int n = s.length();

        // i 不能从`index 0`开始，因为无法向左边扩张
        for (int i = 1; i < n; i++) {
            // odd check
            int len1 = extendByCenter(s, i, i);

            // even check
            int len2 = extendByCenter(s, i - 1, i);

            if (len1 > maxLen) {
                start = i - len1 / 2;
                end = i + len1 / 2;
                maxLen = len1;
            }

            if (len2 > maxLen) {
                start = i - len2 / 2;
                end = i - 1 + len2 / 2;
                maxLen = len2;
            }
        }

        // substring， end 是不包含的，所以得 + 1
        return s.substring(start, end + 1);
    }

    private int extendByCenter(String s, int lo, int hi) {
        int maxLen = 1;
        while (lo >= 0 && hi < s.length() && s.charAt(lo) == s.charAt(hi)) {
            maxLen = hi - lo + 1;
            lo--;
            hi++;
        }
        return maxLen;
    }
}
```
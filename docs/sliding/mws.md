## 76. Minimum Window Substring
![](img/2022-12-23-14-50-51.png)

---
### Slding Window

- [leetcode 官方解释](https://www.youtube.com/watch?v=YWBNoH25lRw)


```ruby
   left = 0,   right = 0

    s = A D O B E C O D E B A N C           t = A B C
        r              since sFreq[A] < tFreq[A]  :  matchingCharsCount++ 
                             sFreq[right]++  => 1


    s = A D O B E C O D E B A N C           t = A B C
          r              

    s = A D O B E C O D E B A N C           t = A B C
            r              

    s = A D O B E C O D E B A N C           t = A B C
              r         since sFreq[B] < tFreq[B]  :  matchingCharsCount++ 
                              sFreq[right]++  => 2


    s = A D O B E C O D E B A N C           t = A B C
                r 

    s = A D O B E C O D E B A N C           t = A B C
                  r      since sFreq[C] < tFreq[C]  :  matchingCharsCount++  
                               sFreq[right]++  => 3      minLen = 6     


    s = A D O B E C O D E B A N C           t = A B C
        l         r           

    s = A D O B E C O D E B A N C           t = A B C
          l           r        when (matchingCharsCount == t.length()) :
                               sFreq[A] == tFreq[A] : =>  matchingCharsCount--   =>   2
                               sFreq[left]--       left++   
                               right++;
```
---
```java
class MinimumWindowSubstring {
        if (s == null || t == null || s.length() < t.length()) return "";

        // Maintain two arrays to record the frequency of characters in the current window and the target string.
        // The ASCII table has a total length of 128, ranging from 0 to 127 (e.g., ascii('z') = 122).
        int[] winFreq = new int[128];
        int[] tFreq = new int[128];

        // Record the frequency of characters in the target string.
        for (int i = 0; i < t.length(); i++) {
            tFreq[t.charAt(i)]++;
        }

        // Left pointer, right pointer, and the minimum length (initialized to an unattainable value).
        int left = 0, right = 0;
        int minLen = Integer.MAX_VALUE;

        // `matchingCharsCount` represents the number of characters in the current window that match the target string.
        // This count increases only when a character in the window matches the required frequency in `tFreq`.
        int matchingCharsCount = 0;
        int start = 0;

        // [left, right)
        while (right < s.length()) {
            // If the current character at `right` is not in `t`, move the right pointer directly.
            if (tFreq[s.charAt(right)] == 0) {
                right++;
                continue;
            }

            /* Example:
                 s = F F A D D B A C C D E N C        t = A A B
                 When encountering 'A' for the first time:
                 winFreq[A] = 0,  tFreq[A] = 2
                 => winFreq[s[right]] < tFreq[s[right]], so we increase `matchingCharsCount`.
            */
            // When expanding the right boundary, if the count of `s[right]` in `winFreq` is less than in `tFreq`,
            // we increase `matchingCharsCount`.
            if (winFreq[s.charAt(right)] < tFreq[s.charAt(right)]) {
                matchingCharsCount++;
            }

            // Increase the frequency count of `s[right]` in the window.
            winFreq[s.charAt(right)]++;

            // When the current window contains all characters of `t` with the required frequency.
            while (matchingCharsCount == t.length()) {
                // If the current window size is smaller than the previously recorded minimum, update `minLen` and `start`.
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                // If the character at `left` is not needed in `t`, move the left pointer directly.
                if (tFreq[s.charAt(left)] == 0) {
                    left++;
                    continue;
                }

                // When shrinking the left boundary, if `winFreq[s[left]]` equals `tFreq[s[left]]`,
                // we must decrease `matchingCharsCount`.
                if (winFreq[s.charAt(left)] == tFreq[s.charAt(left)]) {
                    matchingCharsCount--;
                }

                // Decrease the frequency count of `s[left]` in the window.
                winFreq[s.charAt(left)]--;
                // Move the left pointer.
                left++;
            }
            // Move the right pointer.
            right++;
        }

        // If `minLen` is still the initial value, no valid substring was found.
        if (minLen == Integer.MAX_VALUE) {
            return "";
        }
        return s.substring(start, start + minLen);
    }
}
```

---

### Brute Force

![](img/2022-12-23-17-24-53.png)

- [youtube video4.1 => 2:00:15]()
---

```java
class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null || t.length() > s.length()) return "";        

        int resLen = Integer.MAX_VALUE;
        String res = "";
        StringBuilder sb = null;
        Map<Character, Integer> map = new HashMap<>();
        for (char tc : t.toCharArray()) {
            map.put(tc, map.getOrDefault(tc, 0) + 1);
        }
        for (int i = 0; i < s.length(); i++) {
            // sb.setLength(0);
            sb = new StringBuilder();
            for (int j = i; j < s.length(); j++) {
                sb.append(s.charAt(j));
                boolean includeTstr = check(map, sb.toString());
                if (includeTstr) {
                    if (sb.length() < resLen) {
                        resLen = sb.length();
                        res = sb.toString();
                    }
                }
            }
        }
        return res;        
    }
    
    private boolean check(Map<Character, Integer> map, String sub) {
        boolean res = true;
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            int count = 0;
            for (char c : sub.toCharArray()) {
                if (entry.getKey() == c) {
                    count++;
                }
            }
            if (count < entry.getValue()) {
                res = false;
            }
        }
        return res;
    }    
}
```

---

- [youtube 2:09:00]()

![](img/2022-12-23-17-40-28.png)
![](img/2022-12-23-17-40-56.png)

- Note: `match` **represent the map's keySet()** , that is T sting's all chars!

### Method 2

```java
class MinimumWindowSubstring {
    /**
     * Sliding Window
     */
    public String minWindow(String s, String t) {
        if (s == null || t == null || t.length() > s.length()) {
            return "";
        }
        Map<Character, Integer> map = buildMap(t);
        int left = 0;
        int start = -1;
        int match = 0;
        int shortest = Integer.MAX_VALUE;
        for (int right = 0; right < s.length(); right++) {
            // step 1: Add right
            char cur = s.charAt(right);
            Integer count = map.get(cur);
            // count == null 的情况，当前这个char如果根本不在T 中,
            // 那么以当前fast结尾一定不是最短的 (最短的substring两头的char肯定都在t中)
            if (count != null) {
                if (count == 1) {
                    match++;
                }
                map.put(cur, count - 1);
            }
            // Step 2: move left
            // while 当前sliding window满足条件, move left, 一直移动到第一个不满足条件的left为止
            // while loop 里所有的sliding window都是满足条件的, 所以每一次都可以更新global min
            while (match == map.size()) {
                /*
                0   1   2   3   4
                    4 - 1 + 1 = 4
                 */
                if (right - left + 1 < shortest) {
                    shortest = right - left + 1;
                    start = left;
                }
                cur = s.charAt(left);
                count = map.get(cur);
                if (count != null) {
                    if (count == 0) {
                        match--;
                    }
                    map.put(cur, count + 1);
                }
                left++;
            } // left 在第一个不满足要求的位置
        }
        return shortest == Integer.MAX_VALUE ? "" : s.substring(start, start + shortest);
    }

    private Map<Character, Integer> buildMap(String t) {
        Map<Character, Integer> map = new HashMap<>();
        for (char c : t.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        return map;
    }

    public static void main(String[] args) {
        MinimumWindowSubstring minimumWindowSubstring = new MinimumWindowSubstring();
        String s = "ADOBECODEBANC", t = "ABC";
        String res = minimumWindowSubstring.minWindow(s, t);
        System.out.println(res); // BANC
    }
}

```
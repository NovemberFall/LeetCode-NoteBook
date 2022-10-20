## 387. First Unique Character in a String
![](img/2021-09-13-11-37-36.png)

```java
class solution {
    public static int firstUniqChar(String s) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            if (!map.containsKey(s.charAt(i))) {
                map.put(s.charAt(i), 1);
            } else {
                map.put(s.charAt(i), map.get(s.charAt(i)) + 1);
            }
        }
        for (int i = 0; i < s.length(); i++) {
            if (map.get(s.charAt(i)) == 1) {
                System.out.println(i);
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int idx = firstUniqChar("loveleetcode");
        System.out.println(idx); // 2 2
    }
}

```









---
- 1. Make a hash_map which will map the character to there respective frequencies.
- 2. Traverse the given string using a pointer.
- 3. Increase the count of current character in the hash_map.
- 4. Now traverse the string again and check whether the current character hasfrequency=1.

- Time = O(N)
- Space = O(26)

---

```java
class Solution {
    public int firstUniqChar(String s) {
        int[] freq = new int[26];
        char[] arr = s.toCharArray();
        for (char c : arr) {
            freq[c - 'a']++;
        }
        for (int i = 0; i < arr.length; i++) {
            if (freq[arr[i] - 'a'] == 1) {
                return i;
            }
        }
        return -1;
    }
}
```


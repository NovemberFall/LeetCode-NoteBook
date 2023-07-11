## 242. Valid Anagram
![](img/2023-07-11-14-02-23.png)

---

- METHOD 1

```java
public class ValidAnagram_v1 {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> ms = new HashMap<>();
        Map<Character, Integer> mt = new HashMap<>();

        for (Character c : s.toCharArray()) {
            ms.put(c, ms.getOrDefault(c, 0) + 1);
        }
        for (Character c : t.toCharArray()) {
            mt.put(c, mt.getOrDefault(c, 0) + 1);
        }

        return Objects.equals(ms, mt);
    }
}
```
---

- METHOD 2

```java
public class validAnagram_v2 {
    public boolean isAnagram(String s, String t) {
        int[] freq = new int[26];

        for (Character c : s.toCharArray()) {
            freq[c - 'a']++;
        }

        for (Character c : t.toCharArray()) {
            freq[c - 'a']--;
        }

        for (int i : freq) {
            if (i != 0) {
                return false;
            }
        }
        return true;
    }
}
```
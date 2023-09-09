## 438. Find All Anagrams in a String
![](img/2023-03-21-19-18-28.png)
---

### sliding window

![](img/2021-07-08-14-58-23.png)


```java
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> res = new ArrayList<>();
        if (p.length() > s.length()) return res;

        //Record the frequency of occurrence of all letters of p
        int[] pFreq = new int[26];
        for(int i = 0; i < p.length(); i++){
            pFreq[p.charAt(i) - 'a']++;
        }

        //[left right] corresponding to the left and right of window
        int[] window = new int[26];
        int left = 0;
        for (int right = 0; right < s.length(); right++) {
            window[s.charAt(right) - 'a']++;
            if (right - left + 1 == p.length()) {
                if (Arrays.equals(pFreq, window)) {
                    res.add(left);
                }
                window[s.charAt(left) - 'a']--;
                left++;
            }
        }
        return res;
    }
}
```

---

### HashMap

```java
class FindAllAnagramsInAString_slidingWindow {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> res = new ArrayList<>();
        if (p.length() > s.length()) return res;

        Map<Character, Integer> map = buildMap(p);
        int count = map.size();
        int slow = 0;

        for (int fast = 0; fast < s.length(); fast++) {
            char c = s.charAt(fast);
            if (map.containsKey(c)) {
                map.put(c, map.get(c) - 1);
                if (map.get(c) == 0) {
                    count--;
                }

                while (count == 0) {
                    char slowChar = s.charAt(slow);
                    if (map.containsKey(slowChar)) {
                        map.put(slowChar, map.get(slowChar) + 1);
                        if (map.get(slowChar) > 0) {
                            count++;
                        }
                    }
                    if (fast - slow + 1 == p.length()) {
                        res.add(slow);
                    }
                    slow++;
                }
            }
        }
        return res;
    }

    private Map<Character, Integer> buildMap(String p) {
        Map<Character, Integer> map = new HashMap<>();
        for (char c : p.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        return map;
    }
}
```

## 49. Group Anagrams
![](img/2021-08-10-13-14-36.png)
---

### analysis

![](img/2021-08-10-13-15-56.png)
![](img/2021-08-10-13-16-25.png)

---

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        if (strs == null || strs.length == 0) {
            return res;
        }
        
        Map<String, List<String>> map = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            char[] tmpkey = strs[i].toCharArray();
            Arrays.sort(tmpkey);
            String key = String.valueOf(tmpkey);
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(strs[i]);
        }
        
        for (List<String> list : map.values()) {
            res.add(new ArrayList<>(list));
        }
        return res;
    }
}
```
---
### v2

```java
public class groupAnagrams_v2 {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();

        Map<String, List<String>> dict = new HashMap<>();
        for (String str : strs) {
            int[] freq = new int[26];
            for (char c : str.toCharArray()) {
                freq[c - 'a']++;
            }
            String keyStr = Arrays.toString(freq);
            dict.putIfAbsent(keyStr, new ArrayList<>());
            dict.get(keyStr).add(str);
        }

        for (List<String> list : dict.values()) {
            res.add(list);
        }
        return res;
    }
}
```
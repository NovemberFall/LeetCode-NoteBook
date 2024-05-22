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
---

### Python

- the following codes has error:

```py
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {} # mapping charCount to List of Anagrams

        for str in strs:
            count = [0] * 26 # a ... z

            for c in str:
                count[ord(c) - ord('a')] += 1

            res[count].append(str)

        return res.values()
```

- the attempt to use a list (`count`) as a dictionary key. Lists are **mutable** and therefore **not hashable**, 
  so they **cannot** be used as keys in a dictionary.

```py
class _49_groupAnagrams:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {} # mapping charCount to List of Anagrams

        for str in strs:
            count = [0] * 26 # a ... z

            for c in str:
                count[ord(c) - ord('a')] += 1

            # Convert the list to a tuple to use it as a dictionary key
            key = tuple(count)
            if key not in res:
                res[key] = []
            res[key].append(str)

        return list(res.values())
```
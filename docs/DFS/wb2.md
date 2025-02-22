## 140. Word Break II
![](img/2023-03-19-23-39-17.png)

- [BackTracking](https://www.youtube.com/watch?v=-lIPQo1jFpg)
---

```java
class word_Break_II_dfs {
    public List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        List<String> res = new ArrayList<>();
        dfs(s, new StringBuilder(), res, dict, 0);
        return res;
    }

    private void dfs(String s, StringBuilder sb,  List<String> res,  Set<String> wordDict, int index) {
        if (index == s.length()) {
            res.add(sb.toString());
            return;
        }

        int len = sb.length();
        for (String word : wordDict) {
            if (index + word.length() > s.length()) {
                continue;
            }
            if (s.substring(index, index + word.length()).equals(word)) {
                if (sb.isEmpty()) {
                    sb.append(word);
                } else {
                    sb.append(" " + word);
                }
                dfs(s, sb, res, wordDict, index + word.length());
                sb.setLength(len);
            }
        }
    }
}
```
---


#### Python

```py
class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> list[str]:
        res = []
        count = [0] * 26

        # Count characters in the dictionary words
        for word in wordDict:
            for c in word:
                count[ord(c) - ord('a')] += 1

        # Check if all characters in `s` exist in the dictionary
        for c in s:
            if count[ord(c) - ord('a')] == 0:
                return res

        # Convert wordDict to a set for fast lookups
        wordSet = set(wordDict)

        # Call DFS helper function
        self.dfs(s, 0, len(s), [], res, wordSet)
        return res

    def dfs(self, s: str, index: int, n: int, cur: list[str], res: list[str], wordSet: set[str]) -> None:
        if index == n:
            res.append(" ".join(cur))
            return

        for i in range(index, n):
            if s[index:i + 1] in wordSet:
                cur.append(s[index:i + 1])
                self.dfs(s, i + 1, n, cur, res, wordSet)
                cur.pop()  # Backtrack
```
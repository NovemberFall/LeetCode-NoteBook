## 17. Letter Combinations of a Phone Number
![](img/2023-02-03-10-03-01.png)
---
- [中文教程](https://programmercarl.com/0017.%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.html#%E6%95%B0%E5%AD%97%E5%92%8C%E5%AD%97%E6%AF%8D%E5%A6%82%E4%BD%95%E6%98%A0%E5%B0%84)

![](img/2023-02-03-10-46-56.png)

```java
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return res;
        }

        String[] map = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        dfs(res, new StringBuilder(), digits, map, 0);
        return res;
    }

    private void dfs(List<String> res, StringBuilder sb, String digits, String[] map, int mapIndex) {
        if (mapIndex == digits.length()) {
            res.add(new String(sb));
            return;
        }

        String curStr = map[digits.charAt(mapIndex) - '0'];
        for (int i = 0; i < curStr.length(); i++) {
            sb.append(curStr.charAt(i));
            dfs(res, sb, digits, map, mapIndex + 1);
            sb.setLength(sb.length() - 1);
        }
    }

    public static void main(String[] args) {
        Solution soln = new Solution();
        List<String> res = soln.letterCombinations("23");
        System.out.println(res); // [ad, ae, af, bd, be, bf, cd, ce, cf]
    }
}
```

---

### Python

```py
class Solution:
    def __init__(self):
        self.map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    def letterCombinations(self, digits: str) -> List[str]:
        res = []
        if digits is None or len(digits) == 0:
            return res

        self.dfs(res, digits, [], 0)
        return res


    def dfs(self, res: [], digits: str, path: list[str], index: int):
        if index == len(digits):
            res.append("".join(path))
            return

        cur = self.map[int(digits[index])]
        for char in cur:
            path.append(char)
            self.dfs(res, digits, path, index + 1)
            path.pop()
```
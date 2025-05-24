## 17. Letter Combinations of a Phone Number
![](img/2023-02-03-10-03-01.png)
---
- [中文教程](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solutions/44182/tong-su-yi-dong-dong-hua-yan-shi-17-dian-hua-hao-m/#:~:text=class%20Solution%20%7B%0A%20%20%20%20//%20%E7%94%A8,%3B%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)

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

        // 循环拼接字符串的过程
        /*
        * 例：输入 “23”，则对应“abc” “def”这样两个字符串
        * 以上案例详解该循环中的递归：
        * 1.把“abc”中的"a"取出，append进str中
        * 2.递归调用backTrack，但传入索引index+1，即index为1的backTrack；进入下一轮，即“def”的拼接伦次
        * 3.进入第二层的backTrack后，先把"d"append进str中，进入第三层index为2的backTrack
        * 4.此时index == digits.length()，意味着递归到达尽头，把str中的"ad"add进结果集合ans
        * 5.回到第二层backTrack，先把"ad"中的"d"去除，进入下一层for循环，同步骤2-4，依次把"ae"、"af"加入结果结合ans 
        * 6.结束第二层的循环后，回到第一层循环，此时str为"a"（上一步执行了"ae"去除e)
        * 7.去除str中的"a",通过第一层的for循环依次执行"b"、"c"的伦次，同步骤1-6
        * 8.结束递归
        */ 
        char c = digits.charAt(mapIndex);
        int pos = c - '0';
        String map_str = map[pos];
        for (int i = 0; i < curStr.length(); i++) {
            sb.append(curStr.charAt(i));
            dfs(res, sb, digits, map, mapIndex + 1);
            sb.setLength(sb.length() - 1);
        }
    }
    // "23" =>  [ad, ae, af, bd, be, bf, cd, ce, cf]
}
```

- 每一个数字都有（3−4）个字符选择，可以算成4；总共有 n 个字符，因此有 4^n种选择(状态）， 对
  于每一种选择（状态），都需要O(n)的时间 append 到 ans， 因此是 O(n*4^n)
- TC = **O(N * 4^N)**

- SC = O(N * 4^N)

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
---

### 直接覆盖，不需要回溯

```java
class dfs {
    final String[] MAP = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return new ArrayList<>();
        }
        List<String> res = new ArrayList<>();
        char[] path = new char[digits.length()];
        dfs(digits, res, path, 0);
        return res;
    }

    private void dfs(String digits, List<String> res, char[] path, int index) {
        if (index == digits.length()) {
            res.add(new String(path));
            return;
        }

        char digit = digits.charAt(index);
        String letters = MAP[digit - '0'];
        for (char c : letters.toCharArray()) {
            path[index] = c;  // 直接覆盖
            dfs(digits, res, path, index + 1);
        }
    }
}
```

- TC = **O(N * 4^N)**
- SC = **O(N)**
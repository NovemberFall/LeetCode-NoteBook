## 32. Longest Valid Parentheses
![](img/2022-11-25-20-31-52.png)

- [Longest Valid Parentheses | Leetcode - 32](https://youtu.be/VdQuwtEd10M?t=165)





---
![](img/2024-09-24-19-28-09.png)

![](img/2024-09-24-19-27-11.png)

![](img/2024-09-24-19-27-45.png)


---

![](img/2023-07-21-13-09-55.png)

---
```java
public class _32_LongestValidParentheses {
    public int longestValidParentheses(String s) {
        Stack<Integer> stk = new Stack<>();
        stk.push(-1);
        int max = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stk.push(i);
            } else {
                stk.pop();
                if (stk.isEmpty()) {
                    stk.push(i);
                } else {
                    max = Math.max(max, i - stk.peek());
                }
            }
        }
        return max;
    }
}
```
---

#### Python

```py
class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stk = []
        stk.append(-1)
        maxLen = 0
        for i in range(len(s)):
            if s[i] == '(':
                stk.append(i)
            else:
                stk.pop()
                if not stk:
                    stk.append(i)
                else:
                    maxLen = max(maxLen, i - stk[-1])
        
        return maxLen
```



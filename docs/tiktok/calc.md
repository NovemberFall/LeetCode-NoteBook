## 224. Basic Calculator
![](img/2024-07-30-16-52-30.png)
---

```java
class _224_BasicCalculator {
    public int calculate(String s) {
        int num = 0;
        int res = 0;
        int lastSign = 1;
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (Character.isDigit(c)) {
                num = num * 10 + (c - '0');
            } else if (c == '+') {
                res += lastSign * num;
                num = 0;
                lastSign = 1;
            } else if (c == '-') {
                res += lastSign * num;
                num = 0;
                lastSign = -1;
            } else if (c == '(') {
                //we push the result first, then sign;
                stack.push(res);
                stack.push(lastSign);
                //reset the sign and result for the value in the parenthesis
                lastSign = 1;
                res = 0;
            } else if (c == ')') {
                res += lastSign * num;
                num = 0;
                res *= stack.pop(); // stack.pop() is the sign before the parenthesis
                res *= stack.pop(); // stack.pop() now is the result calculated before the parenthesis
            }
        }

        if (num != 0) { // if "1 + 1", the last loop num = 1, end the loop, so we need to post handle
            res += lastSign * num;
        }
        return res;
    }
}
```
---


#### Python

```py
class Solution:
    def calculate(self, s: str) -> int:
        num = 0
        res = 0
        lastSign = 1;
        stack = [] # Use a list as a stack

        for i in range(len(s)):
            c = s[i]
            if c == ' ':
                continue
            if c.isdigit():
                num = num * 10 + int(c)
            elif c == '+':
                res += lastSign * num
                num = 0
                lastSign = 1
            elif c == '-':
                res += lastSign * num
                num = 0
                lastSign = -1
            elif c == '(':
                stack.append(res)
                stack.append(lastSign)
                lastSign = 1
                res = 0
            elif c == ')':
                res += lastSign * num
                num = 0
                res *= stack.pop() # Sign before parenthesis
                res += stack.pop() # Result calculated before parenthesis

        if num != 0:
            res += lastSign * num

        return res
```
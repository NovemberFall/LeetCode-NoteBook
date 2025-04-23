## 227. Basic Calculator II
![](img/2024-07-30-14-27-16.png)
---
![](img/2025-03-02-23-30-16.png)




---
```java
class _Basic_Calculator_II {
    int index = 0;
    public int calculate(String s) {
        return evaluate(s + "+");
    }

    private int evaluate(String s) {
        Deque<Integer> stack = new ArrayDeque<>();
        int curNum = 0;
        char lastOperator = '+';
        while (index < s.length()) {
            char curChar = s.charAt(index);
            index++;

            if (curChar == ' ') {
                continue;
            }
            if (Character.isDigit(curChar)) {
                curNum = curNum * 10 + curChar - '0';
            } else {
                if (lastOperator == '+') {
                    stack.push(curNum);
                } else if (lastOperator == '-') {
                    stack.push(-curNum);
                } else if (lastOperator == '*') {
                    stack.push(stack.pop() * curNum);
                } else if (lastOperator == '/') {
                    stack.push(stack.pop() / curNum);
                }
                lastOperator = curChar;
                curNum = 0;
            }
        }

        int res = 0;
        while (!stack.isEmpty()) {
            res += stack.pop();
        }
        return res;
    }
}
```
---

```py
class Solution:
    def calculate(self, s: str) -> int:
        self.index = 0
        return self.evaluate(s + "+")

    def evaluate(self, s: str) -> int:
        stack = []
        curNum = 0
        lastOperator = "+"

        while self.index < len(s):
            curChar = s[self.index]
            self.index += 1

            if curChar == ' ':
                continue
            if curChar.isdigit():
                curNum = curNum * 10 + int(curChar)
            else:
                if lastOperator == "+":
                    stack.append(curNum)
                elif lastOperator == "-":
                    stack.append(-curNum)
                elif lastOperator == "*":
                    stack.append(stack.pop() * curNum)
                elif lastOperator == "/":
                    # Perform previous '/' operation
                    # Use int(a / b) for integer division that truncates towards zero (like Java)
                    # Note: Python's // operator floors, which differs for negative results.
                    stack.append(int(stack.pop() / curNum))
                lastOperator = curChar
                curNum = 0
        return sum(stack)
```
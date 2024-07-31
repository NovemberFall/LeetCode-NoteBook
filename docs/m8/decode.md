## 394. Decode String
![](img/2021-07-08-02-14-44.png)


---

- Note： before you see `[`, there must be a number!
  - for example: `3 [ a 2 [ c ] ]`


---
```java
class _394_DecodeString {
    public String decodeString(String s) {
        Stack<String> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c != ']') {
                stack.push(String.valueOf(c));
            } else {
                StringBuilder substr = new StringBuilder();
                while (!stack.peek().equals("[")) {
                    substr.insert(0, stack.pop()); // Reverse the order in Java
                }
                stack.pop(); // Pop the "["

                StringBuilder kStr = new StringBuilder();
                while (!stack.isEmpty() && Character.isDigit(stack.peek().charAt(0))) {
                    kStr.insert(0, stack.pop()); // Reverse the order in Java
                }
                int k = Integer.parseInt(kStr.toString());

                StringBuilder repeatedSubstr = new StringBuilder();
                for (int j = 0; j < k; j++) {
                    repeatedSubstr.append(substr);
                }
                stack.push(repeatedSubstr.toString());
            }
        }

        StringBuilder result = new StringBuilder();
        for (String str : stack) {
            result.append(str);
        }
        return result.toString();
    }
}
```

---


#### Python

```py
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []

        for i in range(len(s)):
            if s[i] != "]":
                stack.append(s[i])
            else:
                substr = ""
                while stack[-1] != "[":
                    substr = stack.pop() + substr
                stack.pop() # pop => 【

                k = ""
                while stack and stack[-1].isdigit():
                    k = stack.pop() + k
                stack.append(int(k) * substr)
        return "".join(stack)
```
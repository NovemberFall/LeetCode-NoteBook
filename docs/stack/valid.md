## 20. Valid Parentheses
![](img/2021-08-25-23-52-31.png)

```java
class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (Character c : s.toCharArray()) {
            if (c == '(') {
                stack.offerFirst(')');
            } else if (c == '[') {
                stack.offerFirst(']');
            } else if (c == '{') {
                stack.offerFirst('}');
            } else if (stack.isEmpty() || stack.pop() != c) {
                return false;
            }
        }
        return stack.isEmpty();
    }
}
```
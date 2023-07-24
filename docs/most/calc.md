## 227. Basic Calculator II
![](img/2022-05-10-22-17-09.png)
---
```ruby
- Hint: 本题和 lc 224 不一样，想想看如果用
    for (char c : s.toCharArray()) {
        ...
        ...
        if (c == '*') {
            do somthing
        }
    }

    想想看 c == '*', 但是你无法知道 * 后面的数字， a * b, 你无法知道b 的值，
    所以我们希望把 sign 传递给下一轮，也就是当你拿到 variable b 的时候，再进行运算
```

---
```java
public class calculatorII_v2 {
    public int calculate(String s) {
        Stack<Integer> stk = new Stack<>();
        String str = s.trim();
        int len = str.length();
        int num = 0;
        char sign = '+';
        for (int i = 0; i < len; i++) {
            char c = str.charAt(i);
            if (c == ' ') {
                continue;
            }
            if (Character.isDigit(c)) {
                num = num * 10 + c - '0';
            }
            if (!Character.isDigit(c) || i == len - 1) {
                if (sign == '+') {
                    stk.push(num);
                } else if (sign == '-') {
                    stk.push(-num);
                } else if (sign == '*') {
                    stk.push(stk.pop() * num);
                } else if (sign == '/') {
                    stk.push(stk.pop() / num);
                }
                sign = c;
                num = 0;
            }
        }

        int res = 0;
        for (Integer i : stk) {
            res += i;
        }
        return res;
    }
}
```


---
```java
class Solution {
    public int calculate(String s) {
        int len = s.length(); 
        if (s == null || len == 0) return 0;
        
        Deque<Integer> stack = new ArrayDeque<>();
        char sign = '+';
        int num = 0;
        for (int i = 0; i < len; i++) {
            char c = s.charAt(i);
            if (c >= '0' && c <= '9') {
                num = num * 10 + c - '0';
            }
            if (c == ' ' && i != len - 1) {
                continue;
            }
            if ( !Character.isDigit(c) || i == len - 1) {
                if (sign == '+') {
                    stack.push(num);
                }
                if (sign == '-') {
                    stack.push(-num);
                }
                if (sign == '*') {
                    stack.push(stack.pop() * num);
                }
                if (sign == '/') {
                    stack.push(stack.pop() / num);
                }
                sign = c;
                num = 0;                
            }
        }
        int total = 0;
        for (Integer i : stack) {
            total += i;
        }
        return total;
    }
}
```
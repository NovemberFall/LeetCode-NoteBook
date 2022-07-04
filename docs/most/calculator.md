## 224. Basic Calculator

- Simple iterative solution by identifying characters one by one. 
  One important thing is that the input is valid, which means the parentheses are 
  always paired and in order. Only 5 possible input we need to pay attention:
  1. digit: it should be one digit from the current number
  2. `'+'`: number is over, we can add the previous number and start a new number
  3. `'-'`: same as above
  4. `'('`: push the previous result and the sign into the stack, set result to 0, 
  just calculate the new result within the parenthesis.
  5. `')'`: pop out the top two numbers from stack, first one is the sign before this pair of 
  parenthesis, second is the temporary result before this pair of parenthesis. We add them 
  together.

- Finally if there is only one number, from the above solution, we haven't add the number to the 
  result, so we do a check see if the number is zero.

```java
public class calculator {
    public static int calculate(String s) {
        int len = s.length();
        if (s == null || len == 0) return 0;

        Stack<Integer> stack = new Stack<>();
        int res = 0;
        int num = 0;
        int sign = 1;
        for (int i = 0; i < len; i++) {
            char c = s.charAt(i);
            if (Character.isDigit(c)) {
                num = num * 10 + c - '0';
            } else if (c == '+') {
                res += sign * num;
                num = 0;
                sign = 1;
            } else if (c == '-') {
                res += sign * num;
                num = 0;
                sign = -1;
            } else if (c == '(') {
                //we push the result first, then sign;
                stack.push(res);
                stack.push(sign);
                //reset the sign and result for the value in the parenthesis
                sign = 1;
                res = 0;
            } else if (c == ')') {
                res += sign * num;
                num = 0;
                res *= stack.pop();
                res += stack.pop();
            }
        }

        // Finally if there is only one number, just add num * sign to res
        if (num != 0) {
            res += sign * num;
        }
        return res;
    }

    public static void main(String[] args) {
        String s = " 2-1 + 2 ";
        System.out.println(calculate(s)); // 3
        s = "(1+(4+5+2)-3)+(6+8)";
        System.out.println(calculate(s)); // 23
    }
}
```


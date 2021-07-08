## 394. Decode String

![](img/2021-07-08-02-14-44.png)

![](img/2021-07-08-02-15-10.png)

```java
class Solution {
    public String decodeString(String s) {
        if (s.length() <= 1) {
            return s;
        }
        char[] arr = s.toCharArray();
        StringBuilder res = new StringBuilder();
        Deque<Integer> countStack = new ArrayDeque<>();
        Deque<String> strStack = new ArrayDeque<>();
        int multi = 0;
        
        for (char c : arr) {
            if (Character.isDigit(c)) {
                multi = multi * 10 + Integer.parseInt(c + "");
            } else if (c == '[') {
                countStack.push(multi);
                strStack.push(res.toString());
                multi = 0;
                res = new StringBuilder();
            } else if (c == ']') {
                StringBuilder temp = new StringBuilder();
                int repeatTimes = countStack.pop();
                for (int i = 0; i < repeatTimes; i++) {
                    temp.append(res);
                }
                res = new StringBuilder(strStack.pop() + temp);
            } else {
                res.append(c);
            }
        }
        return res.toString();
    }
}
```
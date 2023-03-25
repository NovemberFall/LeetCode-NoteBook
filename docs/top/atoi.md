## 8. String to Integer (atoi)
![](img/2022-11-08-17-30-27.png)
![](img/2022-11-08-17-31-00.png)

- [youtube](https://www.youtube.com/watch?v=4eV6f9mmBQE)
---

![](img/2022-11-08-19-01-48.png)

![](img/2022-11-08-19-07-45.png)

![](img/2022-11-08-19-08-35.png)


```java
class Solution {
    public int myAtoi(String s) {
        s = s.trim();
        if (s == null || s.length() == 0) return 0;
        
        int sign = 1;
        int idx = 0;
        char c = s.charAt(0);
        if (c == '+') {
            sign = 1;
            idx++;
        } else if (c == '-') {
            sign = -1;
            idx++;
        }
        
        long sum = 0;
        for (int i = idx; i < s.length(); i++) {
            if (!Character.isDigit(s.charAt(i))) {
                return (int)sum * sign;
            }
            
            sum = sum * 10 + s.charAt(i) - '0';
        
            if (sign == 1 && sum > Integer.MAX_VALUE) {
                return Integer.MAX_VALUE;
            }
            if (sign == -1 && (-1)*sum < Integer.MIN_VALUE) {
                return Integer.MIN_VALUE;
            }            
        }
        return (int) sum * sign;
    }
}
```
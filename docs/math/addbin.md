## 67. Add Binary
![](img/2023-03-11-22-13-42.png)

```ruby

        1  1
   +       1
---------------
     1  0  0



        1  1
   +    1  1
---------------
     1  1  0
```

![](img/2023-03-11-22-15-49.png)
---

```java
class Solution {
    public String addBinary(String a, String b) {
        if (a.isEmpty()) return b;
        if (b.isEmpty()) return a;

        StringBuilder res = new StringBuilder();
        int carry = 0;
        int i = a.length() - 1;
        int j = b.length() - 1;

        while (i >= 0 || j >= 0) {
            int sum = carry;
            if (i >= 0) {
                sum += a.charAt(i) - '0';
                i--;
            }
            if (j >= 0) {
                sum += b.charAt(j) - '0';
                j--;
            }
            res.append(sum % 2);
            carry = sum / 2;
        }

        if (carry == 1) {
            res.append("1");
        }

        return res.reverse().toString();
    }
}
```
---

```py
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        if not a:
            return b
        if not b:
            return a

        res = []
        carry = 0
        i, j = len(a) - 1, len(b) - 1
        while i >= 0 or j >= 0:
            sum = carry
            if i >= 0:
                sum += int(a[i])
                i -= 1
            if j >= 0:
                sum += int(b[j])
                j -= 1
            res.append(str(sum % 2))
            carry = sum // 2
        if carry == 1:
            res.append("1")
        res.reverse()
        return "".join(res)
```
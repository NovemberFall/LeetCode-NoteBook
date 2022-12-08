## 10. Regular Expression Matching
![](img/2022-11-08-21-55-18.png)
---
![](img/2022-12-01-11-51-57.png)

![](img/2022-12-07-22-07-39.png)

```ruby
##  How does "ablmy" stand true to "a*b.*y"?

    a* ---> a
    b ---> b
    .* ----> . . ----> lm
    y ----> y

    In regular expression, single * has no meaning. It has to be *
    Examples:
    a*
    b*
    .*
```

- Note: `*b`  is **invalid**

#### DP

- [youtube video 4:24](https://www.youtube.com/watch?v=fWeTjhgDt3A&t=5s)


```java
/**
  Note:  dp[0][0] = true, becase empty string vs empty string is True
*/
```

---
![](img/2022-11-08-22-33-03.png)

![](img/2022-11-08-22-34-44.png)
---

- [DFS](https://www.youtube.com/watch?v=EdWzV-9lQMw)

```java
class _10_RegularExpressionMatching {
    public boolean isMatch(String s, String p) {
        if (p.length() == 0) {
            return s.length() == 0;
        }
        //Note: "*b" is invalid!!!
        if (p.length() > 1 && p.charAt(1) == '*') {// second char is *
            if (isMatch(s, p.substring(2))) {
                return true;
            }
            if (s.length() > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
                return isMatch(s.substring(1), p);
            }
            return false;
        } else {                                    // second char is not *
            if (s.length() > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
                return isMatch(s.substring(1), p.substring(1));
            }
            return false;
        }
    }
}
```

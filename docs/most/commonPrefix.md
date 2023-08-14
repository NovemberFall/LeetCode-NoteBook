## 14. Longest Common Prefix
![](img/2022-05-12-00-43-26.png)
---
- [Explanation](https://leetcode.com/problems/longest-common-prefix/discuss/3174307/Well-Explained-Code-oror-Using-Strings-in-JAVA#:~:text=Approach,longest%20common%20prefix.)


```java
class LongestCommonPrefix_sort {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        String s1 = strs[0];
        String s2 = strs[strs.length - 1];
        int idx = 0;
        while (idx < s1.length() && idx < s2.length()) {
            if (s1.charAt(idx) == s2.charAt(idx)) {
                idx++;
            } else {
                break;
            }
        }
        return s1.substring(0, idx);
    }
}
```


---
- `int indexOf(String str)` : This method **returns** the index within this string of 
  the **first** occurrence of the specified **substring**. If it does not occur as a 
  substring, **-1** is returned.

```java
public class Test {
    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String pre = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(pre) != 0) {
                pre = pre.substring(0, pre.length() - 1);
                System.out.println(pre);
            /*
                flowe
                flow
                flo
                fl
            */
            }
        }
        return pre;
    }

    public static void main(String[] args) {
        String[] strs = new String[]{"flower", "flight"};
        longestCommonPrefix(strs);
    }
}
```



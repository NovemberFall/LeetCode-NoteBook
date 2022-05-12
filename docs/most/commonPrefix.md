## 14. Longest Common Prefix
![](img/2022-05-12-00-43-26.png)

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



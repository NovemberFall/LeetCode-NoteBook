## 937. Reorder Data in Log Files

![](img/2021-01-31-00-43-48.png)

```ruby
排序规则如下：
    - 字母日志先于数字日志；
    - 字母日志按字母数字顺序排列，先按内容排序，再按标识符排序；
    - 数字日志的顺序保持不变。
```

```java
class Solution {
    public String[] reorderLogFiles(String[] logs) {
        Arrays.sort(logs, (log1, log2) -> {
            String [] split1 = log1.split(" ", 2);
            String [] split2 = log2.split(" ", 2);
            boolean isDigit1 = Character.isDigit(split1[1].charAt(0));
            boolean isDigit2 = Character.isDigit(split2[1].charAt(0));            
            if(!isDigit1 && !isDigit2){
                int cmp = split1[1].compareTo(split2[1]);  
                return (cmp != 0) ? cmp : split1[0].compareTo(split2[0]);                
            }
            return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
        });
        return logs;
    }
}
```

-----

### split(reg, int)


```java
public class split {
    public static void main(String[] args) {
        String [] str = {"dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"};
        String [] temp = str[0].split(" ", 2);
        String part1 = temp[0];
        String part2 = temp[1];
        System.out.println(part1); // dig1
        System.out.println(part2); // 8 1 5 1

        boolean isDigit1 = Character.isDigit(part2.charAt(0)); // true
        System.out.println(isDigit1);
    }
}
```
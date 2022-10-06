## 93. Restore IP Addresses
![](img/2021-07-16-22-21-33.png)

- [中文解释](https://www.youtube.com/watch?v=wLuFymFZORQ&t=957s)
- [英文解释](https://www.youtube.com/watch?v=61tN4YEdiTM)

### Brute Force
```java
class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> res = new ArrayList<>();
        int len = s.length();
        for (int i = 1; i < 4 && i < len - 2; i++) {
            for (int j = i + 1; j < i + 4 && j < len - 1; j++) {
                for (int k = j + 1; k < j + 4 && k < len; k++) {
                    String s1 = s.substring(0, i),
                            s2 = s.substring(i, j),
                            s3 = s.substring(j, k),
                            s4 = s.substring(k, len);
                    if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                        res.add(s1 + "." + s2 + "." + s3 + "." + s4);
                    }

                }
            }
        }
        return res;
    }

    private boolean isValid(String s) {
        if (s.length() > 3 || s.length() == 0 ||
                (s.charAt(0) == '0' && s.length() > 1) || Integer.parseInt(s) > 255) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Solution soln = new Solution();
        String s = "101023";
        List<String> res = soln.restoreIpAddresses(s);
        System.out.println(res);
    }
}
```




---
```java
/*
                   25525511135
      /     /        |                 
     2     25       255
    /   /  \         |     \             \
25.5  25.52 25.525  255.2  255.25        255.255
                                    /          /           \      
                           255.255.1  255.255.11.135  255.255.111.35
*/

class RecursiveSolution {
    public List<String> restoreIpAddresses(String s) {
        List<String> res = new ArrayList<>();
        if (s.length() < 4 || s.length() > 12) {
            return res;
        }
        dfs(res, s, "", 0);
        return res;
    }

    // input: "25525511135"
    //@str 当前剩下的可以取的 string, 假如 已经取了 255，剩余： 25511135
    //@sub 当前取到的数字, 比如 '2',  '25', '255'
    private void dfs(List<String> res, String str, String sub, int index) {
        //str.length() == 0, 所有数字都已经读完
        if (index == 4 && str.length() == 0) {
            res.add(sub.substring(1));
            // 只取到 '1'往后的数值，每一次都给最前面 + '.', 比如： .111.111.111.111
        }

        //与前面不能对调
        if (index == 4 || str.length() == 0) {
            return;
        }
        //1) 一位数
        dfs(res, str.substring(1), sub + "." + str.substring(0, 1), index + 1);

        //2) 两位数 （第一个数字不能为 0， 剩余string长度大于1，两位数
        if (str.charAt(0) != '0' && str.length() > 1) {
            dfs(res, str.substring(2), sub + "." + str.substring(0, 2), index + 1);

            //3) 三位数 (第一个数不能为0 + 剩余string长度大于2 + ‘xxx’ <= 255)
            if (str.length() > 2 && Integer.parseInt(str.substring(0, 3)) <= 255) {
                dfs(res, str.substring(3), sub + "." + str.substring(0, 3), index + 1);
            }
        }
    }
}
```
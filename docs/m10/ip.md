## 93. Restore IP Addresses

![](img/2021-07-16-22-21-33.png)

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

class Solution {
  public List<String> restoreIpAddresses(String s) {
      List<String> res = new ArrayList<>();
      if (s.length() < 4 || s.length() > 12) {
          return res;
      }
      dfs(res, s, "", 0);
      return res;
  }
    
  //    
  //@str 当前剩下的可以取的 string, 假如 已经取了 255，剩余： 25511135
  //@sub 当前取到的数字, 比如 '2',  '25', '255'
  private void dfs(List<String> res, String str, String sub, int level) {
    //str.length() == 0, 所有数字都已经读完
    if (level == 4 && str.length() == 0) {
        res.add(sub.substring(1));
        // 只取到 '1'往后的数值，每一次都给最前面 + '.', 比如： .111.111.111.111
    }

    if (level == 4 || str.length() == 0) {
        return;
    }
    //1) 一位数
    dfs(res, str.substring(1), sub + "." + str.substring(0, 1), level + 1);

    //2) 两位数 （第一个数字不能为 0， 剩余string长度大于1，两位数
    if (str.charAt(0) != '0' && str.length() > 1) {
      dfs(res, str.substring(2), sub + "." + str.substring(0, 2), level + 1);

      //3) 三位数 (第一个数不能为0 + 剩余string长度大于2 + ‘xxx’ <= 255)
      if(str.length() > 2 && Integer.parseInt(str.substring(0, 3)) <= 255){
        dfs(res, str.substring(3), sub + "." + str.substring(0, 3), level+1);
      }
    }
  }
}
```
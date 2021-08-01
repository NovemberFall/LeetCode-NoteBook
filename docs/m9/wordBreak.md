## 139. Word Break | Dictionary Word |
![](img/2021-07-31-15-44-37.png)

### Analysis:

- **Base Case**: `M[0] = true`  empty string
- Induction rule:
  - `M[i]` represents if we can cut the word[0...i] successfully.
  - `M[1]` "b" = false
  - `M[2]` "bo"
    - no cut => check "bo" => false
    - `b   | o` => 
      M[1]   check "o" => false
  - `M[2]` = false || false = false    
  - `M[3` "bob"
    - no cut => check "bob" => true
    - `bo | b`
      `M[2]`   check "b" => false
    - `b  | ob`  
      `M[1]`  check "ob"  => false
  - `M[3]` = true || false || false = true     
 
![](img/2021-07-31-15-45-48.png)
![](img/2021-07-31-15-46-05.png)


```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<wordDict>;
        if(s.length() == 0){
            return true;
        }
        boolean[] dp = new boolean[s.length() + 1];
        //base case, set dp[0] = true => empty string represents true
        dp[0] = true;
        for(int i = 1; i < dp.length; i++){
            for(int j = 0; j < i; j++){
                if(dict.contains(s.substring(j, i)) && dp[j]){
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}
```

# 139. Word Break | Dictionary Word |

```ruby
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words.


Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```


## Analysis:

```ruby
input : “robcatbob”              Dictionary: {“bob”, “cat”, “rob”}


size = 0, "" (empty string)         M[0] = true
size = 1, b                     case0 (no cut):  "" | b
("" is 左大段，can be given by M[0]) AND (b is 右小段, can be given by checking dictionary)
M[1] = false;//because string input[0] == b , b it not in dictionary



size = 2, b o              case0 (no cut):  "" | b o  -> "bo" is the dictionary or not(NO)
("" is 左大段，can be given by M[0]) AND (b o is 右小段, can be given by checking dictionary)

                           case1 (cut):  b | o  
(b is 左大段，can be given by M[1]) AND (o is 右小段, can be given by checking dictionary)
M[2] = (case0 || case1) = (false || false) == false;



size = 3 b o b     case0 (no cut):  "" | b o b -> "bob" is in the dictionary or not(Yes)
("" is 左大段，can be given by M[0]) AND (b o b is 右小段, can be given by checking dictionary)

                           case1 (cut):  b | o b
(b is 左大段，can be given by M[1], 历史上数据告诉你) AND (o b is 右小段, can be given by checking dictionary)
                           case2 (cut):  b o | b
(b o is 左大段，can be given by M[2], 历史上数据告诉你) AND (b is 右小段, can be given by checking dictionary)
M[3] = (case0 || case1 || case3) = (true || false || false) == true;



Base case: M[0] (empty string) = true
Induction rule: M[i] =      OR {M[j] AND substring[j, i) is in the dictionary}
                    j = 0 ... i - 1
```



```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        if(s.length() == 0){
            return true;
        }
        boolean[] dp = new boolean[s.length() + 1];
        //base case, set dp[0] = true => empty string represents true
        dp[0] = true;
        for(int i = 1; i < dp.length; i++){
            for(int j = 0; j < i; j++){
                if(wordDict.contains(s.substring(j, i)) && dp[j]){
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}
```





## 一个变种题目：

```java
public class Solution {
  public boolean canBreak(String input, String[] dict) {
    // Write your solution here
    Set<String> set = toSet(dict);
    boolean[] dp = new boolean[input.length() + 1];
    //asume empty stirng is M[0] = true;
    dp[0] = true;
    for(int i = 1; i < dp.length; i++){
      for(int j = 0; j < i; j++){
        if(set.contains(input.substring(j, i)) && dp[j]){
          dp[i] = true;
          break;
        }
      }
    }
    return dp[input.length()];
  }

  private Set<String> toSet(String[] dict){
    Set<String> set = new HashSet<>();
    for(String s : dict){
      set.add(s);
    }
    return set;
  }
}
```
# 392. Is Subsequence

```ruby
Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by
deleting some (can be none) of the characters without disturbing the relative positions 
of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to 
check one by one to see if T has its subsequence. In this scenario, 
how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
```



## Approach:

```ruby

     0 1 2                   0 1 2 3 4 5
s = [a b c]             t = [a h b g d c]
    iS->                    jT->

if (s.charAt(iS) == t.charAt(jT)),   move iS++  ,  iT++
otherwise,   move iT++

假如 iS 遍历到end, represent s is the required subsequence of t,
否则 return false
```


```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        if(s == null || t == null || t.length() < s.length()){
            return false;
        }
        if(s.length() == 0){//if s == "", which is an empty string
            return true;
        }
        int indexS = 0;
        int indexT = 0;
        while(indexT < t.length()){
            if(t.charAt(indexT) == s.charAt(indexS)){
                indexS++;
                if(indexS == s.length()){
                    return true;
                }
            }
            indexT++;
        }
        return false;
    }
}
```


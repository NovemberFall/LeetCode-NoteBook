## 472. Concatenated Words

![](img/2022-04-19-23-11-50.png)

- [Do you still remember how did you solve this problem?](https://leetcode.com/problems/word-break/)
  - [139. Word Break](https://leetcode.com/problems/word-break/)

- If you do know one optimized solution for above question is using **DP**, 
  this problem is just one more step further. We iterate through each `word`
  and see if it can be formed by using other `words`.

- Of course it is also obvious that a `word` can only be formed by 
  `words` shorter than it. 
  So we can first sort the input by length of each `word`, 
  and only try to form one `word` by using `words` in front of it.

```java
class Solution {
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        List<String> res = new ArrayList<>();
        if (words == null || words.length == 0) {
            return res;
        }
        
        Arrays.sort(words, (a, b) -> (
            a.length() - b.length()
        ));
        
        Set<String> preWords = new HashSet<>();
        for (String word : words) {
            if (canForm(word, preWords)) {
                res.add(word);
            }
            preWords.add(word);
        }
        return res;
    }
    
    private boolean canForm(String word, Set<String> dict) {
        if (dict.isEmpty()) {
            return false;
        } 
        int len = word.length();
        boolean [] dp = new boolean [len + 1];
        dp[0] = true; // set empty string to be true
        for (int i = 1; i < dp.length; i++) {
            for (int j = 0; j < i; j++) {
                if (dict.contains(word.substring(j, i)) && dp[j]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[len];
    }
}
```
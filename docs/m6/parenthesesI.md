# 22. Generate Parentheses | DFS (All Permutations Of Parentheses I)

```ruby
Given n pairs of parentheses, write a function to generate all combinations of 
well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

---


## Analysis:

- Time = $$O(2^{2n}*2n)$$
- Extra space = O(n)



```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        dfs(sb, 0, 0, n, result);
        return result;
    }
    
    private void dfs(StringBuilder sb, int left, int right, int n, 
                     List<String>result){
        if(left == n && right == n){
            result.add(sb.toString());
            return;
        }
        
        if(left < n){
            sb.append("(");
            dfs(sb, left+1, right, n, result);
            sb.deleteCharAt(sb.length() - 1);
        }
        
        if(right < left){
            sb.append(")");
            dfs(sb, left, right+1, n, result);
            sb.deleteCharAt(sb.length()-1);
        }
    }
}
```





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

- `n` storres total number of `pair of ()` need to add. 
  So total levels is  `2 * n`
- `l` stores the number of left parenthesis `(` **added so far**
- `r` stores the number of right parenthesis `)` **added so far**
- `soluPrefix`: solution so far

- what does it store on each level?
  - six levels, each level considers one position (in which there will be only one parenthesis added
    in this position)
- How many different states should we try to put on this level?
  - **two**, either left or right parenthesis
  
---
![](img/2021-05-31-18-25-11.png)
---

- Because there are `2n` level in the recursion tree, and it's a binary
  tree. Thus, there are at most $$2^{2n}$$
- $$Time = O(2^{2n}*2n)$$
- Space = O(2n)

---

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        StringBuilder soluPrefix = new StringBuilder();
        dfs(soluPrefix, 0, 0, n, result);
        return result;
    }
    
    private void dfs(StringBuilder soluPrefix, int left, int right, int n, 
                     List<String>result){
        if(left == n && right == n){
            result.add(soluPrefix.toString());
            return;
        }
        
        if(left < n){
            soluPrefix.append("(");
            dfs(soluPrefix, left+1, right, n, result);
            soluPrefix.deleteCharAt(soluPrefix.length() - 1);
        }
        
        if(right < left){
            soluPrefix.append(")");
            dfs(soluPrefix, left, right+1, n, result);
            soluPrefix.deleteCharAt(soluPrefix.length()-1);
        }
    }
}
```





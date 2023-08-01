## 22. Generate Parentheses | DFS (All Permutations Of Parentheses I)
![](img/2023-01-26-16-54-58.png)

```ruby
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
![](img/2023-01-26-20-16-26.png)
---

- [中文教程](https://leetcode.cn/problems/generate-parentheses/solution/hui-su-suan-fa-by-liweiwei1419/)

![](img/2023-08-01-00-50-23.png)

---
```java
class GenerateParentheses_v2 {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        if (n == 0) {
            return res;
        }
        StringBuilder soluPrefix = new StringBuilder();
        dfs(soluPrefix, 0, 0, n, res);
        return res;
    }

    private void dfs(StringBuilder soluPrefix, int left, int right, int n, List<String> res) {
        if (left == n && right == n) {
            res.add(soluPrefix.toString());
            return;
        }

        // 剪枝（如图，左括号可以使用的个数严格大于右括号可以使用的个数，才剪枝，注意这个细节）
        if (left < right) {
            return;
        }

        if (left < n) {
            soluPrefix.append("(");
            dfs(soluPrefix, left + 1, right, n, res);
            soluPrefix.deleteCharAt(soluPrefix.length() - 1);
        }

        if (right < n) {
            soluPrefix.append(")");
            dfs(soluPrefix, left, right + 1, n, res);
            soluPrefix.deleteCharAt(soluPrefix.length() - 1);
        }
    }

    public static void main(String[] args) {
        GenerateParentheses_v2 generateParentheses = new GenerateParentheses_v2();
        List<String> res = generateParentheses.generateParenthesis(3);
        System.out.println(res);// [ ((())), (()()), (())(), ()(()), ()()() ]
    }
}
```





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





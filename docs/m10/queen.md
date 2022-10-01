## 51. N-Queens

![](img/2021-07-09-22-51-35.png)

![](img/2021-07-09-23-20-18.png)

![](img/2021-07-10-11-34-33.png)

- [参考教程](https://leetcode.cn/problems/n-queens/solution/gen-ju-di-46-ti-quan-pai-lie-de-hui-su-suan-fa-si-/)
---

- [youtube video](https://www.youtube.com/watch?v=_ey1pyQy7Bg)

```java
/*

[0, 0] [0, 1] [0, 2] [0, 3]

[1, 0] [1, 1] [1, 2] [1, 3]

[2, 0] [2, 1] [2, 2] [2, 3]

[3, 0] [3, 1] [3, 2] [3, 3]

*/

class Solution {
    Set<Integer> col = new HashSet<>();
    Set<Integer> main = new HashSet<>();    
    Set<Integer> sub = new HashSet<>();
    
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        if (n <= 0) {
            return res;
        }
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        dfs(0, n, res, board);
        return res;
    }
    
    private void dfs(int row, int n, List<List<String>>res,
                     char[][] board) {
        if (row == n) {
            List<String> tmp = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                tmp.add(String.valueOf(board[i]));
            }
            res.add(tmp);
        }
        
        for (int i = 0; i < n; i++) {
            if (!col.contains(i) && !main.contains(row - i) 
                && !sub.contains(row + i)) {
                
                col.add(i);
                main.add(row - i);
                sub.add(row + i);
                board[row][i] = 'Q';
                
                dfs(row + 1, n, res, board);
                
                board[row][i] = '.';
                sub.remove(row + i);
                main.remove(row - i);
                col.remove(i);
            }
        }        
    }
}
```
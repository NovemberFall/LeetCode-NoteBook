## 52. N-Queens II

![](img/2021-07-10-14-12-54.png)
---

```java
public class _52_NQueens_II {
    public int totalNQueens(int n) {
        int[] res = new int[]{0};
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        dfs(res, 0, n, board);
        return res[0];
    }

    private void dfs(int[] res, int rowIndex, int n, char[][] board) {
        if (rowIndex == n) {
            res[0]++;
            return;
        }

        for (int colIndex = 0; colIndex < n; colIndex++) {
            if (isValid(rowIndex, colIndex, n, board)) {
                board[rowIndex][colIndex] = 'Q';
                dfs(res, rowIndex + 1, n, board);
                board[rowIndex][colIndex] = '.';
            }
        }
    }

    private boolean isValid(int rowIndex, int colIndex, int n, char[][] board) {
        for (int i = 0; i < n; i++) {
            if (board[i][colIndex] == 'Q') {
                return false;
            }
        }

        for (int i = rowIndex - 1, j = colIndex - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') {
                return false;
            }
        }

        for (int i = rowIndex - 1, j = colIndex + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        _52_NQueens_II nQueens_ii = new _52_NQueens_II();
        int res = nQueens_ii.totalNQueens(6);
        System.out.println(res); // 4
    }
}
```


---
```java
/*

[0, 0] [0, 1] [0, 2] [0, 3]

[1, 0] [1, 1] [1, 2] [1, 3]

[2, 0] [2, 1] [2, 2] [2, 3]

[3, 0] [3, 1] [3, 2] [3, 3]

*/

class Solution {
    public int res = 0;
    Set<Integer> col = new HashSet<>();
    Set<Integer> main = new HashSet<>();
    Set<Integer> sub = new HashSet<>();
    
    public int totalNQueens(int n) {
        if (n <= 0) {
            return res;
        }       
        dfs(0, n);
        return res;
    }
    
    private void dfs(int row, int n) {
        if (row == n) {
            res++;
            return;
        }
        
        for (int i = 0; i < n; i++) {
            if (!col.contains(i) && !main.contains(row - i) 
                && !sub.contains(row + i)) {
                
                col.add(i);
                main.add(row - i);
                sub.add(row + i);
                
                dfs(row + 1, n);
                
                sub.remove(row + i);
                main.remove(row - i);
                col.remove(i);
            }
        }
    }
}
```
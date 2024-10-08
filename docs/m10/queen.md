## 51. N-Queens

![](img/2021-07-09-22-51-35.png)

![](img/2021-07-09-23-20-18.png)

![](img/2021-07-10-11-34-33.png)

- [参考教程](https://leetcode.cn/problems/n-queens/solution/gen-ju-di-46-ti-quan-pai-lie-de-hui-su-suan-fa-si-/)
---
- [中文教程](https://leetcode.cn/problems/n-queens/solution/dai-ma-sui-xiang-lu-51-n-queenshui-su-fa-2k32/)

- [youTuBe video](https://www.youtube.com/watch?v=E8A9m8xAin0)

```java
public class _51_NQueens {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        dfs(res, 0, n, board);
        return res;
    }

    private void dfs(List<List<String>> res, int rowIndex, int n, char[][] board) {
        if (rowIndex == n) {
            List<String> level = new ArrayList<>();
            for (char[] arr : board) {
                StringBuilder sb = new StringBuilder();
                sb.append(arr);
                level.add(sb.toString());
            }
            res.add(level);
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
        for (int i = 0; i < rowIndex; i++) {
            if (board[i][colIndex] == 'Q') {
                return false;
            }
        }

        // check Diagonal
        for (int i = rowIndex - 1, j = colIndex - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') {
                return false;
            }
        }

        // check negative Diagonal
        for (int i = rowIndex - 1, j = colIndex + 1; i >= 0 && j < n ; i--, j++) {
            if (board[i][j] == 'Q') {
                return false;
            }
        }

        return true;
    }
}
```

---
- [中文教程2](https://leetcode.cn/problems/n-queens/solution/gen-ju-di-46-ti-quan-pai-lie-de-hui-su-suan-fa-si-/)

---
- [youtube video](https://www.youtube.com/watch?v=_ey1pyQy7Bg)

---


#### Python

```py
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []
        board = [['' for _ in range(n)] for _ in range(n)]
        for i in range(n):
            for j in range(n):
                board[i][j] = '.'

        self.dfs(res, board, n, 0)
        return res

    def dfs(self, res:list[list[str]], board: list[list[str]], n: int, rowIndex: int) -> None:
        if rowIndex == n:
            level = []
            for row in board:
                sb = []
                sb.append("".join(row))
                level.append("".join(sb))
            res.append(level)
            return

        for colIndex in range(n):
            if self.isValid(rowIndex, colIndex, n, board):
                board[rowIndex][colIndex] = 'Q'
                self.dfs(res, board, n, rowIndex + 1)
                board[rowIndex][colIndex] = '.'

    def isValid(self, rowIndex, colIndex, n, board):
        for i in range(rowIndex):
            if board[i][colIndex] == 'Q':
                return False

        i, j = rowIndex - 1, colIndex - 1
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1
            
        i, j = rowIndex - 1, colIndex + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1
        
        return True
```

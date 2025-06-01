## 79. Word Search

![](img/2022-01-31-22-46-53.png)

![](img/2022-01-31-22-47-06.png)

---
```java
class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (dfs(board, i, j, word, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean dfs(char[][] board, int i, int j, String word, int index) {
        if (index == word.length()) {
            return true;
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word.charAt(index)
                || board[i][j] == '*') {
            return false;
        }

        char tmp = board[i][j];
        board[i][j] = '*';
        boolean found = dfs(board, i + 1, j, word, index + 1) ||
                dfs(board, i, j + 1, word, index + 1) ||
                dfs(board, i - 1, j, word, index + 1) ||
                dfs(board, i, j - 1, word, index + 1);
        board[i][j] = tmp;
        return found;
    }
}

```

---

```py
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n = len(board), len(board[0])
        for i in range(m):
            for j in range(n):
                if self.dfs(board, i, j, word, 0):
                    return True
        return False

    def dfs(self, board: List[List[str]], i: int, j: int, word: str, index: int) -> bool:
        if index == len(word):
            return True

        if (i < 0 or i >= len(board)) or (j < 0 or j >= len(board[0])) or board[i][j] != word[index]:
            return False

        tmp = board[i][j]
        board[i][j] = '*'

        res = (self.dfs(board, i + 1, j, word, index + 1) or
               self.dfs(board, i, j + 1, word, index + 1) or
               self.dfs(board, i - 1, j, word, index + 1) or
               self.dfs(board, i, j - 1, word, index + 1))

        board[i][j] = tmp
        return res
```

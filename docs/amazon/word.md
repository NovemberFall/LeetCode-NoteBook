## 79. Word Search

![](img/2022-01-31-22-46-53.png)

![](img/2022-01-31-22-47-06.png)

---

- Note: **The same letter cell may not be used more than once.**
  - 因此在这里需要给visited 的element, 做上标记

![](img/2022-02-08-11-34-06.png)
---
```java
public class _79_WordSearch {
    public boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        boolean[][] visited = new boolean[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                boolean checked = dfs(board, i, j, word, 0, visited);
                if (checked) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean dfs(char[][] board, int i, int j, String word, int index, boolean[][] visited) {
        if (index == word.length()) {
            return true;
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length|| visited[i][j] || 
                                                        board[i][j] != word.charAt(index) ) {
            return false;
        }

        visited[i][j] = true;
        boolean found = dfs(board, i + 1, j, word, index + 1, visited) ||
                        dfs(board, i, j + 1, word, index + 1, visited) || 
                        dfs(board, i - 1, j, word, index + 1, visited) ||
                        dfs(board, i, j - 1, word, index + 1, visited);
        visited[i][j] = false;
        return found;
    }

    public static void main(String[] args) {
        _79_WordSearch wordSearch = new _79_WordSearch();
        char[][] board = new char[][]{
                {'A', 'B', 'C', 'E'}, {'S', 'F', 'C', 'S'},
                {'A', 'D', 'E', 'E'}
        };
        boolean res = wordSearch.exist(board, "SEE");
        System.out.println(res);
    }
}
```



---
```java
class Solution {
    private static boolean[][] visited;
    public boolean exist(char[][] board, String word) {
        if (board == null || board.length == 0 
                          || board[0].length == 0) {
            return false;
        } 
        if (word == null || word.length() == 0) {
            return true;
        }
        int m = board.length, n = board[0].length;
        for (int i = 0; i < m; i ++ ) {
            for (int j = 0; j < n; j++) {
                if (dfs(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    private boolean dfs(char[][] board, String word, 
                       int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || 
                                                        board[i][j] != word.charAt(index) ) {
            return false;
        }

        char tmp = board[i][j];
        board[i][j] = '*';
        boolean found = 
            dfs(board, word, i + 1, j, index + 1) ||
            dfs(board, word, i, j + 1, index + 1) ||
            dfs(board, word, i - 1, j, index + 1) ||
            dfs(board, word, i, j - 1, index + 1);
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

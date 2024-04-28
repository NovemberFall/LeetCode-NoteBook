## 417. Pacific Atlantic Water Flow
![](img/2024-03-10-16-22-58.png)
![](img/2024-03-10-16-23-12.png)

- if the neighboring cell's height is **less than or equal** to the current cell's height. Water can flow from any cell adjacent to an ocean 
  into the ocean.

- [中文教程](https://www.youtube.com/watch?v=blOc3KlAR2I)

---

```java
class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> res = new ArrayList<>();
        int m = heights.length, n = heights[0].length;
        if (m == 0) return res;
        
        boolean[][] pacific = new boolean[m][n];
        boolean[][] atlantic = new boolean[m][n];
        
        // top and bottom
        for (int col = 0; col < n; col++) {
            dfs(heights, 0, col, heights[0][col], pacific);
            dfs(heights, m - 1, col, heights[m - 1][col], atlantic);
        }
        
        // left and right
        for (int row = 0; row < m; row++) {
            dfs(heights, row, 0, heights[row][0], pacific);
            dfs(heights, row, n - 1, heights[row][n - 1], atlantic);
        }
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    List<Integer> cur = new ArrayList<>();
                    cur.add(i);
                    cur.add(j);
                    res.add(cur);
                }
            }
        }
        return res;
    }
    
    private void dfs(int[][] heights, int i, int j, int prevHeight, boolean[][] ocean) {
        if (i < 0 || i >= heights.length || j < 0 || j >= heights[0].length ||
           heights[i][j] < prevHeight || ocean[i][j]) {
            return;
        }
        
        ocean[i][j] = true;
        dfs(heights, i+1, j, heights[i][j], ocean);
        dfs(heights, i, j+1, heights[i][j], ocean);
        dfs(heights, i-1, j, heights[i][j], ocean);
        dfs(heights, i, j-1, heights[i][j], ocean);        
    }
}
```
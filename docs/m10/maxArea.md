## 695. Max Area of Island
![](img/2021-07-26-22-20-33.png)

- 每次调用的时候默认num为1，进入后判断如果不是岛屿，则直接返回0，就可以避免预防错误的情况。
- 每次找到岛屿，则直接把找到的岛屿改成0，这是传说中的沉岛思想，就是遇到岛屿就把他和周围的全部沉没。
- ps：如果能用沉岛思想，那么自然可以用朋友圈思想。

```java
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int max = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                max = Math.max(max, dfs(grid, i, j));
            }
        }
        return max;
    }
    
    private int dfs(int[][] grid, int i, int j) {
        if (i < 0 || j < 0 || i >= grid.length ||
            j >= grid[0].length || grid[i][j] == 0) {
            return 0;
        }
        
        grid[i][j] = 0;
        int num = 1;
        num += dfs(grid, i - 1, j);
        num += dfs(grid, i, j - 1);
        num += dfs(grid, i + 1, j);
        num += dfs(grid, i, j + 1);
        return num;
    }
}
```
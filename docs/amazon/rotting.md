## 994. Rotting Oranges

![](img/2021-02-08-21-36-33.png)

- At the beginning, we find all rotten oranages, put them in a queue, as the 0th layer's node.
- BFS traversing, every node's adjacent node, may be up, down, left and right. 
  Note: be careful, determine the special case where the node is located on the grid boundary
- Since there many be oranages that cannot be rotten, we need to record the number of fresh oranages
  In BFS, every time an oranage is traversed(an oranage is rotting), the number of fresh oranages is 
  reduced by `1`. If the number has not been reduced to `0` when the BFS is ending, that means 
  there are oranages that cannot be rotten.

```java
class Solution {
    public int orangesRotting(int[][] grid) {
        // row column
        int m = grid.length;
        int n = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        
        //count, represent all fresh oranages
        int count = 0;
        
        
        // 遍历二维数组 找出所有的新鲜橘子和腐烂的橘子
        for (int r = 0; r < m; r++) {
            for (int c = 0; c <n; c++) {
                // 新鲜橘子计数
                if (grid[r][c] == 1) {
                    count++;
                    // 腐烂的橘子就放进队列
                } else if (grid[r][c] == 2){
                    // 缓存腐烂橘子的坐标
                    queue.add(new int [] {r, c});
                }
            }
        }
        
        //minute, represent the number of minute
        int minute = 0;
        
    // 如果有新鲜橘子 并且 队列不为空
    // 直到上下左右都触及边界 或者 被感染的橘子已经遍历完        
        while (count > 0 && !queue.isEmpty()) {
            
            // BFS 层级 + 1
            minute++;
            
            // 拿到当前层级的腐烂橘子数量， 因为每个层级会更新队列
            int size = queue.size();
            
            //遍历当前层级的队列
            for (int i = 0; i < size; i++) {
                // 踢出队列（拿出一个腐烂的橘子）
                int [] orange = queue.poll();
                // 恢复橘子坐标
                int r = orange[0];
                int c = orange[1];
                
                //↑ 上邻点 判断是否边界 并且 上方是否是健康的橘子
                if (r - 1 >= 0 && grid[r - 1][c] == 1) {
                    // 感染它 
                    grid[r - 1][c] = 2;
                    // 好橘子 -1 
                    count--;
                    // 把被感染的橘子放进队列 并缓存
                    queue.add(new int[] {r - 1, c});
                }
                if (r + 1 < m && grid[r + 1][c] == 1) {
                    grid[r + 1][c] = 2;
                    count--;
                    queue.add(new int[]{r + 1, c});
                }            
                if (c - 1 >= 0 && grid[r][c - 1] == 1) {
                    grid[r][c - 1] = 2;
                    count--;
                    queue.add(new int[]{r, c - 1});
                }   
                if (c + 1 < n && grid[r][c + 1] == 1) {
                    grid[r][c + 1] = 2;
                    count--;
                    queue.add(new int[]{r, c + 1});
                }                   
            }
        }
        
        if (count > 0) {
            return -1;
        }else {
            return minute;
        }
    }
}
```










































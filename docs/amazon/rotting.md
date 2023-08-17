## 994. Rotting Oranges

![](img/2021-02-08-21-36-33.png)

- At the beginning, we find all rotten oranages, put them in a queue, as the 0th layer's node.
- BFS traversing, every node's adjacent node, may be up, down, left and right. 
  Note: be careful, determine the special case where the node is located on the grid boundary
- Since there many be oranages that cannot be rotten, we need to record the number of fresh oranages
  In BFS, every time an oranage is traversed(an oranage is rotting), the number of fresh oranages is 
  reduced by `1`. If the number has not been reduced to `0` when the BFS is ending, that means 
  there are oranages that cannot be rotten.

- Time Complexity：O(nm)
  - 即进行一次广度优先搜索的时间，其中 n=grid.length, m=grid[0].length

- Space Complexity：O(nm)
  - 需要额外的 dis 数组记录每个新鲜橘子被腐烂的最短时间，大小为 O(nm)，且广度优先搜索中队列里存放的状态最多不会超过 nm 个，
  - 最多需要 O(nm) 的空间，所以最后的空间复杂度为 O(nm)。

- [leetcode discussion](https://leetcode.com/problems/rotting-oranges/discuss/238681/Java-Clean-BFS-Solution-with-comments#:~:text=why%20%22count%2D1%22%20in%20the%20return%3F)
---


```java
class _994_RottingOranges {
    // directions
    int[][] dirs = new int[][]{{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
    public int orangesRotting(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        Queue<int[]> queue = new ArrayDeque<>();

        //count, represent all fresh oranges
        int fresh = 0;

        //traverse 2d array, find out all fresh and rotten oranges
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    // count all fresh oranges
                    fresh++;
                } else if (grid[i][j] == 2){
                    //push rotten oranges into queue
                    queue.offer(new int[]{i, j});
                }
            }
        }

        //minute, represent the number of minute
        int minute = 0;

        // if there are still fresh oranges left, and queue is not empty
        // when fresh_count == 0, you still added this last rotted orange position to the queue,
        // so there would be one more while loop that increments count by one more.
        while (fresh > 0 && !queue.isEmpty()) {

            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cell = queue.poll();
                for (int[] dir : dirs) {
                    int row = cell[0] + dir[0];
                    int col = cell[1] + dir[1];
                    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 2 || grid[row][col] == 0) {
                        continue;
                    }
                    grid[row][col] = 2;
                    fresh--;
                    queue.offer(new int[]{row, col});
                }
            }

            // BFS layer + 1
            minute++;
        }

        return fresh > 0 ? -1 : minute;
    }
}

```










































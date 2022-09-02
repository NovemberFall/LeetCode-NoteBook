## 489. Robot Room Cleaner
![](img/2022-08-30-10-22-15.png)
![](img/2022-08-30-10-22-30.png)

- [DFS Logical Thinking     |      We should not consider the direction as X and Y. We should consider it as row and column.](https://leetcode.com/problems/robot-room-cleaner/discuss/153530/DFS-Logical-Thinking)
- [backtracking video](https://www.youtube.com/watch?v=OyaHANapsh0&t=138s)

```java
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * interface Robot {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     public boolean move();
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     public void turnLeft();
 *     public void turnRight();
 *
 *     // Clean the current cell.
 *     public void clean();
 * }
 */

class Solution {
    /*
    0 => going up
    1 => going right
    2 => going down
    3 => going left
    */    
    int[][] Directions = new int[][]{{-1,0},{0,1},{1,0},{0,-1}};
    public void cleanRoom(Robot robot) {
        dfs(robot, 0, 0, 0, new HashSet<>());
    }
    
    private void dfs(Robot robot, int x, int y, int curDirection, Set<String> cleaned) {
        robot.clean();
        cleaned.add(x + " " + y);
        for (int i = 0; i < 4; i++) {
            int newX = x + Directions[curDirection][0];
            int newY = y + Directions[curDirection][1];            
            if (!cleaned.contains(newX + " " + newY) && robot.move()) {
                dfs(robot, newX, newY, curDirection, cleaned);
                goBack(robot);
            }
            robot.turnRight();
            curDirection = (curDirection + 1) % 4;
        }
    }
    
    private void goBack(Robot robot) {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }
}
```
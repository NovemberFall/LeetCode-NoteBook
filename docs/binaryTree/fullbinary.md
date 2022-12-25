## Determine If Binary Tree Is Full Tree
![](img/2022-12-24-21-51-44.png)

- 基本概念：
  - A full Binary tree(proper binary tree) is a special type of binary tree in which 
    every parent node/internal node has either **two** or **no** children

### BFS

```java
public class Solution {
    public boolean isFull(TreeNode root) {
        if (root == null) return true;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode cur = queue.poll();
            if (cur.left == null && cur.right == null) {
                continue;
            }
            else if (cur.left == null || cur.right == null) {
                return false;
            }
            else {
                queue.offer(cur.left);
                queue.offer(cur.right);
            }
        }
        return true;
    }
}
```
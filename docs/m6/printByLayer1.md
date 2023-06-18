## 107. Binary Tree Level Order Traversal II
![](img/2022-12-27-11-33-22.png)
---
- 具体分析可以参考 [102. Binary Tree Level Order Traversal](https://novemberfall.github.io/LeetCode-NoteBook/#/m6/printByLayer)

- 唯一不同点在于， `ArrayList.add(0, list)` => 把最先的这一层元素全部加到第一个，然后下一次又加在第一个
- 最后得到 倒叙结果


```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) {
            return res;
        }
        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            List<Integer> level = new ArrayList<>();
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                level.add(cur.val);
                if (cur.left != null) {
                    queue.offer(cur.left);
                }                 
                if (cur.right != null) {
                    queue.offer(cur.right);
                }               
            }
            res.add(level);
        }
        Collections.reverse(res);
        return res;
    }
}
```
## 111. Minimum Depth of Binary Tree
![](img/2022-12-27-22-42-57.png)

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
    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }    
        
        int leftMinNums = minDepth(root.left);
        int rightMinNums = minDepth(root.right);
        
        if (root.left == null || root.right == null) {
            return Math.max(leftMinNums, rightMinNums) + 1;
        }
        
        return Math.min(leftMinNums, rightMinNums) + 1;
    }
}
```
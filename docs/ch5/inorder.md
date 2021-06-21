## 94. Binary Tree Inorder Traversal

![](img/2021-06-20-23-46-23.png)

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
    public List<Integer> inorderTraversal(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        
        List<Integer> res = new ArrayList<>();
        inorder(res, root);
        return res;
    }
    
    private void inorder(List<Integer> res, TreeNode root) {
        if (root == null) {
            return;
        }
        
        inorder(res, root.left);
        res.add(root.val);
        inorder(res, root.right);
    }
}
```
## 145. Binary Tree Postorder Traversal

![](img/2021-06-20-23-58-11.png)

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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) {
            return res;
        }
        
        postorder(res, root);
        return res;
    }
    
    private void postorder(List<Integer> res, TreeNode root) {
        if (root == null) {
            return;
        }
        
        postorder(res, root.left);
        postorder(res, root.right);
        res.add(root.val);
    }
}
```
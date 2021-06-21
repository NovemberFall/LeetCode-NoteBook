## 144. Binary Tree Preorder Traversal

![](img/2021-06-20-23-44-34.png)

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
    public List<Integer> preorderTraversal(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        
        List<Integer> res = new ArrayList<>();      
        preorder(res, root);
        return res;
    }
    
    private void preorder(List<Integer> res, TreeNode root) {
        if (root == null) {
            return;
        }
        res.add(root.val);
        preorder(res, root.left);
        preorder(res, root.right);
    }
}
```
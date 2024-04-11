## 236. Lowest Common Ancestor of a Binary Tree

![](img/2021-07-12-02-58-43.png)

![](img/2021-07-12-02-58-57.png)


- [中文图解](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solutions/240096/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/)

---
```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;
        if (root == p || root == q) {
            return root;            
        }
        
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        
        if (left == null && right != null) {
            return right;
        } else if (right == null && left != null) {
            return left;
        } else if (left != null && right != null) {
            return root;
        } 
        return null; //left == null && right == null
    }
}                                                               
```
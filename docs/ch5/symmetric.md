## 101. Symmetric Tree
![](img/2022-12-27-01-46-56.png)

---


## Analysis:

![](img/2020-05-24-18-06-02.png)


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
    public boolean isSymmetric(TreeNode root) {
        if(root == null){
            return true;
        }
        
        return isSymmetric(root.left, root.right);
    }
    
    private boolean isSymmetric(TreeNode one, TreeNode two){
        if(one == null && two == null){
            return true;
        }else if(one == null || two == null){
            return false;
        }else if(one.val != two.val){
            return false;
        }
        
        return isSymmetric(one.left, two.right)
            && isSymmetric(one.right, two.left);
    }
}
```
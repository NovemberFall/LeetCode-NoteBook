## 101. Symmetric Tree

```ruby
Given a binary tree, check whether it is a mirror of itself 
(ie, symmetric around its center).



For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
```

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
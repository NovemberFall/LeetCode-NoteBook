# 100. Same Tree | Easy

```ruby
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical 
and the nodes have the same value.



Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true



Example 2:
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false



Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```
---

- [reference to 951. Flip Equivalent Binary Trees](https://novemberfall.github.io/LeetCode-Algorithm/m2/tweakTree.html)







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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null){
            return true;
        }else if(p == null || q == null){
            return false;
        }else if(p.val != q.val){
            return false;
        }
        
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
```
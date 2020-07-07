# 104. Maximum Depth of Binary Tree

```ruby
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node 
down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],


    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
```

---

## Analysis:

- [关于recursion tree time and space complexity analysis](https://novemberfall.github.io/LeetCode-NoteBook/#/Recursion/recursionTime)

- 不包括root, 因为递归往下走，往上值传递， return max() 比较左右subtree 的高度， return => 最大高度
- 最后得包含current root, current level的高度 => ans + 1.


- Time = O(n),  n is the total number of nodes in the tree
- Space = O(n), worst case, or O(height)



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
    public int maxDepth(TreeNode root) {
        // if(root == null){
        //     return 0;
        // }
        // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        
        
        return (root == null) ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
```
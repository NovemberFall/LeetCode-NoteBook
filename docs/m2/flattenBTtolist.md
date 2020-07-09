# 114. Flatten Binary Tree to Linked List

```ruby
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
Accepted
```


#### Tree + Recursion: Tree Serialization(序列化，串行化) Problem

- Given a binary tree, flatten it to a linked list in-place


## Approach

- Key points:
  - do a post-order traversal from right to left
  - we need to record the previous node


```ruby
root.right = prev[0];
root.left = null;
prev[0] = root; 



        6
      /    \
   null    null         prev[0] = root, # current root is null

   
        5
      /    \
   null     6        prev[0] = 5, 


        4
      /    \
   null     5         prev[0] = 4, 


        3
      /    \
   null     3        prev[0] = 3, 


        2
      /    \
   null     3         prev[0] = 2, 


        1
      /    \
   null     2        prev[0] = 1, 



Finally, we get

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```




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
    public void flatten(TreeNode root) {
        if(root == null){
            return;
        }
        TreeNode[] prev = new TreeNode[1];
        postOrder_rightToLeft(root, prev);
    }
    
    private void postOrder_rightToLeft(TreeNode root, TreeNode[] prev){
        if(root == null){
            return;
        }
        postOrder_rightToLeft(root.right, prev);
        postOrder_rightToLeft(root.left, prev);
        root.right = prev[0];
        root.left = null;
        prev[0] = root;
    }
}
```



### different return type:

```java
/**
 * public class TreeNode {
 *   public int key;
 *   public TreeNode left;
 *   public TreeNode right;
 *   public TreeNode(int key) {
 *     this.key = key;
 *   }
 * }
 */
public class Solution {
  public TreeNode flatten(TreeNode root) {
    // Write your solution here
    if(root == null){
      return null;
    }
    TreeNode[] prev = new TreeNode[1];
    dfs_postOrder_fromRightToLeft(root, prev);
    return root;
  }

  private void dfs_postOrder_fromRightToLeft(TreeNode root, TreeNode[] prev){
    if(root == null){
      return;
    }
    dfs_postOrder_fromRightToLeft(root.right, prev);
    dfs_postOrder_fromRightToLeft(root.left, prev);
    root.right = prev[0];
    root.left = null;
    prev[0] = root;
  }
}
```
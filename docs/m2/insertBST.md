# 701. Insert into a Binary Search Tree


```ruby
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4
```


- Time: O(height)
  - worst case time complexity to insert one value

- In avg case, is `O(log n)` for 1 insert operation since it consists of a test 
  (constant time) and a recursive call (with half of the total number of nodes in the 
  tree to visit), making the problem smaller in constant time. Thus for n insert 
  operations, avg case is O(nlogn). The key is that the operation requieres time 
  proportional to the height of the tree. In average, 1 insert operation is O(logn) but 
  in the worst case the height is O(n) If you're doing n operations, then avg is O(nlgn) 
  and worst O(n^2)



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
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root == null){
            return new TreeNode(val);
        }
        if(root.val > val){
            root.left = insertIntoBST(root.left, val);
        }else if(root.val < val){
            root.right = insertIntoBST(root.right, val);
        }
        return root;
    }
}
```


## more easy to explain

```java
//recursion, easy to understand
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root == null){
            return new TreeNode(val);
        }
        helper(root, val);
        return root;
    }
    
    private void helper(TreeNode root, int val){
        if(root.val < val && root.right == null){
            root.right = new TreeNode(val);
        }else if(root.val > val && root.left == null){
            root.left = new TreeNode(val);
        }else if(root.val > val){
            helper(root.left, val);
        }else{
            helper(root.right, val);
        }
    }
}

```
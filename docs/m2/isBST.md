## 98. Validate Binary Search Tree

```ruby
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```
---

## Analysis:

- Primitive way but very bad in terms of sapce consumption

1. **inorder traverse the tree and store all numbers in an arrayList**
2. iterate over the array to determine, whether `A[i] < A[i + 1]`
   

- Our way:

```ruby
                   10(min=-inf, max =+inf) == root

                   /                      \

            5(min=-inf,max=10)  AND         15

          /         \                     /    \   

2(min=-inf,max=5)   X(min=5,max=10)      12     20
```

- why we set root, `min=-inf, max =+inf`? because we don't know its left child and 
  right child, **we need to know if current level is so far so good**

- Time = O(n)    : since we need to iterate all nodes
- Space = O(height)


---

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
    public boolean isValidBST(TreeNode root) {
        return isValidBst(root, Long.MIN_VALUE, Long.MAX_VALUE);        
    }
    
    private boolean isValidBst(TreeNode root, long min, long max){
        if(root == null){
            return true;
        }
                
        if(root.val > min && root.val < max){
            return isValidBst(root.left, min, root.val)
                && isValidBst(root.right, root.val, max);
        } else {
            return false;
        }
    }    
}
```


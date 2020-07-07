# 124. Binary Tree Maximum Path Sum  
#  Maximum Path Sum Binary Tree II

```ruby
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some 
starting node to any node in the tree along the parent-child connections. 
The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
```


# Analysis:

- example:

```ruby
    -1

  /    \

2      11

     /    \

    6     -14

one example of paths could be -14 -> 11 -> -1 -> 2

another example could be the node 11 itself

The maximum path sum in the above binary tree is 6 + 11 + (-1) + 2 = 18
```

Approach:
1. left child and right child will do:
  - left: maximum "root to leaf" path sum of left subtree
  - right: maximum "root to leaf" path sum of right subtree
2. the content of current layer:
  - calculate left + right + root.vla
  - update globalMax if possible
3. report to the parent node
  - max path  sum from root to leaf
  - for example:  return max(left, right) + root.val    (be aware with the case if one side child == null)


## 三部曲

1. What do you expect from your leftChild / rightChild? (usually it is the return type of the
   recursion function)
   - left: max single path in my left subtree that starts from leftChild
   - right: max single path in my right subtree that starts from rightChild
2. What do you want to do in the current layer?
   - update globalMax with max(left, 0) + max(right, 0) + root.value
3. What do you want to report to your parent? (same as Q1 == Q3)
   - return max(left, right) + root.value


**Key Point:**

1. 左树的max, 右树的的max，当前层：更新，返回的时候：要和第一个物理意义一样：返回当前的max + root.val
 基于这一点，一定要在最后return "current" + root.key, 必须保持递归's state 前后一致
 For example: if current.val = 1, root.val = 1, => return current.val + root.val

**Additional data structure**
1. create a new Array[1] to sotre globalMax
  - since java pass object by value, 子函数修改的是那份copy。 而用array is an object，通过array的reference修改array里面的值。 
  - so you can't pass primitive value, 简单来说int传入值，“int[]传入的是指针”
  - 也可以传递一个 Integer object, 我们要确保动态传递,
 
 
 Time: O(n)
 Space: O(height), worst case
 
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
    public int maxPathSum(TreeNode root) {
        if(root == null){
            return Integer.MIN_VALUE;
        }
        int[] max = new int[1];
        max[0] = Integer.MIN_VALUE;
        helper(root, max);
        return max[0];
    }
    private int helper(TreeNode root, int[] max){
        if(root == null){
            return 0;
        }
        int left = helper(root.left, max);
        int right = helper(root.right, max);
        left = left < 0 ? 0 : left; // 所以本题当 当初 root.val = -10, 当递归返回到当前层，
        //触发这句条件，所以root.val = -10 < 0, root.val = 0, 就被0 覆盖掉
        right = right < 0 ? 0 : right;
        max[0] = Math.max(max[0], left + right + root.val);
        return Math.max(left, right) + root.val;
    }
}
 ```
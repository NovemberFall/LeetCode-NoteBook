## Maximum Path Sum Binary Tree I

```ruby
Given a binary tree in which each node contains an integer number. 
Find the maximum possible sum from one leaf node to another leaf node. 
If there is no such path available, return Integer.MIN_VALUE(Java)/INT_MIN (C++).

Examples

  -15

  /    \

2      11

     /    \

    6     14

The maximum path sum is 6 + 11 + 14 = 31.

How is the binary tree represented?

We use the level order traversal sequence with a special symbol "#" denoting the null node.

For Example:

The sequence [1, 2, 3, #, #, 4] represents the following binary tree:

    1

  /   \

 2     3

      /

    4
```
---



## 三部曲

1. What do you expect from your leftChild / rightChild?
   - left: max single path in my left subtree (from leftChild all the way down to a leaf)
   - right: max single path in my right subtree (from rightChild all the way down to a leaf)
2. What do you want to do in the current layer?
   - if both children are not null, update global_max with left + right + root.value
3. What do you want to report to your parent? (same as Q1 == Q3)
   - return max(left, right) + root.value



``` 
Corner Case:
   1
 /   \
3     4

   1
/     \
null  -3 
if one side child is null  =>  other child + root.val

   1
/     \
4    null

    1
 /     \
null  null 
if all child is null   =>     0 + 0,  since we can set base case:  if(root == null) return 0;
```


 
 - Time: O(n)
 - Space: O(height), worst case

---

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
  public int maxPathSum(TreeNode root) {
    // Write your solution here
    if(root == null){
      return Integer.MIN_VALUE;
    }
    int[] max = new int[]{Integer.MIN_VALUE};
    helper(root, max);
    return max[0];
  }

  private int helper(TreeNode root, int[] max){
    if(root == null){
      return 0;
    }
    int leftCost = helper(root.left, max);
    int rightCost = helper(root.right, max);//step1

    int curSum = leftCost + rightCost + root.key;
    if(max[0] < curSum && (root.left != null && root.right != null)){
      max[0] = curSum;//step2
    }
    //Return the maximum (root to leaf path) cost
    if(root.left == null){ //step3
      return root.key + rightCost;
    }else if(root.right == null){
      return root.key + leftCost;
    }
    return Math.max(leftCost, rightCost) + root.key;

  }
}
```
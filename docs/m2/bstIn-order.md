# 94. Binary Tree Inorder Traversal

```java
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
```

- Analysis:

```java
Implement an iterative, in-order traversal of a given binary tree, return the list of keys of each node in the tree as it is in-order traversed.

Examples

        5

      /    \

    3        8

  /   \        \

1      4        11

In-order traversal is [1, 3, 4, 5, 8, 11]

Corner Cases

What if the given binary tree is null? Return an empty list in this case.
```



 
                10
              /    \
             7      15
           / \      / \
          5   9    12  17  

---
Stack -> 10 -> 7 -> 5
List ->

Stack -> 10 -> 7 -> 
List -> 5

Stack -> 10 -> 
List -> 5 -> 7

Stack -> 
List -> 5 -> 7 -> 10

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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorderList = new ArrayList<>();
        if(root == null){
            return inorderList;
        }
        Deque<TreeNode> stack = new ArrayDeque<>();
        // stack -> [right current left] ;  List -> [left current right]
        TreeNode current = root;
        while(current != null || !stack.isEmpty()){
            if(current != null){
                stack.offerFirst(current);
                current = current.left;
            }else{
                current = stack.pollFirst();
                inorderList.add(current.val);
                current = current.right;
            }
        }
        return inorderList;
    }
}
```

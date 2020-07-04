# 144. Binary Tree Preorder Traversal

```java
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
```


- analysis:

```
Implement an iterative, pre-order traversal of a given binary tree, return the list of keys of each node in the tree as it is pre-order traversed.

Examples

        5

      /    \

    3        8

  /   \        \

1      4        11

Pre-order traversal is [5, 3, 1, 4, 8, 11]

Corner Cases

What if the given binary tree is null? Return an empty list in this case.
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
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> preOrderList = new ArrayList<>();
        if(root == null){
            return preOrderList;
        }
        Deque<TreeNode> stack = new ArrayDeque<>(); //stack: push [1->2->3],  pop from [1->2->] => 3
        //1st: push root into stack, since stack is LIFO, thus, we need to get the root's value firstly( since pre-oreder)
        stack.offerFirst(root); //[root]

        while(!stack.isEmpty()){
            TreeNode current = stack.pollFirst(); // 1st loop:  [root] =>  []  root
            /* 
            Note: the left subtree should be traversed before right subtree, we got stack is LIFO
            we should push right node into stack first
            so for next step: the top element of the stack is the left subtree
             */
            if(current.right != null){
                stack.offerFirst(current.right);
            }
            if(current.left != null){
                stack.offerFirst(current.left);
            }
            preOrderList.add(current.key);
            /* 
            stack => root             ;       list => 
            stack =>                  ;       list => root
            stack => right            ;       list => root 
            stack => right left       ;       list => root 
            stack => right            ;      list => root left
            stack =>                  ;       list => root left right
             */
        }
        return preOrderList;
    }
}
```




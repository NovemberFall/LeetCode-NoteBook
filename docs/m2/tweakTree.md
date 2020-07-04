# 951. Flip Equivalent Binary Trees

```ruby
For a binary tree T, we can define a flip operation as follows: choose any node, 
and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make 
X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.  
The trees are given by root nodes root1 and root2.
```

![](img/2020-07-03-01-05-18.png)


```ruby
                                        8			
                                    /       \			
                                    4       5
                                    |
                                    7
 case1.       8a      AND      8b       OR   case 2    8a      AND      8b    
            /    \           /    \ 			     /    \           /     \      
       4a    5a             4b     5b 			     4a    5a          5b  4b
        |			        |					     |			            |
        7			        7					     7	 		            7


=====================================================================
        
                                    isSTRUCID (One,  two) 
                           /  \ 			                  /  \  
isstucid(one.L, two.L) isstucid(one.R, two.R)  isStruc(one.l, two.r) isStrucId(one.R, two.L);
How many levels in this recursion tree  ==   how many levels in the original tree.
Why in the worst case, the recursion tree  =	log_2(n)	  levels?
1, 4, 16, 4^log_2(n)


4^(log_2(n))  = 2^(2log_2(n)) = 2^(log_2(n^2)) =   n^2

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
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        if(root1 == null && root2 == null){
            return true;
        }else if(root1 == null || root2 == null){
            return false;
        }else if(root1.val != root2.val){
            return false;
        }
        return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
            ||
            flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
    }
}
```
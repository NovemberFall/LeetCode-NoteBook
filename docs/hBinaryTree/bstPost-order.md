# 145. Binary Tree Postorder Traversal

```ruby
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
```

- [可以先参考pre-order print](https://novemberfall.github.io/LeetCode-NoteBook/#/m2/bstPre-order)


## Analysis:



- PostOrder :



```ruby
                1

            /       \
           
          2            3
         
        /  \          /  \

       4    5        6    7
```

- PostOrder:     <u>4 5 2 </u>  <u> 6 7 3</u>  1


---





```ruby
                1

            /       \
           
          2            3
         
        /  \          /  \

       4    5        6    7
```

- PreOrder:     1  <u>2 4 5 </u>  <u> 3 6 7</u> 



- 先遍历右子树  =>      1  <u>3 7 6 </u>  <u> 2 5 4</u>   
  
- Calling `Collections.reverse(1 3 7 6 2 5 4)` => [4 5 2 6 7 3 1]

- 得到 PostOrder:  <u>4 5 2 </u>  <u> 6 7 3</u>  1

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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if(root == null){
            return result;
        }
        Deque<TreeNode> stack = new LinkedList<TreeNode>();
        stack.offerFirst(root);
        while(!stack.isEmpty()){
            TreeNode cur = stack.pollFirst();
            result.add(cur.val);
            if(cur.left != null){
                stack.offerFirst(cur.left);
            }
            if(cur.right != null){
                stack.offerFirst(cur.right);
            }
        }
        Collections.reverse(result);
        
        return result;
    }
}
```
# 199. Binary Tree Right Side View

```ruby
Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.


Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

---


## Analysis:

- 本题我的解决办法： BFS

- 尽管Time Complexity 并不是很好看，但便于理解

- 利用queue, FIFO, 每次call ArrayList.add(current.val)， 并且在队列的第一个元素

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
    public List<Integer> rightSideView(TreeNode root) {
        if(root == null){
            return new ArrayList<>();
        }
        List<Integer> list = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList();
        queue.offer(root);
        
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i=0; i<size; i++){
                TreeNode cur = queue.poll();
                if(i == 0){
                    list.add(cur.val);
                }
                if(cur.right != null){
                    queue.offer(cur.right);
                }
                
                if(cur.left != null){
                    queue.offer(cur.left);
                }
            }
        }
        return list;
    }
}
```

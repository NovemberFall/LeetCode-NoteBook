# 105. Construct Binary Tree from Preorder and Inorder Traversal

```ruby
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
```


## Analysis

```ruby
         10
       /    \
      5      15
     / \    /  \
    2   7  12  20

index:      0    1    2    3    4    5    6
preOrder:   10   5    2    7    15   12   20
inOrder:    2    5    7    10   12   15   20

step 1:
create a Map<Integer, Integer>, map<inOrder[i], index>

map<2,  0>
map<5,  1>
map<7,  2>
map<10, 3>
map<12, 4>
map<15, 5>
map<20, 6>
```

- Time = O(n)
- Space = O(n)


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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer, Integer> inOrderMap = indexMap(inorder); 
        return dfs(0, inorder.length - 1, preorder, 
                  0, preorder.length - 1, inOrderMap);
    }
    
    private Map<Integer, Integer> indexMap(int[] inorder){
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < inorder.length; i++){
            map.put(inorder[i], i);
        }
        return map;
    }
    
    private TreeNode dfs(int inLeft, int inRight, int[] preorder, 
            int preLeft, int preRight, Map<Integer, Integer> idxMap){
        if(inLeft > inRight){
            return null;
        }
        TreeNode root = new TreeNode(preorder[preLeft]);
        int leftSize = idxMap.get(root.val) - inLeft;
        root.left = dfs(inLeft, inLeft + leftSize - 1, preorder,
                       preLeft + 1, preLeft + leftSize, idxMap);
        root.right = dfs(inLeft + leftSize + 1, inRight, preorder,
                       preLeft + leftSize + 1, preRight, idxMap);     
        return root;
    }
}
```
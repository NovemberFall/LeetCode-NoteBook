## 105. Construct Binary Tree from Preorder and Inorder Traversal
![](img/2021-08-22-23-19-16.png)
---

![](img/2021-08-22-23-59-54.png)
![](img/2021-08-23-00-06-05.png)

- key point: 把global的问题一分为二(recursively), 每半边返回一个subtree的
  root node。
- [YouTuBe c21 | 38:40]()

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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer, Integer> inMap = inOrderIdx(inorder);
        return construct(inMap, 
                            preorder, 0, preorder.length-1, 
                            inorder, 0, inorder.length-1);
    }
    
    private Map<Integer, Integer> inOrderIdx(int[] inorder) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }
        return map;
    }
    
    private TreeNode construct(Map<Integer, Integer> inMap, 
            int[] preorder, int preLeft, int preRight, 
            int[] inorder, int inLeft, int inRight) {
        
        if (preLeft > preRight) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[preLeft]);
        int leftSize = inMap.get(root.val) - inLeft;
        root.left = construct(inMap, 
                                preorder, preLeft + 1, preLeft + leftSize, 
                                inorder, inLeft, inLeft + leftSize - 1);
        root.right = construct(inMap, 
                                preorder, preLeft + leftSize + 1, preRight, 
                                inorder, inLeft + leftSize + 1, inRight);    
        return root;
    }
}
```
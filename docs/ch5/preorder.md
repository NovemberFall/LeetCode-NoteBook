## 144. Binary Tree Preorder Traversal

![](img/2021-06-20-23-44-34.png)

```java
class _144_BinaryTreePreorderTraversal {
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            res.add(cur.val);
            if (cur.right != null) {
                stack.push(cur.right);
            }
            if (cur.left != null) {
                stack.push(cur.left);
            }
        }
        return res;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(2);
        root.right = new TreeNode(8);
        root.left.left = new TreeNode(1);
        root.right.right = new TreeNode(3);

        _144_BinaryTreePreorderTraversal btpt = new _144_BinaryTreePreorderTraversal();
        List<Integer> res = btpt.preorderTraversal(root);
        System.out.println(res);// [5, 2, 1, 8, 3]
    }
}

```





---
### Recursive

```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        
        List<Integer> res = new ArrayList<>();      
        preorder(res, root);
        return res;
    }
    
    private void preorder(List<Integer> res, TreeNode root) {
        if (root == null) {
            return;
        }
        res.add(root.val);
        preorder(res, root.left);
        preorder(res, root.right);
    }
}
```
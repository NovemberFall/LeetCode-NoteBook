## 145. Binary Tree Postorder Traversal

![](img/2021-06-20-23-58-11.png)

```java
class BinaryTreePostorderTraversal_Iterator {
    // Post-Order is the reverse order of pre-order with traversing
    // right subtree before traversing left subtree.
    public List<Integer> postorderTraversal(TreeNode root) {
        if (root == null) return new ArrayList<>();

        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> preOrder = new ArrayDeque<>();
        preOrder.push(root);
        while (!preOrder.isEmpty()) {
            TreeNode cur = preOrder.poll();
            res.add(cur.val);
            // in pre-order the right subtree will be traversed before the left
            // subtree so pushing left child first.
            if (cur.left != null) {
                preOrder.push(cur.left);
            }
            if (cur.right != null) {
                preOrder.push(cur.right);
            }
        }
        Collections.reverse(res);
        return res;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(2);
        root.right = new TreeNode(8);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);

        BinaryTreePostorderTraversal_Iterator btpti = new BinaryTreePostorderTraversal_Iterator();
        List<Integer> res = btpti.postorderTraversal(root);
        System.out.println(res);
    }
}
```


---

```py
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        if not root:
            return res

        stk = [(root, 1)]
        while stk:
            node, count = stk.pop()
            if count == 1:
                stk.append((node, count + 1))
                if node.left:
                    stk.append((node.left, 1))
            if count == 2:
                stk.append((node, count + 1))
                if node.right:
                    stk.append((node.right, 1))
            if count == 3:
                res.append(node.val)
                continue  # a node that has been visited 3 times
        return res
```
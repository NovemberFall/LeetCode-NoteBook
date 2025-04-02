## 94. Binary Tree Inorder Traversal

![](img/2021-06-20-23-46-23.png)

### Easy Understand:

```java
class BinaryTreeInorderTraversal_Iterator_easy_understand {
    public List<Integer> inorderTraversal(TreeNode root) {
        if (root == null) return new ArrayList<>();

        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode cur = root;

        // always try go the left side to see if there is any node
        // should be traversed before the cur node, cur node is stored
        // on stack since it has not been traversed yet.
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }

        while (!stack.isEmpty()) {
            // if can't go left, meaning all the nodes on the side of
            // the top node on stack have been traversed, the next traverseing node
            // should be the top node on stack
            cur = stack.pop();
            res.add(cur.val);
            cur = cur.right;

            // always try go the left side to see if there is any node
            // should be traversed before the cur node, cur node is stored
            // on stack since it has not been traversed yet.
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }
        }
        return res;
    }


    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(2);
        root.right = new TreeNode(8);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);

        BinaryTreeInorderTraversal_Iterator_easy_understand btitieu = new BinaryTreeInorderTraversal_Iterator_easy_understand();
        List<Integer> res = btitieu.inorderTraversal(root);
        System.out.println(res);
        // [1   2   3   5   8]
    }
}
```

---
```py
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
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
                continue
        return res
```


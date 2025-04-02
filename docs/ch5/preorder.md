## 144. Binary Tree Preorder Traversal

![](img/2021-06-20-23-44-34.png)

- `Time O(n)`
- space: `O(H)` -- on call stack

```java
class BinaryTreePreorderTraversal_Iterator {
    public List<Integer> preorderTraversal(TreeNode root) {
        if (root == null) return new ArrayList<>();

        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> stk = new ArrayDeque<>();
        stk.push(root);
        while (!stk.isEmpty()) {
            TreeNode cur = stk.pop();
            res.add(cur.val);
            if (cur.right != null) {
                stk.push(cur.right);
            }
            if (cur.left != null) {
                stk.push(cur.left);
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

        BinaryTreePreorderTraversal_Iterator btpti = new BinaryTreePreorderTraversal_Iterator();
        List<Integer> res = btpti.preorderTraversal(root);
        System.out.println(res);
    }
}
```





---

- Time = **O(3n) = O(n)**
- space = **O(H)**


```py
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        if not root:
            return res

        stk = [(root, 1)]
        while stk:
            node, count = stk.pop()
            if count == 1:
                res.append(node.val)
                stk.append((node, count + 1))
                if node.left:
                    stk.append((node.left, 1))
            if count == 2:
                stk.append((node, count + 1))
                if node.right:
                    stk.append((node.right, 1))
            if count == 3:
                continue  # a node that has been visited 3 times
        return res
```
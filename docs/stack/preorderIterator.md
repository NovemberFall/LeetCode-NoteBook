## Facebook | Phone | Binary Tree Preorder Iterator

- Implement a preorder iterator for a Binary Tree, need to be `O(N)` time and 
  space needs to be less than `O(N)` or `O(1)`. it needs to have the next and hasNext method.

---

- Time: `O(n)`
- space: `O(H)` -- the stack we created on heap.


```java
class TreeNode{
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

class BinaryTreePreorderIterator implements Iterator<TreeNode> {
    Deque<TreeNode> stack;

    public BinaryTreePreorderIterator(TreeNode root) {
        stack = new ArrayDeque<>();
        if (root != null) {
            stack.push(root);
        }
    }

    @Override
    public TreeNode next() {
        if (hasNext()) {
            TreeNode cur = stack.pop();
            if (cur.right != null) {
                stack.push(cur.right);
            }
            if (cur.left != null) {
                stack.push(cur.left);
            }
            return cur;
        }
        return null;
    }
    
    @Override
    public boolean hasNext() {
        return !stack.isEmpty();
    }
}
```
## 103. Binary Tree Zigzag Level Order Traversal

- Given the `root` of a binary tree, return the `zigzag level order traversal` of its 
  nodes' values. (i.e., from left to right, then right to left for the next level and 
  alternate between).

![](img/2021-06-27-01-25-45.png)

```ruby
        1    ---->  odd level
       /  \ 
     2     3  <----  even level
    / \   /  \ 
   4   5  6   7  ----> odd level
  / \        / \ 
  8  9      10 11  <---- even level
```

![](img/2021-06-27-01-27-23.png)
---

```java
class _103_BinaryTreeZigzagLevelOrderTraversal {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;

        Deque<TreeNode> deque = new ArrayDeque<>();
        int level = 0;
        deque.addLast(root);
        while (!deque.isEmpty()) {
            int size = deque.size();
            List<Integer> list = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                if (level % 2 == 0) {
                    TreeNode cur = deque.pollFirst();
                    list.add(cur.val);
                    if (cur.left != null) {
                        deque.addLast(cur.left);
                    }
                    if (cur.right != null) {
                        deque.addLast(cur.right);
                    }
                } else {
                    TreeNode cur = deque.pollLast();
                    list.add(cur.val);
                    if (cur.right != null) {
                        deque.addFirst(cur.right);
                    }
                    if (cur.left != null) {
                        deque.addFirst(cur.left);
                    }
                }
            }
            res.add(list);
            level++;
        }
        return res;
    }
}
```

## 958. Check Completeness of a Binary Tree
![](img/2022-12-24-23-29-44.png)
- In a complete binary tree, every level, **except possibly the last**, is completely filled, 
  and **all nodes in the last level are as far left as possible**.

![](img/2022-12-25-09-55-21.png)
![](img/2022-12-25-10-23-46.png)
![](img/2022-12-25-10-24-05.png)
![](img/2022-12-25-09-57-07.png)

- Time: O(N)
- Space: O(N)

### BFS

```java
class CheckCompleted {
    // This method will check if there is a child node which is null, optimal space
    public boolean isCompleteTree(TreeNode root) {
        if (root == null) {
            return true;
        }
        Queue<TreeNode> queue = new ArrayDeque<>();
        // If the flag is set true, there should not be any child nodes afterwards.
        boolean flag = false;
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode cur = queue.poll();

            // if any of the child is not present, set the flag to true.
            if (cur.left == null) {
                flag = true;
            } else if (flag) {
                // if flag is set, but we still see cur has a left child,
                // the binary tree is not a completed one.
                return false;
            } else {
                // if flag is not set and let child is present.
                queue.offer(cur.left);
            }

            // same logic applied to right child.
            if (cur.right == null) {
                flag = true;
            } else if (flag) {
                return false;
            } else {
                queue.offer(cur.right);
            }
        }
        return true;
    }
}
```
---

### Recursion

```java

```
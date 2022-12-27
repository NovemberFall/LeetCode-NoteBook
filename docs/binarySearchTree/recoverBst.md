## 99. Recover Binary Search Tree
![](img/2022-12-26-15-27-29.png)
---
![](img/2022-12-26-17-29-47.png)

- `9......2` is incorrect

![](img/2022-12-26-17-33-47.png)

![](img/2022-12-26-17-35-51.png)

![](img/2022-12-26-17-36-35.png)
- for this `prev` is **greater than** `root`

![](img/2022-12-26-17-38-59.png)
- instead of `previous` the `root` will **become** our `second`
- 这里可以清楚看到， `9 > 4`, `8 > 2`, 所以我们记录下 **fist** 和 **second** 的位置， 然后`swap`

---

```java
class _99_RecoverBinarySearchTree {
    TreeNode firstNode = null;
    TreeNode secondNode = null;
    TreeNode prev = new TreeNode(Integer.MIN_VALUE);
    public void recoverTree(TreeNode root) {
        if (root == null) {
            return;
        }
        inOrderRecursion(root);
        int temp = firstNode.val;
        firstNode.val = secondNode.val;
        secondNode.val = temp;
    }

    private void inOrderRecursion(TreeNode root) {
        if (root == null) {
            return;
        }

        inOrderRecursion(root.left);

        if (firstNode == null && prev.val > root.val) {
            firstNode = prev;
        }
        if (firstNode != null && prev.val > root.val) {
            secondNode = root;
        }
        prev = root;

        inOrderRecursion(root.right);
    }


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
}
```
## 98. Validate Binary Search Tree
![](img/2022-12-25-17-12-53.png)
---

## Analysis:

- Primitive way but very bad in terms of sapce consumption

1. **inorder traverse the tree and store all numbers in an arrayList**
2. iterate over the array to determine, whether `A[i] < A[i + 1]`
---   

- Our way:

```ruby
                   10(min=-inf, max =+inf) == root

                   /                      \

            5(min=-inf,max=10)  AND         15

          /         \                     /    \   

2(min=-inf,max=5)   X(min=5,max=10)      12     20
```

- why we set root, `min=-inf, max =+inf`? because we don't know its left child and 
  right child, **we need to know if current level is so far so good**

- Time = `O(n)`    : since we need to iterate all nodes
- Space = `O(height)`

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
    public boolean isValidBST(TreeNode root) {
        return isBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private boolean isBST(TreeNode root, long left, long right) {
        if (root == null) {
            return true;
        }

        int x = root.val;

        if (left < x && x < right) {
            return isBST(root.left, left, x)
                    &&
                    isBST(root.right, x, right);
        }

        return false;
    }
}
```
---
### Recursion

- 本题前面的递归，是**至上而下**传递，但是如果我希望**从下往上**传递, 我当如何做？
![](img/2022-12-25-20-12-54.png)

```java
public class isBST_MultiReturnValue {
    static class ReturnType {
        long subtreeMin;
        long subtreeMax;
        boolean isBST;

        public ReturnType(long subtreeMin, long subtreeMax, boolean isBST) {
            this.subtreeMin = subtreeMin;
            this.subtreeMax = subtreeMax;
            this.isBST = isBST;
        }
    }

    public boolean isValidBST(TreeNode root) {
        ReturnType result = recursion(root);
        return result.isBST;
    }

    private ReturnType recursion(TreeNode root) {
        if (root == null) {
            return new ReturnType(Long.MAX_VALUE, Long.MIN_VALUE, true);
        }

        // leaf Node
        if (root.left == null && root.right == null) {
            return new ReturnType(root.val, root.val, true);
        }

        ReturnType left = recursion(root.left);
        ReturnType right = recursion(root.right);

        if (!left.isBST || !right.isBST) {
            return new ReturnType(-1, -1, false);
        }

        if (left.subtreeMax >= root.val || root.val >= right.subtreeMin) {
            return new ReturnType(-1, -1, false);
        }

        long curMin = Math.min(root.val, left.subtreeMin);
        long curMax = Math.max(root.val, right.subtreeMax);

        return new ReturnType(curMin, curMax, true);
    }
}
```

---

### Example:

- the following is an valid `Binary Search Tree`:


![](img/2024-04-11-14-45-40.png)


---

### in-order traverse

```java
class isBST_inOrder {
    long pre = Long.MIN_VALUE;

    public boolean isValidBST(TreeNode root) {
        if (root == null) {
            return true;
        }
        // visit the left subtree
        boolean left = isValidBST(root.left);
        // 访问当前节点：如果当前节节点点小于等于中序遍历的前一个，说明不满足BST，返回 false；否则继续遍历。
        if (root.val <= pre) {
            return false;
        }
        pre = root.val;
        // 访问右子树
        boolean right = isValidBST(root.right);

        return left && right;
    }
}
```

---

#### Python

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.isBST(root, float('-inf'), float('inf'))

    def isBST(self, root: TreeNode, left: float, right: float) -> bool:
        if root is None:
            return True

        x = root.val

        if left < x < right:
            return self.isBST(root.left, left, x) and self.isBST(root.right, x, right)

        return False
```


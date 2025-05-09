## 124. Binary Tree Maximum Path Sum 
### (path from any node to any node)
![](img/2021-08-19-01-37-15.png)
- **题目的要求是any node to any node**，就是你可以带上下面的node，也可以不带。
  如果下面node传上来的数是-10000，你说要不要带呢？所以这里和0比较.

- let's look at test case:

![](img/2021-08-20-13-35-35.png)
![](img/2021-08-20-13-36-00.png)

- 2nd test case:

![](img/2021-08-20-13-54-03.png)
![](img/2021-08-20-13-54-12.png)

---
![](img/2021-08-19-01-37-27.png)


### 三部曲

1. What do you expect from your leftChild / rightChild? (usually it is the return type of the
   recursion function)
   - left: max single path in my left subtree that starts from leftChild
   - right: max single path in my right subtree that starts from rightChild
2. What do you want to do in the current layer?
   - update globalMax with max(left, 0) + max(right, 0) + root.value
3. What do you want to report to your parent? (same as Q1 == Q3)
   - return max(left, right, 0) + root.value


- **Key Point:**

- 左树的max, 右树的的max，当前层：更新，返回的时候：要和第一个物理意义一样：返回当前的max + root.val
  基于这一点，一定要在最后return "current" + root.val, 必须保持递归's state 前后一致
  For example: if current.val = 1, root.val = 1, => return current.val + root.val

- **Additional data structure**
- create a new Array[1] to sotre globalMax
  - since java pass object by value, 子函数修改的是那份copy。 而用array is an object，通过array的reference修改array里面的值。 
  - so you can't pass primitive value, 简单来说int传入值，“int[]传入的是指针”
  - 也可以传递一个 Integer object, 我们要确保动态传递,
 
 
 Time: `O(n)`
 Space: `O(height)`, worst case
 
---

 ```java
class _124_BinaryTreeMaximumPathSum {
    public int maxPathSum(TreeNode root) {
        int[] max = new int[]{Integer.MIN_VALUE};
        recursion(root, max);
        return max[0];
    }

    private int recursion(TreeNode root, int[] max) {
        if (root == null) {
            return 0;
        }
        int leftSubtree = recursion(root.left, max);
        int rightSubtree = recursion(root.right, max);
        if (leftSubtree < 0) {
            leftSubtree = 0;
        }
        if (rightSubtree < 0) {
            rightSubtree = 0;
        }
        int curSum = leftSubtree + rightSubtree + root.val;
        max[0] = Math.max(max[0], curSum);
        return Math.max(leftSubtree, rightSubtree) + root.val;
    }
}
 ```

 ---

 ### version 2


 ```java
 class Solution {
    int maxSum = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        dfs(root);
        return maxSum;
    }
    
    private int dfs(TreeNode root) {
        if (root == null) return 0;
        
        int leftTree = dfs(root.left);
        int rightTree = dfs(root.right);
        if (leftTree < 0) {
            leftTree = 0;
        }
        if (rightTree < 0) {
            rightTree = 0;
        }
        
        int curSum = leftTree + rightTree + root.val;
        maxSum = Math.max(maxSum, curSum);
        
        return Math.max(leftTree, rightTree) + root.val;
    }
}
 ```
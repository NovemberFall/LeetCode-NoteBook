# Cousins in a Binary Tree | Interview

```ruby
In a binary tree, two nodes are cousins of each other 
if they are at the same level and have different parents.

For example, in the following tree:

                     6

                  /     \

               3            5

            /     \      /     \

           7       8    1       2

7 and 1 are cousins.
3 and 5 are not cousins.
7 and 5 are not cousins.

Given a binary tree and two nodes, determine if the two nodes are cousins or not.
```


## Analysis

```ruby
Assumption:
root is not null, if it is null return false
node one is not null, if it is null return false
node two is not null, if it is null return false

example:
                     6

                  /     \

               3            5

            /     \      /     \

           7       8    1       2
           
1.      [3] and [5] is not cousin
2.      [7] and [1] is cousin, since they have same depth
3.      [7] and [5] is not cousin, since they don't have same depth

approach: 
so we can judge, if they have same depth, and their parent is differnt => that is cousin
otherwise, is false!

keypoint: if one's depth == two's depth AND their difference is more than 1, => true

Time = O(N)
Space = O(h), h is the height of recursion tree
```


```java
public class isCousinsInBinaryTree {
    static class TreeNode {
        public int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int val) {
            this.val = val;
        }
    }

    public boolean isCousin(TreeNode root, TreeNode one, TreeNode two){
        if (root == null || one == null || two == null) {
            return false;
        }
        boolean[] res = new boolean[1];
        helper(root, one, two, 0, res);
        return res[0];
    }

    private int helper(TreeNode root, TreeNode one, TreeNode two, int depth, boolean[] res) {
        if (root == null) {
            return -1;
        }
        if(root == one || root == two){
            return depth;
        }
        int left = helper(root.left, one, two, depth + 1, res);
        int right = helper(root.right, one, two, depth + 1, res);
        int diff = left - depth;
        if (left != -1 && right != -1) {// what do we do at current node
            if (left == right &&  diff > 1) {//表示在one & two在同一层且不是一个父节点
                res[0] = true;
            }
            return -1;
        }
        return left == -1 ? right : left;
    }

    public static void main(String[] args) {
        isCousinsInBinaryTree res = new isCousinsInBinaryTree();
        TreeNode root = new TreeNode(6);
        TreeNode left = new TreeNode(3);
        TreeNode right = new TreeNode(5);
        TreeNode leftLeftChild = new TreeNode(7);
        TreeNode leftRightChild = new TreeNode(8);
        TreeNode rightLeftChild = new TreeNode(1);
        TreeNode rightRightChild = new TreeNode(2);
        root.left = left;
        root.right = right;
        left.left = leftLeftChild;
        left.right = leftRightChild;
        right.left = rightLeftChild;
        right.right = rightRightChild;

//        System.out.println(res.isCousin(root, leftLeftChild, leftRightChild));
        System.out.println(res.isCousin(root, leftLeftChild, rightRightChild));
        System.out.println(res.isCousin(root, leftLeftChild, rightLeftChild));
    }
}
```
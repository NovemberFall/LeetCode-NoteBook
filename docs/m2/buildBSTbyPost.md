# Reconstruct Binary Search Tree With Postorder Traversal

```ruby
Given the postorder traversal sequence of a binary search tree, reconstruct the original tree.

Assumptions

The given sequence is not null
There are no duplicate keys in the binary search tree
Examples

postorder traversal = {1, 4, 3, 11, 8, 5}

the corresponding binary search tree is

        5

      /    \

    3        8

  /   \        \

1      4        11
```


## Analysis

```ruby
assume a BST:

                  8

                /     \

              5         12 

            /   \          \

          4      7           13




        0    1    2    3    4    5
post:   4    7    5    13   12   8

这个array对于第一层root来讲，分三个部分:
[left nodes(4, 5, 7), right nodes(13, 12), curr node(8)],  node(8) is root
在这里面所有的比8小的数字都是他的左子树，而且这些小的数字一定是严格“抱团”，
右子树同理。当我从这个array最后一个index往前扫的过程，
但凡看到了第一个比curr node小的数字，从这个数字的index到某个“再左边的index”一定是所有的左子树。

对于base case来说，post[index[0]] <= min，这个判断的就是“再左边的index”。
比如12看到了它右边的node13，但是对于左边来讲只有null，因为node 5越界。
```


- Time = O(n)
- Space = O(n)


```java
/**
 * public class TreeNode {
 *   public int key;
 *   public TreeNode left;
 *   public TreeNode right;
 *   public TreeNode(int key) {
 *     this.key = key;
 *   }
 * }
 */
public class Solution {
  public TreeNode reconstruct(int[] post) {
    // Write your solution here
    int[] index = new int[]{post.length - 1};
    return helper(post, index, Integer.MIN_VALUE);
  }

  private TreeNode helper(int[] post, int[] index, int min){
    if(index[0] < 0 || post[index[0]] < min){
      return null;
    }
    TreeNode root = new TreeNode(post[index[0]--]);
    root.right = helper(post, index, root.key);
    root.left = helper(post, index, min);
    return root;
  }
}
```

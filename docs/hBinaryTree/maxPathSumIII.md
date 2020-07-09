# Maximum Path Sum Binary Tree III

```ruby
Given a binary tree in which each node contains an integer number. 
Find the maximum possible subpath sum(both the starting and ending node of the subpath 
should be on the same path from root to one of the leaf nodes, 
and the subpath is allowed to contain only one node).

Assumptions

The root of given binary tree is not null
Examples

   -5

  /    \

2      11

     /    \

    6       14

           /

        -3

The maximum path sum is 11 + 14 = 25
```


## reference

- [reference to 124. Binary Tree Maximum Path Sum | Maximum Path Sum Binary Tree II](./maxPathSum.md)


## Method 1: DP

- DP
  - DP 从上往下的 max subarray sum:

```ruby
        root                                      cur_node
input = {x x x x x x x x x x x x x x x x x x x x x x }
                                                    =>

dp[i] = the largest sum of a subarray that ends at a[i]
dp[0] = a[0]
dp[i] = if dp[i - 1] < 0 then a[i] else dp[i - 1] + a[i]
```

## Time

- Time = O(n)


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
  public int maxPathSum(TreeNode root) {
    // Write your solution here
    if(root == null){
      return Integer.MIN_VALUE;
    }
    int[] max = new int[]{Integer.MIN_VALUE};
    helper(root, max, 0);
    return max[0];
  }
  //sum = the largest-sum path that ends at root.
  private void helper(TreeNode root, int[]max, int sum){
    //base case
    if(root == null){
      return;
    }
    if(sum < 0){
      sum = root.key;
    }else{
      sum += root.key;
    }
    max[0] = Math.max(max[0], sum);
    //this is actually a pre-order traversal.
    helper(root.left, max, sum);
    helper(root.right, max, sum);
  }
}
```




## Method 2:  


#### 三部曲

1. What do you expect from your leftChild / rightChild?
   - left: max single path in my left subtree that starts from leftChild
   - right: max single path in my right subtree that starts from rightChild
2. What do you want to do in the current layer?
   - update gloabl_max with max(left, right, 0) + root.value
3. What do you want to report to your parent? (same as Q1 == Q3)
   - return max(left, right) + root.value


- Time = O(n)

```java
public class Solution {
  public int maxPathSum(TreeNode root) {
    if(root == null){//if root is null, we can't represent anything
      return Integer.MIN_VALUE;
    }
    int[] max = new int[]{Integer.MIN_VALUE};
    dfs(root, max);
    return max[0];
  }

  private int dfs(TreeNode root, int[] max){
    //base case:
    if(root == null){//current node is null
      return 0;
    }
    int left = dfs(root.left, max);
    int right = dfs(root.right, max); //step 1

    int cur = Math.max(Math.max(left, right), 0) + root.key;
    max[0] = Math.max(max[0], cur);
    return cur;
  }
}
```
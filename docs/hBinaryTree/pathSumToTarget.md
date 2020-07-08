# Binary Tree Path Sum To Target III

```ruby
Medium
Given a binary tree in which each node contains an integer number. Determine if there exists
a path (the path can only be from one node to itself or to any of its descendants), 
the sum of the numbers on the path is the given target number.

Examples

    5

  /    \

2      11

     /    \

    6     14

  /

 3

If target = 17, There exists a path 11 + 6, the sum of the path is target.
If target = 20, There exists a path 11 + 6 + 3, the sum of the path is target.
If target = 10, There does not exist any paths sum of which is target.
If target = 11, There exists a path only containing the node 11.
```




## Analysis:

- Solution 0:
  - Pre-order to iterate over the whole tree, and for each current node X, we do a for loop in 
    {X ... root}
  - path_prefix = {5, 11, 6}
                           <- cur
  - with 6 as the bottom end, there are 3 paths:
    - {6}            sum = 6
    - {6, 11}        sum = 6 + 11 = 17
    - {6, 11, 5}     sum = 6 + 11 + 5 = 22 
  - Time = O(n * height) = O(n^2)

---

- Solution 1: Recursion + DP3 path-prefix in hashSet
  - Pre-order to iterate over the whole tree, and for each current node X, instead of doing a
    for loop, we maintain a path_prefix sum
  - historical path_prefix sum = {5, 16, 22} => HashSet
  - current prefix sum = 22
  - target = 17
  - `current prefix sum - target` is one of the historical path_prefix sum

  - What does this hash_set contain? It contains all `path_prefix_sum` from root node to the 
    current node.
    - set = {5, 16(=5+11), 22}

![](img/2020-07-07-21-31-13.png)

- Time = O(n) 
- Space = O(height) = O(n)


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
  //O(n) solution:
  public boolean exist(TreeNode root, int target) {
    if(root == null){
      return false;
    }
    HashSet<Integer> pathPrefixSum = new HashSet<>();
    pathPrefixSum.add(0);
    return dfs(root, target, pathPrefixSum, 0);
  }
  //curPrefixSum: current path prefix sum until 
  //the current layer = sum from root to current node;
  private boolean dfs(TreeNode root, int target, HashSet<Integer> pathPrefixSum, int curPrefixSum){
    if(root == null){//base case
        return false;
    }
    // 1. What do you want to expect from your lchild/rchild?
    // nothing.

    // 2. What do you want to do in the current layer?
    // a. Add the current node into the pathPrefixSum set;
    // if the set already contains the value, no need to remove;
    curPrefixSum += root.key;
    boolean needRemove = pathPrefixSum.add(curPrefixSum);

    // b. check whether exists the value: (curPrefixSum - target) in the HashSet;
    if (pathPrefixSum.contains(curPrefixSum - target)) {
        return true;
    }

    // c. if not found, continue to search in the next layer.
    boolean left = dfs(root.left, target, pathPrefixSum, curPrefixSum);
    boolean right = dfs(root.right, target, pathPrefixSum, curPrefixSum);

    // d. if not found in this path, return to the previous state of
    // pathPrefix;
    if (needRemove) {
        pathPrefixSum.remove(curPrefixSum);
    }

    // 3. What do you want to report to your parents?
    // found or not found the subsection path;
    return left || right;
  }
}
```
---


## 思考:

- `pathPrefixSum.add(0);`
  - 不完全是仅仅考虑root就等于target的情况。prefixSum的意义是什么？意义在于常数时间内找到从root到前一个node，
    是否存在任意一段的和等于你想要找的那个数字，也就是curPrefixSum - target。注意这里是任意一段，
    那么如果开始不加这个0进去，任何从root开始到某一个点结束的那一段sum如果等于target，你都是没有办法正确取到的。

- 因为： `if (prefixSum.contains(preSum - target)) return true;`
  - 当preSum == target明显也是要返回true的，为了使这种情况也被这个判断包含，加了个0进去，使得preSum - target== 0
    能返回true
- set里不能放重复的元素，如果path上出现`5, 1, -1` 这种情况第二次加5是加不进去的，如果没加进去却把5删掉，
  有可能导致5分出的另一个path check时出错。
  
- **是如果包含，就不去除，原因很简单，包含就加不进去，没加进去就不用去除。**

- "这样的例子很多啊，你想想为什么这里会判断有没有加进去，其实就是如果这个presume之前出现了，这里就不加了，
  不加了当然在当前层不能删掉，不然就把之前的那次删掉了"


- Recall: 吃了🤮 
  - 为什么要把current prefix sum从hashset里面删掉?
  - 当前层看完了，要返回上一层，有可能会换一条path，当前的prevsum不能带到另一条path
---

```ruby
递归的调用前提是左子树或者右子树不为空才调用，所以不会root为null的情况，existII也对树本身为null做了排除，
所以进入HelperII root一定不为null。

那个remove的标记逻辑是这样的:
1） 如果加的prevsum不在集合中存在，就是true，也好理解，就是你如果当前节点探索完了，你就回到父亲节点，
刚才的prevsum值应该无效了，因为set中保留的是相对当前考察节点有意义的累加值集合，就是它上边一直到根节点的所有可能累加值。
删掉的是刚才子节点对应的prevsum。
2）而如果prevsum的值已经出现过，那说明不是因为当前的prevsum插入导致的，而是直到根节点的路径上某个节点导致的，
这样就不应该删，那个数还有用。

比如：

                            4

                        /       \

                      2          -3

                               /    \

                             4        2

                            /

                           -4

处理到-3，prevsum应该是4+(-3)=1 此时1在返回前删

处理到-4，prevsum应该是4+(-3)+4+(-4)=1 此时1在递归返回前不删

带这个逻辑的递归保证了只在第一次出现那个数的地方删。
```

---

- one more example:

```ruby
在把当前层的prefixSum加到set里的时候设置了一个boolean needRemove = set.add(prefixSum) 。
且下面的代码只有当该boolean值为true的时候才能把set.remove(prefixSum)。 

     我的想法是比如这棵树长这样子：

              5

                 \

                  11

                 /

               6

            /   \

          0      1

         /

       3

     如果target 等于23
     当5-11-6-0-3分支走完从底部3开始返回，如果不记录这个boolean，那在0处就会把set中的22给删除，
     再返回到6往右走的时候永远也得不到正确的答案了。

```


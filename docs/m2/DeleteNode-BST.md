## 450. Delete Node in a BST 

- Given a root node reference of a BST and a key, delete the node with the given key in the BST. 
- Return the root node reference (possibly updated) of the BST.

---
  
```ruby
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
```

---

### My analysis

```ruby
Ex1:
        5
       / \
      3   6
     / \   \
    2   4   7
   /
   1
   key = 4

Output: 
          5
         / \
        3   6
       /     \
      2       7  
     /
    1
```

---

## Analysis:

```ruby
1. Find the target in the BST (recursion)
    
    - a. Current.value > key, then go left 
    - b. Current.value < key, then go right
    - c. Current.value == key, find the target.

2. Delete target from tree.
   
        a. Current node doesn't have left and right child
        Input:     5
                  / \
                 3   6
                / \   \
               2   4   7
              /
             1
             key = 4

        b. Current node only has left or right child.
        Input:     5
                  / \
                 3   6
                /     \
               2       7
              /
             1
             key = 2

             ouput:
                   5
                  / \
                 3   6
                /     \
               1       7
              
        c. Current node has both left and right child.
        Input:

                   8
                  / \
                4(5) 10
               / \     \
              2   6     15
             / \  / \
            1  3  5  7
            key = 4

        Output:
                   8
                  / \
                5    10
               / \     \
              2   6     15
             / \  / \
            1  3     7

Note: if root's left child and right child both is null,
we only need to return root.right, since root.right is also null

```

---


```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null){
            return null;
        }
        if(root.val > key){
            root.left = deleteNode(root.left, key);
        }else if (root.val < key){
            root.right = deleteNode(root.right, key);
        }else{
            if(root.left == null){
                return root.right;
            }else if(root.right == null){
                return root.left;
            }
            //假如root 左右child都等于null, only reutrn root.right, 
            //因为这时候root.right == null
            //反正root.right都是null 这就cover了 第三种情况

            //还有一种情况，当root都有左右child, 我们就去找right subtree's 最小node
            TreeNode minNode = findMinNode(root.right);
            root.val = minNode.val;//这一步目的是，把current's value替换成minNode.val, 
            //到这里为止，当前current bst 有两个一样的contains minNode's value的 nodes, 
            //为了maintain BST, 我们必须删掉找到的这个minNode
            root.right = deleteNode(root.right, minNode.val);
        }
        return root;
    }
    private TreeNode findMinNode(TreeNode node){
        //从right subtree开始查找的，然后node 不断往左边走，就会越来越小，
        while(node.left != null){
            node = node.left;
        }
        return node;
    }
}
```
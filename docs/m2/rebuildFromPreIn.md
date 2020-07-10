# 105. Construct Binary Tree from Preorder and Inorder Traversal

```ruby
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
```


## Analysis

```ruby
         10
       /    \
      5      15
     / \    /  \
    2   7  12  20

index:      0    1    2    3    4    5    6
preOrder:   10   5    2    7    15   12   20
inOrder:    2    5    7    10   12   15   20

step 1:
create a Map<Integer, Integer>, map<inOrder[i], index>

map<2,  0>
map<5,  1>
map<7,  2>
map<10, 3>
map<12, 4>
map<15, 5>
map<20, 6>
```
## 994. Rotting Oranges

![](img/2021-02-08-21-36-33.png)

- At the beginning, we find all rotten oranages, put them in a queue, as the 0th layer's node.
- BFS traversing, every node's adjacent node, may be up, down, left and right. 
  Note: be careful, determine the special case where the node is located on the gird boundary
- Since there many be oranages that cannot be rotten, we need to record the number of fresh oranages
  In BFS, every time an oranage is traversed(an oranage is rotting), the number of fersh oranages is 
  reduced by `1`. If the number has not been reduced to `0` when the BFS is ending, that means 
  there are oranages that cannot be rotten.












































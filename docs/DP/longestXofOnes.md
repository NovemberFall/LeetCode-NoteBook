# Largest X Of 1s

```ruby
Given a matrix that contains only 1s and 0s, find the largest X shape which contains only 1s, 
with the same arm lengths and the four arms joining at the central point.

Return the arm length of the largest X shape.


Assumptions
The given matrix is not null, has size of N * M, N >= 0 and M >= 0.
Examples

{ {0, 0, 0, 0},

  {1, 1, 1, 1},

  {0, 1, 1, 1},

  {1, 0, 1, 1} }

the largest X of 1s has arm length 2.
```


## Anaylysis:

```ruby
topLeft
 ->
|    0   0   0   0
V
     1   1   1   1

     0   1   1   1

     1   0   1   1


topRight
            <-   
0   0   0   0  |
               V 
1   1   1   1

0   1   1   1

1   0   1   1



bottomLeft

     0   0   0   0

     1   1   1   1

     0   1   1   1
^
|    1   0   1   1
  ->


bottomRight

0   0   0   0

1   1   1   1

0   1   1   1
               ^ 
1   0   1   1  |
            <-  

 
本题 四个不同方向，base case:  if(从边界开始) ， 那么 direction[i][j] = matrix[i][j]

剩下采用 linear scan 回头看的策略
```



```java
public class Solution {
  public int largest(int[][] matrix) {
    // Write your solution here
    int row = matrix.length;
    int col = matrix[0].length;
    if(row == 0 || col == 0){
      return 0;
    }
    int maxRes = 0;
    int min = 0;
    int[][] topLeft = new int[row][col];
    int[][] topRight = new int[row][col];
    int[][] bottomLeft = new int[row][col];
    int[][] bottomRight = new int[row][col];    

    for(int i = 0; i < row; i++){
      for(int j = 0; j < col; j++){
        if(i == 0 || j == 0){//边界全部初始化成 matrix[i][j] 原来的值，因为linear scan 回头看并不关心，你历史上是0 还是1
          topLeft[i][j] = matrix[i][j];
        }else{
          if(matrix[i][j] == 1){
            topLeft[i][j] = topLeft[i - 1][j - 1] + 1;
          }else{
            topLeft[i][j] = 0;
          }
        }
      }
    }

    for(int i = 0; i < row; i++){
      for(int j = col - 1; j >= 0; j--){
        if(i == 0 || j  == col - 1){//边界全部初始化成 matrix[i][j] 原来的值，因为linear scan 回头看并不关心，你历史上是0 还是1
          topRight[i][j] = matrix[i][j];
        }else{
          if(matrix[i][j] == 1){
            topRight[i][j] = topRight[i - 1][j + 1] + 1;
          }else{
            topRight[i][j] = 0;
          }
        }
      }
    }
    //bottom Left corner
    for(int i = row - 1; i >= 0; i--){
      for(int j = 0; j < col; j++){
        if(i == row - 1 || j  == 0){//边界全部初始化成 matrix[i][j] 原来的值，因为linear scan 回头看并不关心，你历史上是0 还是1
          bottomLeft[i][j] = matrix[i][j];
        }else{
          if(matrix[i][j] == 1){
            bottomLeft[i][j] = bottomLeft[i + 1][j - 1] + 1;
          }else{
            bottomLeft[i][j] = 0;
          }
        }
      }
    }
    //bottom right corner
    for(int i = row - 1; i >= 0; i--){
      for(int j = col - 1; j >= 0; j--){
        if(i == row - 1 || j  == col - 1){//边界全部初始化成 matrix[i][j] 原来的值，因为linear scan 回头看并不关心，你历史上是0 还是1
          bottomRight[i][j] = matrix[i][j];
        }else{
          if(matrix[i][j] == 1){
            bottomRight[i][j] = bottomRight[i + 1][j + 1] + 1;
          }else{
            bottomRight[i][j] = 0;
          }
        }
      }
    }

    for(int i = 0; i < row; i++){
      for(int j = 0; j < col; j++){
        min = Math.min(
          Math.min(topLeft[i][j], topRight[i][j]),
          Math.min(bottomLeft[i][j], bottomRight[i][j])
        );
        //当四个case 向四个方向探索，假设某一个点， 4个方向会得到不同的长度记录，call min()，得到最小长度
        maxRes = Math.max(min, maxRes);
        //每一次把 最小长度 和 整个2d array的value,全部比较过去 取最大值
      }
    }
    return maxRes;
  }  
}

```

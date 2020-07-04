# Longest Cross Of 1s

```ruby
Given a matrix that contains only 1s and 0s, find the largest cross which contains only 1s, 
with the same arm lengths and the four arms joining at the central point.

Return the arm length of the largest cross.


Assumptions
The given matrix is not null, has size of N * M, N >= 0 and M >= 0.
Examples

{ {0, 0, 0, 0},

  {1, 1, 1, 1},

  {0, 1, 1, 1},

  {1, 0, 1, 1} }

the largest cross of 1s has arm length 2.
```




## Analysis:

```ruby
solution 0:（non DP）
暴力拆解
for for(i, j){
    we run 4 for loops to check each direction
}

Time = O(n^3)



solution 1: DP

Step1 : for each direction (left -> right, right -> left, top -> bottom, bottom -> top), 
we run Q1 1st direction (left -> right): M1[n][n]
0   1   0   0

1   2   3   4

0   1   0   0

0   1   0   0



2nd direction (right -> left): M2[n][n]
0   1   0   0

4   3   2   1

0   1   0   0

0   1   0   0



3rd direction (top -> bottom): M3[n][n]
0   1   0   0

1   2   1   1

0   3   0   0

0   4   0   0



4th direction (bottom -> top): M4[n][n]
0   4   0   0

1   3   1   1

0   2   0   0

0   1   0   0


Step2 : for for each element in the input matrix
    M[i][j] = min(M1[i][j], M2[i][j], M3[i][j], M4[i][j])
Return globalMax among all M[i][j]
Time = O(4 * n^2 + n^2) = O(n^2)
```


```java
public class Solution {
  public int largest(int[][] matrix) {
    // Write your solution here
    if(matrix == null || matrix.length == 0){
      return 0;
    }
    int row = matrix.length;
    int col = matrix[0].length;
    int[][] leftRight = new int[row][col];
    int[][] rightLeft = new int[row][col];
    int[][] upDown = new int[row][col];
    int[][] downUp = new int[row][col];
    int result = 0;
    int max = 0;
    for(int i = 0; i < row; i++){
      for(int j = 0; j < col; j++){
        if(matrix[i][j] == 1){
          if(j == 0){
            leftRight[i][j] = 1;
          }else{
            leftRight[i][j] = matrix[i][j] + leftRight[i][j-1];
          }
        }else{
          leftRight[i][j] = 0;
        }
      }
    }

    for(int i = 0; i < row; i++){
      for(int j = col - 1; j >= 0; j--){
        if(matrix[i][j] == 1){
          if(j == col - 1){
            rightLeft[i][j] = 1;
          }else{
            rightLeft[i][j] = matrix[i][j] + rightLeft[i][j+1];
          }
        }else{
          rightLeft[i][j] = 0;
        }
      }
    }

    for(int j = 0; j < col; j++){
      for(int i = 0; i < row; i++){
        if(matrix[i][j] == 1){
          if(i == 0){
            upDown[i][j] = 1;
          }else{
            upDown[i][j] = matrix[i][j] + upDown[i-1][j];
          }
        }else{
          upDown[i][j] = 0;
        }        
      }
    }

    for(int j = 0; j < col; j++){
      for(int i = row - 1; i >= 0; i--){
        if(matrix[i][j] == 1){
          if(i == row - 1){
            downUp[i][j] = 1;
          }else{
            downUp[i][j] = matrix[i][j] + downUp[i + 1][j];
          }
        }else{
          downUp[i][j] = 0;
        }        
      }
    }

    for(int i = 0; i < row; i++){
      for(int j = 0; j < col; j++){
        result = Math.min(Math.min(leftRight[i][j], rightLeft[i][j]),
        Math.min(upDown[i][j], downUp[i][j]));
        max = result > max ? result : max;
      }
    }
    return max;    
  }
}
```

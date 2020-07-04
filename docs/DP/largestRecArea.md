# 85. Maximal Rectangle || Largest Rectangle Of 1s

```ruby
Given a 2D binary matrix filled with 0's and 1's, 
find the largest rectangle containing only 1's and return its area.

Example:

Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
```




## Anaylysis

- 可以参考前面那些 DP 题

![](img/2020-06-21-15-57-56.png)



```java
class Solution {
    public int maximalRectangle(char[][] matrix) {
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0){
            return 0;
        } 
        int row = matrix.length;
        int col = matrix[0].length;
        int[][] right = checkRightToLeft(matrix, row, col);//right to left
        int[][] down = checkDownToUp(matrix, row, col);//down to up
        return maxRecArea(right, down, row, col);
    }
    
    private int[][] checkRightToLeft(char[][]matrix, int row, int col){
        int[][] right = new int[row][col];
        for(int i = row - 1; i >= 0; i--){
            for(int j = col - 1; j >= 0; j--){
                if(matrix[i][j] == '1'){
                    if(j == col - 1){
                        right[i][j] = 1;
                    }else{
                        right[i][j] = right[i][j + 1] + 1; 
                    }
                }else{
                    right[i][j] = 0;
                }
            }
        }
        return right;
    }
    
    private int[][] checkDownToUp(char[][]matrix, int row, int col){
        int[][] down = new int[row][col];
        for(int i = row - 1; i >= 0; i--){
            for(int j = col - 1; j >= 0; j--){
                if(matrix[i][j] == '1'){
                    if(i == row - 1){
                        down[i][j] = 1;
                    }else{
                        down[i][j] = down[i + 1][j] + 1; 
                    }
                }else{
                    down[i][j] = 0;
                }
            }
        }
        return down;
    }
    
    private int maxRecArea(int[][] right, int[][] down, int row, int col){
        int max = 0;
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                int cur = right[i][j];
                for(int len = 1; len <= down[i][j]; len++){
                    cur = Math.min(cur, right[i + len - 1][j]);
                    max = Math.max(max, cur * len);
                }
            }
        }
        return max;
    }
}
```


## 变种题型：

```ruby
Determine the largest rectangle of 1s in a binary matrix 
(a binary matrix only contains 0 and 1), return the area.

Assumptions

The given matrix is not null and has size of M * N, M >= 0 and N >= 0
Examples

{ {0, 0, 0, 0},

  {1, 1, 1, 1},

  {0, 1, 1, 1},

  {1, 0, 1, 1} }

the largest rectangle of 1s has area of 2 * 3 = 6
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
    
    int[][] right = checkRight(matrix, row, col);//checking from right to left
    int[][] down = checkDown(matrix, row, col);//checking from down to up
    return maxRec(right, down, row, col);
  }

  private int[][] checkRight(int[][] matrix, int row, int col){
    int[][] right = new int[row][col];
    for(int i = row - 1; i >= 0; i--){
      for(int j = col - 1; j >= 0; j--){
        if(matrix[i][j] == 1){
          if(j == col - 1){
            right[i][j] = 1;
          }else{
            right[i][j] = right[i][j + 1] + 1;
          }
        }else{
          right[i][j] = 0;
        }
      }
    }
    return right;
  } 

  private int[][] checkDown(int[][] matrix, int row, int col){
    int[][] down = new int[row][col];
    for(int i = row - 1; i >= 0; i--){
      for(int j = col - 1; j >= 0; j--){
        if(matrix[i][j] == 1){
          if(i == row - 1){
            down[i][j] = 1;
          }else{
            down[i][j] = down[i + 1][j] + 1;
          }
        }else{
          down[i][j] = 0;
        }
      }
    }
    return down;
  }

  private int maxRec(int[][] right, int [][] down, int row, int col){
    int max = 0;
    for(int i = 0; i < row; i++){
      for(int j = 0; j < col; j++){
        int cur = right[i][j];
        for(int len = 1; len <= down[i][j]; len++){
          cur = Math.min(cur, right[i + len - 1][j]);
          max = Math.max(max, cur * len);
        }
      }
    }
    return max;
  } 
}

```
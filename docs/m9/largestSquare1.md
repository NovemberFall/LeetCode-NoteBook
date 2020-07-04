# Largest Square Surrounded By One


```ruby
{{1, 0, 1, 1, 1},

 {1, 1, 1, 1, 1},                   <- Direction 1
                                       right to left
 {1, 1, 0, 1, 0},

 {1, 1, 1, 1, 1},

 {1, 1, 1, 0, 0}}

        down to up
        Direction 2


How many squares are there in this matrix?
O(n^3)

Solution 0:

for for (i, j){
    for(edge length){
        we run 4 for loop to check each edge - O(n)
    }
}
Time = O(n^4)


Solution 1: DP
step1: Fill in two 2D M1[n][n] (right -> left) and M2[n][n] (bottom -> top) -- O(n^2)
step2: for(i)
        for(j){
            //(i, j) is the upper-left corner
            for each possible edge length (min(M1[i][j], M2[i][j]) downto 1){
                check if top right corner with Direction 2 >= edge length
                check if bottom left corner with Direction 1 >= edge length
            }
        }
Return global_max

Time = O(n^2) + O(n^2 * n) = O(n^3)

```

---


## further analysis:


```ruby
{{1, 0, 1, 1, 1},

 {1, 1, 1, 1, 1},                

 {1, 1, 0, 1, 0},

 {1, 1, 1, 1, 1},

 {1, 1, 1, 0, 0}}
 
 
horizontal:          left -> right   
1   0   1   2   3

1   2   3   4   5

1   2   0   1   0

1   2   3   4   5

1   2   3   0   0


vertical:           up -> down
1   0   1   1   1

2   1   2   2   2

3   2   0   3   0

4   3   1   4   1

5   4   2   0   0




right-down          rightmost and bottommost
1   0   1   1   1

1   1   2   2   2

1   2   0   1   0

1   2   1   4   1

1   2   2   0   0



以index i = 3, j = 3 为example, matrix[i][j] = 1
hor[i][j] = 4, ver[i][j] = 4, right-down[i][j] = 4

现在以 right-down[i][j] = 4, 为base point, 向左边第一次检测，即假如是square, 那么它会是max square
vertical[3][0] == 4, horizontal[0][3] == 2, 所以可以发现两个边不等，即不能组成最大正方形

smaller--; //对长度reduce smaller => 4-- => (smaller == 3)

vertical[3][1] == 3, horizontal[1][3] == 4,  可以发现最小为3， 3 >= (smaller == 3)

至此我们发现已经可以组成最大的 正方形，不用再往下探究
```



```java
public class Solution {
  public int largestSquareSurroundedByOne(int[][] matrix) {
    // Write your solution here
    if (matrix == null || matrix.length == 0) {
      return 0;
    }
    int row = matrix.length;
    int col = matrix[0].length;
    int[][] ver = new int[row][col];
    int[][] hor = new int[row][col];
    //for here I don't use right-down 2d array
    int maxLength = 0;
    int smaller = 0;
    for(int i = 0; i < row; i++){
      for(int j = 0; j < col; j++){
        if(matrix[i][j] == 1){
          ver[i][j] = (i == 0) ? 1 : ver[i - 1][j] + 1; // or ver[i - 1][j] + matrix[i][j]
          hor[i][j] = (j == 0) ? 1 : hor[i][j - 1] + 1;
          /* 
          注意这一段， 因为 vertical line 是从上往下扫， 所以当 row == 0 的时候， 设置ver[i][j] = 1
          这里物理意义就是，当matrix[i][j] 初始为1, base case ver[i][j] 为1, 然后开始linear scan, 
          向后检查是否历史上为1
           */
        }else{
          ver[i][j] = 0;
          hor[i][j] = 0;
        }
      }
    }

    //from rightmost-downmost to check
    for(int i = row - 1; i >= 0; i--){
      for(int j = col - 1; j >= 0; j--){
        smaller = Math.min(ver[i][j], hor[i][j]);//current cell's max possible length
        while(smaller > 0){//check if it is square from max possibility 
          boolean isSquare = ver[i][j - smaller + 1] >= smaller && hor[i - smaller + 1][j] >= smaller;
          //j - smaller + 1, why + 1, since the index is from 0
          if(isSquare && maxLength < smaller){
            maxLength = smaller;
          }
          smaller--;//if still cannot find a square, then update smaller to check if the rest is square
        }
      }
    }
    return maxLength;
  }
}
```
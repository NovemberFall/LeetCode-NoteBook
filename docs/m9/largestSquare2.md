# 1139. Largest 1-Bordered Square

```ruby
Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid 
that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.

 

Example 1:

Input: grid = 
[
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

Output: 9
Example 2:

Input: grid = [[1,1,0,0]]
Output: 1
 

Constraints:

1 <= grid.length <= 100
1 <= grid[0].length <= 100
grid[i][j] is 0 or 1
```




- [Analysis: reference to Largest Square Surrounded By One](https://novemberfall.github.io/LeetCode-Algorithm/m9/largestSquare1.html)


```java
class Solution {
    public int largest1BorderedSquare(int[][] grid) {
        int row = grid.length;
        int col = grid[0].length;
        int[][] hor = new int[row][col];//horizonal
        int[][] ver = new int[row][col];//vertical
        int smaller = 0;
        int maxLength = 0;
        //horizontal
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                if(grid[i][j] == 1){
                    if(j == 0){
                        hor[i][j] = 1;
                    }else{
                        hor[i][j] = hor[i][j - 1] + 1; 
                    }                    
                }else{
                    hor[i][j] = 0;
                }
            }
        }
        //vertical
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                if(grid[i][j] == 1){
                    if(i == 0){
                        ver[i][j] = 1;
                    }else{
                        ver[i][j] = ver[i - 1][j] + 1; 
                    }                    
                }else{
                    ver[i][j] = 0;
                }
            }
        }
        //merge horizontal and vertical
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                smaller = Math.min(hor[i][j], ver[i][j]);
                while(smaller > 0){
                    boolean isSquare = 
                        (ver[i][j - smaller + 1] >= smaller) && (hor[i - smaller + 1][j] >= smaller);
                    if(isSquare && maxLength < smaller){
                        maxLength = smaller;
                    }
                    smaller--;
                }
            }
        }
        return maxLength * maxLength;
    }
}
```
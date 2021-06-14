## 240. Search a 2D Matrix II

- Write an efficient algorithm that searches for a value in an m x n matrix. 
  This matrix has the following properties:

- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.

Example:

Consider the following matrix:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

Given target = 5, return true.

Given target = 20, return false.


### Analysis:

```java
Assume target is 5,

column = matrix[0].length - 1;  // => the maxmium index of column
row = 0;    // => at the begin row

15 > 5,   =>   col--;

  [1,   4,  7, 11, 15],
               C--
  [2,   5,  8, 12, 19],

  [3,   6,  9, 16, 22],

  [10, 13, 14, 17, 24],

  [18, 21, 23, 26, 30]


11 > 5,   =>   col--;

  [1,   4,  7, 11, 15],
            C--
  [2,   5,  8, 12, 19],

  [3,   6,  9, 16, 22],

  [10, 13, 14, 17, 24],

  [18, 21, 23, 26, 30]


7 > 5,   =>   col--;

  [1,   4,  7, 11, 15],
        C--
  [2,   5,  8, 12, 19],

  [3,   6,  9, 16, 22],

  [10, 13, 14, 17, 24],

  [18, 21, 23, 26, 30]


4 < 5,  =>  row++

  [1,   4,  7, 11, 15],
        
  [2,   5,  8, 12, 19],
      ++R|C
  [3,   6,  9, 16, 22],

  [10, 13, 14, 17, 24],

  [18, 21, 23, 26, 30]

=> find the target
```

---

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if(matrix == null || matrix.length == 0 || matrix[0].length==0){
            return false;
        }
        
        int row = 0;
        int col = matrix[0].length - 1;
        while(col >= 0 && row <= (matrix.length - 1)){
            if(matrix[row][col] == target){
                return true;
            }else if(matrix[row][col] > target){
                col--;
            }else{
                row++;
            }
        }
        return false;
    }
}
```
# 74. Search a 2D Matrix

# Search In sorted matrix

- Write an efficient algorithm that searches for a value in an 
  m x n matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.

- The first integer of each row is greater than the last integer of 
  the previous row.

### `matrix.length` is rows' length

### `matrix[0].length` is column's length

```java
public class searhInMatrix {

    public static void main(String[] args) {
        int[][] table = {{1, 2, 3}, 
                         {4, 5, 6}, 
                         {7, 8, 9}};
        System.out.println(table.length); //output 3
        System.out.println(table[0].length);//output 3
    }
}
```

![](img/2020-03-15-16-15-00.png)

```java
/**
 * searhInMatrix
 */
public class searhInMatrix {

    public static boolean searchMatrix(int[][] matrix, int target) {
        if(matrix.length == 0 || matrix[0].length == 0){
            return false;
        }
        
        int row = matrix.length;
        int column = matrix[0].length;
        int left = 0;
        int right = row * column - 1;
        while(left <= right){
            int mid = (left + right) / 2;
            int r = mid / column; //don't  => mid/row   !
            int c = mid % column;

            if(matrix[r][c] == target){
                return true;
            }else if(matrix[r][c] > target){
                right = mid - 1;    
            }else{
                left = mid + 1;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 3, 5, 7}, 
                            {10, 11, 16, 20}, 
                            {23, 30, 34, 50}};
        
        System.out.println(searchMatrix(matrix, 13)); //output: false
    }
}

```
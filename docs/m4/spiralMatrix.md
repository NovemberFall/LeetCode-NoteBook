# 54. Spiral Matrix


```ruby
Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.


Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]



Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

---

## Analysis:


![](img/2020-06-02-19-55-53.png)
![](img/2021-06-10-01-14-05.png)
![](img/2021-06-10-02-54-03.png)


```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        if(matrix == null || matrix.length == 0){
            return res;
        }
        int rowBegin = 0;
        int rowEnd = matrix.length - 1;
        int colBegin = 0;
        int colEnd = matrix[0].length - 1;
        
        while(rowBegin <= rowEnd && colBegin <= colEnd){
            for(int i = colBegin; i <= colEnd; i++){
                res.add(matrix[rowBegin][i]);
            }
            rowBegin++;
            for(int i = rowBegin; i <= rowEnd; i++){
                res.add(matrix[i][colEnd]);
            }
            colEnd--;

            if(rowBegin <= rowEnd){
                for(int i = colEnd; i >= colBegin; i--){
                    res.add(matrix[rowEnd][i]);
                }
            }
            rowEnd--;

            if(colBegin <= colEnd){
                for(int i = rowEnd; i >= rowBegin; i--){
                    res.add(matrix[i][colBegin]);
                }
            }
            colBegin++;
        }
        return res;
    }

}
```

---

## other ans:


```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        if(matrix == null || matrix.length == 0){
            return res;
        }
        int rowBegin = 0;
        int rowEnd = matrix.length - 1;
        int colBegin = 0;
        int colEnd = matrix[0].length - 1;
        
        while(rowBegin <= rowEnd && colBegin <= colEnd){
            if(rowBegin <= rowEnd){
                for(int i = colBegin; i <= colEnd; i++){
                    res.add(matrix[rowBegin][i]);
                }
            }
            rowBegin++;
            
            if(colBegin <= colEnd){
                for(int i = rowBegin; i <= rowEnd; i++){
                    res.add(matrix[i][colEnd]);
                }
            }
            colEnd--;

            if(rowBegin <= rowEnd){
                for(int i = colEnd; i >= colBegin; i--){
                    res.add(matrix[rowEnd][i]);
                }
            }
            rowEnd--;

            if(colBegin <= colEnd){
                for(int i = rowEnd; i >= rowBegin; i--){
                    res.add(matrix[i][colBegin]);
                }
            }
            colBegin++;
        }
        return res;
    }

}
```
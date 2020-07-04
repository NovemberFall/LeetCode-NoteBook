# 378. Kth Smallest Element in a Sorted Matrix | Best FS

```ruby
Given a n x n matrix where each of the rows and columns are sorted in ascending order, 
find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.


Example:
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
```

---

## Analysis:


```java
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        int rows = matrix.length;
        int columns = matrix[0].length;
        PriorityQueue<Cell> pq = 
            new PriorityQueue<>(k, (o1, o2) -> o1.val - o2.val);
        
        boolean[][] visited = new boolean[rows][columns];
        visited[0][0] = true;
        pq.offer(new Cell(0, 0, matrix[0][0]));
        
        for(int i = 0; i < k - 1; i++){//k - 1, => we keep the kTh smallest elem at top of PQ
            Cell cur = pq.poll();
            if(cur.row < rows - 1 && !visited[cur.row + 1][cur.column]){
                visited[cur.row + 1][cur.column] = true;
                pq.offer(new Cell(cur.row + 1, cur.column, matrix[cur.row+1][cur.column]));
            }
            if(cur.column < columns - 1 && !visited[cur.row][cur.column + 1]){
                visited[cur.row][cur.column + 1] = true;
                pq.offer(new Cell(cur.row, cur.column + 1, matrix[cur.row][cur.column + 1]));
            }
        }
        return pq.peek().val;
    }
    
    class Cell{
        int row;
        int column;
        int val;
        
        Cell(int row, int column, int val){
            this.row = row;
            this.column = column;
            this.val = val;
        }
    }
}
```

---

## without lambda expression:

#### Kth Smallest Number In Sorted Matrix

```ruby
Given a matrix of size N x M. For each row the elements are sorted in ascending order, 
and for each column the elements are also sorted in ascending order. 
Find the Kth smallest number in it.

Assumptions

the matrix is not null, N > 0 and M > 0
K > 0 and K <= N * M
Examples

{ {1,  3,   5,  7},

  {2,  4,   8,   9},

  {3,  5, 11, 15},

  {6,  8, 13, 18} }

the 5th smallest number is 4
the 8th smallest number is 6
```





```java
public class Solution {
  public int kthSmallest(int[][] matrix, int k) {
    // Write your solution here
    int rows = matrix.length;
    int columns = matrix[0].length;
    //Best First Search, need a minHeap on the value of each cells.
    PriorityQueue<Cell> minHeap = new PriorityQueue<Cell>(k, new Comparator<Cell>(){
      @Override
      public int compare(Cell c1, Cell c2){
        if(c1.val == c2.val){
          return 0;
        }
        return c1.val < c2.val ? -1 : 1;
      }
    });

    //all the generated cells will be marked true,
    //to avoid being generated more than once.
    boolean[][] visited = new boolean[rows][columns];
    minHeap.offer(new Cell(0, 0, matrix[0][0]));
    visited[0][0] = true;
    //iterate k-1 rounds, and Best First Search the smallest k-1 cells
    for(int i=0; i<k-1; i++){
      Cell cur = minHeap.poll();
      //the neighbor cell will be inserted back to the minheap only if
      //1. it is not out of boundary
      //2. it has not been generated before
      //Because for each cell it could be generated twice.
      if(cur.row + 1 < rows && !visited[cur.row + 1][cur.column]){
        minHeap.offer(
          new Cell(cur.row + 1, cur.column, matrix[cur.row + 1][cur.column])
        );
        visited[cur.row + 1][cur.column] = true;
      }
      if(cur.column + 1 < columns && !visited[cur.row][cur.column + 1]){
        minHeap.offer(
          new Cell(cur.row, cur.column + 1, matrix[cur.row][cur.column+1])
        );
        visited[cur.row][cur.column + 1] = true;
      }
    }
    return minHeap.peek().val;
  }

  class Cell{
    int row;
    int column;
    int val;

    Cell(int row, int column, int val){
      this.row = row;
      this.column = column;
      this.val = val;
    }
  }
}
```
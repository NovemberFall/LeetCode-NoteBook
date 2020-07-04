# Largest SubMatrix Sum

```ruby
Given a matrix that contains integers, find the submatrix with the largest sum.

Return the sum of the submatrix.

Assumptions

The given matrix is not null and has size of M * N, where M >= 1 and N >= 1
Examples

{ {1, -2, -1, 4},

  {1, -1,  1, 1},

  {0, -1, -1, 1},

  {0,  0,  1, 1} }

the largest submatrix sum is (-1) + 4 + 1 + 1 + (-1) + 1 + 1 + 1 = 7.
```


## Anaylysis:

- How many rectangles in this matrix?
  - O(n^4)
  

- Solution 0 (non DP)
  - Thre are O(n^4) submatrices
  - for for for each submatrix, it takes O(n^2) to calculate its sum.
  - Therefor total time = O(n^6)


```java
public class Solution {
  public int largest(int[][] matrix) {
    // Write your solution here

		int N = matrix.length;
		int M = matrix[0].length;
		int sum = Integer.MIN_VALUE;
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				int tmp = 0;
				for (int x = i; x >= 0; x--) {
					for (int y = j; y >= 0; y--) {
						tmp = tmp + matrix[x][y];
						sum = Math.max(sum, tmp);
					}
				}
			}
		}
		return sum;
  }
}

```


- Solution 1 (DP1: prefix sum in 1D)
- 
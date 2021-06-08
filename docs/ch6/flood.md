## 733. Flood Fill

```
An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. 
You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, 
plus any pixels connected 4-directionally to the starting pixel of 
the same color as the starting pixel, plus any pixels connected 4-directionally 
to those pixels (also with the same color), and so on. 
Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
```

![](img/2021-06-07-17-15-59.png)

- Time complexity: O(m*n), space complexity: O(m*n). 
  - m is number of rows, n is number of columns.

```java
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if (image[sr][sc] == newColor) {
            return image;
        }
        dfs(image, sr, sc, newColor, image[sr][sc]);
        return image;
    }
    
    private void dfs(int[][] image, int sr, int sc, int newColor, int oldColor) {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length
           || oldColor != image[sr][sc]) {
            return;
        }
        image[sr][sc] = newColor;
        
        dfs(image, sr - 1, sc, newColor, oldColor);
        dfs(image, sr + 1, sc, newColor, oldColor);
        dfs(image, sr, sc - 1, newColor, oldColor);
        dfs(image, sr, sc + 1, newColor, oldColor);
    }
}
```
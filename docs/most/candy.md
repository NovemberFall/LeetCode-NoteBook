## 135. Candy
![](img/2022-09-04-22-46-43.png)
- [Very Simple Java Solution with detail explanation](https://www.youtube.com/watch?v=Ya-LfQ0OBkU&t=639s)
- [leetcode with simple java solution](https://leetcode.com/problems/candy/discuss/42774/Very-Simple-Java-Solution-with-detail-explanation)

```java
class Solution {
    public int candy(int[] ratings) {
        if (ratings == null || ratings.length == 0) return 0;
        
        int candies = 0, n = ratings.length;
        int[] right = new int[n];
        int[] left = new int[n];
        Arrays.fill(left, 1);
        Arrays.fill(right, 1);
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                left[i] = left[i - 1] + 1;
            } 
        }
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                right[i] = right[i + 1] + 1;
            }
        } 
        for (int i = 0; i < n; i++) {
            candies += Math.max(left[i], right[i]);
        }
        return candies;
    }
}
```
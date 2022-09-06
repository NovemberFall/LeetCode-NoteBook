## 118. Pascal's Triangle
![](img/2022-09-05-22-42-48.png)

- [concise solution in Java](https://leetcode.com/problems/pascals-triangle/discuss/38141/My-concise-solution-in-Java)

- [ArrayList set() method in Java with Examples](https://www.geeksforgeeks.org/arraylist-set-method-in-java-with-examples/)

```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> allRows = new ArrayList<>();
        if (numRows == 0) return allRows;
        
        List<Integer> row = new ArrayList<>();
        
        for (int i = 0; i < numRows; i++) {
            row.add(0, 1);
            for (int j = 1; j < row.size() - 1; j++) {
                row.set(j, row.get(j) + row.get(j + 1));
            }
            allRows.add(new ArrayList<>(row));
        }
        return allRows;
    }
}
```
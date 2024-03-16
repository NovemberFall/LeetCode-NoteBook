## 57. Insert Interval
![](img/2022-12-18-20-43-56.png)

![](img/2022-12-18-20-44-29.png)
---

- 注意审题: You are given an array of **non-overlapping** intervals intervals where intervals[i] = [starti, endi]
- 默认是无重合元素的数组

```ruby
1) i.end < newInterval.start，then we can safely add i to result;
	newInterval still needs to be compared with latter intervals

	|________|
			       |_ _ _ _ _|
			
2) i.start > newInterval.end，then we can safely add both to result，
	
			       |________|
	|_ _ _ _ _|
			
3) There is overlap between i and newInterval. We can merge i into newInterval, 
then use the updated newInterval to compare with latter intervals.

	
	|________|
		|_ _ _ _ _|
			
		|________|
	|_ _ _ _ _|
```


---
```java
class _57_InsertInterval {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        if (intervals == null || intervals.length == 0) {
            return new int[][]{newInterval};
        }

        List<int[]> res = new ArrayList<>();
        boolean inserted = false;
        for (int[] curInterval : intervals) {
            if (curInterval[1] < newInterval[0]) {
                res.add(curInterval);
            } else if (curInterval[0] > newInterval[1]) {
                if (!inserted) {
                    res.add(newInterval);
                    inserted = true;
                }
                res.add(curInterval);
            } else {
                newInterval[0] = Math.min(newInterval[0], curInterval[0]);//get min
                newInterval[1] = Math.max(newInterval[1], curInterval[1]);//get max
            }
        }

        if (!inserted) {
            res.add(newInterval);
        }
        int[][] ans = new int[res.size()][2];
        for (int i = 0; i < ans.length; i++) {
            ans[i] = res.get(i);
        }
        return ans;
//        return res.toArray(new int[res.size()][]);
    }

    public static void main(String[] args) {
        int[][] intervals = new int[][]{
                {1, 2}, {3, 5}, {6, 7}, {8, 10}, {12, 16}
        };
        _57_InsertInterval insertInterval = new _57_InsertInterval();
        int[][] res = insertInterval.insert(intervals, new int[]{4, 8});
        System.out.println(Arrays.deepToString(res));
        // [[1, 2], [3, 10], [12, 16]]
    }
}
```
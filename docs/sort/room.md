## 252. Meeting Rooms
![](img/2022-12-19-21-13-57.png)

```ruby
Input: = [[0,30],[5,10],[15,20]]
Output: = false

--------------------------------
0                             30
      -------
      5    10 
```

![](img/2022-12-19-21-16-09.png)

```java
class Solution {
    public boolean canAttendMeetings(int[][] intervals) {
        if (intervals == null || intervals.length == 0) return true;
        
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] lastInterval = intervals[i - 1];
            if (lastInterval[1] <= intervals[i][0]) {
                continue;
            } else {
                return false;
            }            
        }
        return true;
    }
}
```
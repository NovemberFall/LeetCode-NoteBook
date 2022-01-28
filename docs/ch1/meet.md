## 252. Meeting Rooms

![](img/2022-01-28-09-29-13.png)

```ruby
Input: = [[0,30],[5,10],[15,20]]
Output: = false

--------------------------------
0                             30
      -------
      5    10 
```

![](img/2022-01-28-11-21-10.png)


---

```java
class Solution {
    public boolean canAttendMeetings(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return true;
        }
        Arrays.sort(intervals, (a, b) -> {
            return a[0] - b[0];
        });
        
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i - 1][1] > intervals[i][0]) {
                return false;
            }
        }
        return true;
    }
}
```
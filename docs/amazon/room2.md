## 253. Meeting Rooms II

- Given an array of meeting time intervals intervals where 
  `intervals[i] = [starti, endi]`, return the minimum number of conference rooms 
  required.

![](img/2021-09-23-00-21-38.png)

---

![](img/2021-09-23-00-22-43.png)

![](img/2021-09-23-00-23-30.png)

- **本题题意： 如果`(1, 4), (5, 7)` 可以共存，那么在这里只需要一个room**

![](img/2021-09-23-00-23-56.png)

![](img/2021-09-23-11-41-22.png)

![](img/2021-09-23-11-42-12.png)

![](img/2021-09-23-11-43-03.png)

![](img/2021-09-23-11-46-13.png)

![](img/2021-09-23-11-46-50.png)

![](img/2021-09-23-11-48-50.png)

![](img/2021-09-23-11-49-07.png)

![](img/2021-09-23-11-50-29.png)

---

```java
class Solution {
    public int minMeetingRooms(int[][] intervals) {
        int n = intervals.length;
        Arrays.sort(intervals, (a, b) -> (a[0] - b[0]));
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
            new Comparator<Integer>() {
                @Override
                public int compare(Integer e1, Integer e2) {
                    if (e1 == e2) {
                        return 0;
                    }
                    return e1 < e2 ? -1 : 1;
                }                
            }
        );
        
        minHeap.offer(intervals[0][1]);
        for (int i = 1; i < n; i++) {
            if (intervals[i][0] >= minHeap.peek()) {
                minHeap.poll();
            }
            minHeap.offer(intervals[i][1]);
        }
        return minHeap.size();
    }
}
```
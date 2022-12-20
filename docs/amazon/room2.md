## 253. Meeting Rooms II

- Given an array of meeting time intervals intervals where 
  `intervals[i] = [starti, endi]`, return the minimum number of conference rooms 
  required.

![](img/2021-09-23-00-21-38.png)

---

![](img/2021-09-23-00-22-43.png)

![](img/2021-09-23-00-23-30.png)

- **本题题意： 如果`(1, 4), (5, 7)` 可以共存，那么在这里只需要一个room**
  - `(2, 8)` 需要单独一个room
  - `(3, 4), (5, 9)` 可以用同一个room

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
class _253_MeetingRooms_II {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals == null || intervals.length == 0) return 0;

        Arrays.sort(intervals, (a, b) -> (a[0] - b[0]));
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(intervals.length,
                (e1, e2) -> (e1[1] - e2[1]));

        for (int[] arr : intervals) {
            minHeap.offer(arr);
        }

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= minHeap.peek()[1]) {
                minHeap.poll();
            }
        }
        return minHeap.size();
    }

    public int minMeetingRooms_improve(int[][] intervals) {
        if (intervals == null || intervals.length == 0) return 0;

        Arrays.sort(intervals, (a, b) -> (a[0] - b[0]));

        PriorityQueue<Integer> minHeap = new PriorityQueue<>(intervals.length,
                (a, b) -> (a - b));

        minHeap.offer(intervals[0][1]);

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= minHeap.peek()) {
                minHeap.poll();
            }
            minHeap.offer(intervals[i][1]);
        }
        return minHeap.size();
    }

    public static void main(String[] args) {
        int[][] intervals = new int[][]{{1, 4}, {2, 8}, {5, 7}, {5, 9}, {3, 4}};
        _253_MeetingRooms_II meetingRooms = new _253_MeetingRooms_II();
        int size = meetingRooms.minMeetingRooms(intervals);
        System.out.println(size);
    }
}
```
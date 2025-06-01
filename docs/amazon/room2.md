## 253. Meeting Rooms II

![](img/2025-02-01-11-38-50.png)


- [Explanation](https://leetcode.com/problems/meeting-rooms-ii/editorial/)
---


- **Example**:

```ruby

       Meetings = [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]

       => Sorting:    [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]
      
  
        [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]
        meetingRooms = [10], length = 1


        [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]
        meetingRooms = [10, 7], length = 2                  since 2 < 10, push 7 into rooms
        heapify => meetingRooms = [7, 10]



        [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]
        meetingRooms = [7, 10, 19], length = 3              since 3 < 7, push 19 into rooms



        [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]
        meetingRooms = [7, 10, 19], length = 3          since 10 > 7, heapq.pop(), push 20 to rooms
        meetingRooms = [20, 10, 19] 
        heapify => meetingRooms = [10, 19, 20] len = 3


        [1, 10], [2, 7], [3, 19], [10, 20], [11, 30]
        meetingRooms = [10, 19, 20], length = 3               since 11 > 10, heapq.pop(), push 30 to rooms
        meetingRooms = [30, 19, 20]         
        heapify => meetingRooms = [19, 20, 30]
```

---

```py
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[0])
        free_rooms = []
        heapq.heappush(free_rooms, intervals[0][1])
        for i in range(1, len(intervals)):
            meeting = intervals[i]
            if free_rooms[0] <= meeting[0]:
                heapq.heappop(free_rooms)
            heapq.heappush(free_rooms, meeting[1])
        return len(free_rooms)
```
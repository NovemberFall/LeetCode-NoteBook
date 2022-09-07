## 729. My Calendar I
![](img/2022-09-06-23-13-56.png)

```java
class MyCalendar {
    List<int[]> calendars;

    public MyCalendar() {
        calendars = new ArrayList<>();
    }
    
    public boolean book(int start, int end) {
        for (int[] b : calendars) {
            int s = Math.max(b[0], start);
            int e = Math.min(b[1], end);
            if (s < e) {
                return false;
            }
        }
        calendars.add(new int[]{start, end});
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * boolean param_1 = obj.book(start,end);
 */
```

- [Brute-Force](https://leetcode.com/problems/my-calendar-i/discuss/1262664/Easy-Solutions-w-Explanation-and-Diagram-or-Brute-Force-and-Binary-Search-Approach)
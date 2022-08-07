## 635. Design Log Storage System
![](img/2022-08-01-22-27-33.png)
![](img/2022-08-01-22-27-42.png)

```java
class LogSystem {
    List<String[]> timestamps;
    Map<String, Integer> idx;

    public LogSystem() {
        timestamps = new ArrayList<>();
        idx = new HashMap<>();
        idx.put("Year", 4);
        idx.put("Month", 7);
        idx.put("Day", 10);
        idx.put("Hour", 13);
        idx.put("Minute", 16);
        idx.put("Second", 19);
    }
    
    public void put(int id, String timestamp) {
        timestamps.add(new String[]{String.valueOf(id), timestamp});
    }
    
    public List<Integer> retrieve(String start, String end, String granularity) {
        List<Integer> res = new ArrayList<>();
        int index = idx.get(granularity);
        for (String[] ts : timestamps) {
            if (ts[1].substring(0, index).compareTo(start.substring(0, index)) >= 0
               && ts[1].substring(0, index).compareTo(end.substring(0, index)) <= 0 ) {
                res.add(Integer.parseInt(ts[0]));
            } 
        }
        return res;
    }
}

/**
 * Your LogSystem object will be instantiated and called as such:
 * LogSystem obj = new LogSystem();
 * obj.put(id,timestamp);
 * List<Integer> param_2 = obj.retrieve(start,end,granularity);
 */
```
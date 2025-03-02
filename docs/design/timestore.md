## 981. Time Based Key-Value Store
![](img/2022-12-30-23-04-10.png)
---
![](img/2022-12-30-23-04-43.png)

```java
class TimeBased_KeyValue_Store {
    static class Pair {
        String value;
        int time;

        public Pair(String value, int time) {
            this.value = value;
            this.time = time;
        }
    }

    Map<String, List<Pair>> map;

    public TimeBased_KeyValue_Store() {
        this.map = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        map.putIfAbsent(key, new ArrayList<>());
        map.get(key).add(new Pair(value, timestamp));
    }

    public String get(String key, int timestamp) {
        if (!map.containsKey(key)) {
            return "";
        }
        List<Pair> currentKeyList = map.get(key);
        int index = largestSmallerOrEqual(timestamp, currentKeyList);
        if (index == -1) {
            return "";
        }
        return currentKeyList.get(index).value;
    }

    private int largestSmallerOrEqual(int timestamp, List<Pair> currentKeyList) {
        int left = 0, right = currentKeyList.size() - 1;

        while (left < right - 1) {
            int mid = left + (right - left) / 2;
            if (currentKeyList.get(mid).time == timestamp) {
                left = mid;
            } else if (currentKeyList.get(mid).time < timestamp) {
                left = mid;
            } else {
                right = mid;
            }
        }
        if (currentKeyList.get(right).time <= timestamp) {
            return right;
        }
        if (currentKeyList.get(left).time <= timestamp) {
            return left;
        }
        return -1;
    }
}
```

---

### TreeMap
![](img/2022-12-31-00-11-34.png)

```java
class TimeBased_KeyValue_Store_Simple {
    Map<String, TreeMap<Integer, String>> map;

    public TimeBased_KeyValue_Store_Simple() {
        this.map = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        map.putIfAbsent(key, new TreeMap<>());
        map.get(key).put(timestamp, value);
    }

    public String get(String key, int timestamp) {
        TreeMap<Integer, String> treeMap = map.get(key);
        if (treeMap == null) {
            return "";
        }
        Map.Entry<Integer, String> entry = treeMap.floorEntry(timestamp);
        return entry == null ? "" : entry.getValue();
    }
}
```
---


```py
class TimeMap:

    def __init__(self):
        self.map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.map.setdefault(key, [])
        self.map[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.map:
            return ''
        cur_list = self.map[key]
        index = self.binary_search(cur_list, timestamp)
        if index == -1:
            return ''
        return cur_list[index][1]

    def binary_search(self, cur_list, timestamp):
        left, right = 0, len(cur_list) - 1
        while left < right - 1:
            mid = (left + right) >> 1
            if cur_list[mid][0] <= timestamp:
                left = mid
            else:
                right = mid - 1

        if cur_list[right][0] <= timestamp:
            return right
        if cur_list[left][0] <= timestamp:
            return left
        return -1

# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
```

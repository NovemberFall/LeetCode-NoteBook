## 981. Time Based Key-Value Store
![](img/2023-10-06-22-48-37.png)

```java
class _981_TimeBased_KeyValue_Store {
    static class Data {
        String val;
        int time;

        public Data(String val, int time) {
            this.val = val;
            this.time = time;
        }
    }

    Map<String, List<Data>> map;
    public TimeMap() {
        map = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        map.putIfAbsent(key, new ArrayList<>());
        map.get(key).add(new Data(value, timestamp));
    }

    public String get(String key, int timestamp) {
        String res = "";
        if (!map.containsKey(key)) {
            return res;
        }
        List<Data> values = map.get(key);

        int left = 0, right = values.size() - 1;
        while (left <= right) {
            int mid = left + (right - left >> 1);
            if (values.get(mid).time <= timestamp) {
                res = values.get(mid).val;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}
```
## 362. Design Hit Counter
![](img/2023-07-09-00-59-02.png)

- 300秒内，`time[index]` 用来保存 `timestamp % 300` 后的time。
- 如果 `time[index]` 从未用来保存，则初始化为 `1` 


- `O(s)` s is total seconds in given time interval, in this case 300.
  basic ideal is using buckets. `1` bucket for every second because we only need to keep the recent hits info for 
  `300` seconds. `hit[]` array is wrapped around by `mod` operation. Each hit bucket is associated with `times[]` 
  bucket which `record current time`. If it is not current time, it means it is 300s or 600s... ago and need to 
  reset to 1.

---

```java
class DesignHitCounter_array {
    private int[] times;
    private int[] hits;

    public DesignHitCounter_array() {
        times = new int[300];
        hits = new int[300];
    }

    /**
     * Record a hit.
     * @param timestamp - The current timestamp (in seconds granularity).
     */
    public void hit(int timestamp) {
        int index = timestamp % 300;
        if (times[index] != timestamp) {
            times[index] = timestamp;
            hits[index] = 1;
        } else {
            hits[index]++;
        }
    }

    /**
     * Return the number of hits in the past 5 minutes.
     * @param timestamp - The current timestamp (in seconds granularity).
     */
    public int getHist(int timestamp) {
        int total = 0;
        for (int i = 0; i < 300; i++) {
            if (timestamp - times[i] < 300) {
                total += hits[i];
            }
        }
        return total;
    }

    public static void main(String[] args) {
        DesignHitCounter_array designHitCounter = new DesignHitCounter_array();
        designHitCounter.hit(1);
        designHitCounter.hit(1);
        designHitCounter.hit(1);
        designHitCounter.hit(2);
        designHitCounter.hit(3);
        System.out.println(designHitCounter.getHist(4)); // 5

        designHitCounter.hit(300);
        designHitCounter.hit(300);
        designHitCounter.hit(300);
        System.out.println(designHitCounter.getHist(300)); // 8
        System.out.println(designHitCounter.getHist(301)); // 5
    }
}
```
---

```ruby
        designHitCounter.hit(1);
        designHitCounter.hit(1);
        designHitCounter.hit(1);
        designHitCounter.hit(2);
        designHitCounter.hit(3);
        System.out.println(designHitCounter.getHist(4)); // 5

        designHitCounter.hit(300);
        designHitCounter.hit(300);
        designHitCounter.hit(300);
        System.out.println(designHitCounter.getHist(300)); // 8
        System.out.println(designHitCounter.getHist(301)); // 5


hit(1) 三次， hit(2) 一次， hit(3) 一次， 3 + 1 + 1 = 5

hit(300) 三次，getHits(300)的时候 5 + 3 = 8 次，

当 hit(301) 的时候，301 % 300 = 1，  这里 times[1] = 1
违反 timestamp - times[i] < 300 , 所以不会累计 index = 1的 hit's times. 
所以最后 是 5.
```
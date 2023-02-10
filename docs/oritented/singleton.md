## Singleton

```java
/*
    synchronized getInstance()使得Singleton线程安全
    static _instance 使得只有一个instance
    private ParkingLot()使得constructor只被调用一次
 */
public class ParkingLot {
    private static ParkingLot _instance = null;

    private List<Level> levels;

    private ParkingLot() {
        levels = new ArrayList<>();
    }

    public static synchronized ParkingLot getInstance() {
        if (_instance == null) {
            _instance = new ParkingLot();
        }
        return _instance;
    }
}
```
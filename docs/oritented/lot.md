## Design a Parking Lot

- 1. General steps for OOD
- 2. Basic Design
- 3. Extension
---
- actor: `parking Lot`, `car`, `parking spot`
- use case:
  - parking lot - levels, parking spots, different parking spots for different types of vehicles
  - functionality: tell the driver if there's empty spot. if there is, assign to the free space
  - vehicle:
    - large, compact
  - parking spot: 
    - available? 
    - vehicle type
---

1. Clarify the **Functionality**, Understand/Analyze the **USE CASE**

    **Use cases** -> **Contract**
    One level or multiple levels ? multi
    Parking-Spot / Vehicle sizes? compact large
    Track the location of each vehicle? no
    Charge fee? no

2. Classes and their relationships
**vehicle, ParkingSpot, ParkingLot, Level**
    
   - **Single-responsibility Principle: A class should have only one job**

        **Association**: a general binary relationship that describe an activity between two classes.
        - **Composition**: a special form of association, which represents an ownership relationship
          between two classes. (**has-a**)
        - **Aggregation**: a special form of association, usually one "holds" a reference of another,
          but weaker than composition. (no real ownership)
        **Inheritance(is-a)**

        - Parking Lot -- Level (has-a, composition)
        - Level -- Parking Spot (has-a, composition)
        - Vehicle -- Parking Spot (aggreation)
        - Vehicle -- Car, Truck (inheritance)
        - Parking Lot -- Vehicle (association)

3. **For complicated designs, first focus on public methods (APIs)**: 别人怎么调用你的程序？

        Functionality:
            1. Basic funcionality: for a given vehicle, tell whether there is an available spot in the parking lot.
            2. Possible extensions: provide available spot locations, assign spot to the vehicle

---

```java
public enum VehicleSize {
    Compact(1),
    Large(2);

    private final int size;

    VehicleSize(int size) {
        this.size = size;
    }

    public int getSize() {
        return size;
    }
}


public abstract class Vehicle {
    public abstract VehicleSize getVehicleSize();
}


public class Car extends Vehicle{
    @Override
    public VehicleSize getVehicleSize() {
        return VehicleSize.Compact;
    }
}


public class Truck extends Vehicle{
    @Override
    public VehicleSize getVehicleSize() {
        return VehicleSize.Large;
    }
}


public class ParkingSpot {
    private final VehicleSize vehicleSize;
    private Vehicle currentVehicle;

    public ParkingSpot(VehicleSize vehicleSize) {
        this.vehicleSize = vehicleSize;
    }

    public boolean fit(Vehicle v) {
        if (currentVehicle == null && vehicleSize.getSize() >= v.getVehicleSize().getSize()) {
            return true;
        }
        return false;
    }

    /* record a vehicle is parked in by updating the currentVehicle field */
    public void park(Vehicle v) {
        currentVehicle = v;
    }

    public void leave() {
        currentVehicle = null;
    }

    public Vehicle getVehicle() {
        return currentVehicle;
    }
}



public class Level {
    private final List<ParkingSpot> spots;

    public Level(int numOfSpots) {
        List<ParkingSpot> list = new ArrayList<>(numOfSpots);
        int i = 0;
        for (; i < numOfSpots / 2; i++) {
            list.add(new ParkingSpot(VehicleSize.Compact));
        }
        for (; i < numOfSpots; i++) {
            list.add(new ParkingSpot(VehicleSize.Large));
        }
        spots = Collections.unmodifiableList(list);
    }

    public boolean hasSpot(Vehicle vehicle) {
        for (ParkingSpot s : spots) {
            if (s.fit(vehicle)) {
                return true;
            }
        }
        return false;
    }

    public boolean park(Vehicle vehicle) {
        for (ParkingSpot s : spots) {
            if (s.fit(vehicle)) {
                s.park(vehicle);
                return true;
            }
        }
        return false;
    }

    public boolean leave(Vehicle vehicle) {
        for (ParkingSpot s : spots) {
            if (s.getVehicle() == vehicle) {
                s.leave();
                return true;
            }
        }
        return false;
    }
}



public class ParkingLot {
    private final Level[] levels;

    public ParkingLot(int numLevels, int numSpotsPerLevel) {
        levels = new Level[numLevels];
        for (int i = 0; i < numLevels; i++) {
            levels[i] = new Level(numSpotsPerLevel);
        }
    }

    public boolean hasSpot(Vehicle vehicle) {
        for (Level l : levels) {
            if (l.hasSpot(vehicle)) {
                return true;
            }
        }
        return false;
    }

    public boolean park(Vehicle vehicle) {
        for (Level l : levels) {
            if (l.park(vehicle)) {
                return true;
            }
        }
        return false;
    }

    public boolean leave(Vehicle vehicle) {
        for (Level l : levels) {
            if (l.leave(vehicle)) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        ParkingLot lot = new ParkingLot(4, 10);
        List<Vehicle> list = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            final Vehicle v = i % 2 == 0 ? new Car() : new Truck();
            list.add(v);
            System.out.println(v.getVehicleSize());
            boolean hasSpot = lot.hasSpot(v);
            if (i < 40) {
                // make sure you enable assert if using it for test
                assert hasSpot;
                assert lot.park(v);
            } else {
                assert !hasSpot;
                assert !lot.park(v);
            }
        }

        assert list.size() == 50;
        int i = 0;
        for (Vehicle v : list) {
            assert i >= 40 || lot.leave(v);
            i++;
        }
    }
}
```
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

        Association: a general binary relationship that describe an activity between two classes.
        - Composition: a special form of association, which represents an ownership relationship
          between two classes. (**has-a**)
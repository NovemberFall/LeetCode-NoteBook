## 134. Gas Station
![](img/2022-05-19-15-11-34.png)
![](img/2022-05-19-15-11-44.png)

- 1, if sum of gas is more than sum of cost, then there must be a solution. 
  And the question guaranteed that the solution is unique
  (The first one I found is the right one).
- 2, The tank should never be negative, so restart whenever 
  there is a negative number.

```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        //determine if we have a solution
        int total = 0;
        for (int i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
        }
        if (total < 0) {
            return -1;
        }
   
        // find out where to start
        int tank = 0;
        int start = 0;
        for (int i = 0; i < gas.length;i++) {
            tank += gas[i] - cost[i];
            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }
        return start;
    }
}
```
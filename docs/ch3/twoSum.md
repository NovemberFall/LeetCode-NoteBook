## 1. Two Sum
![](img/2021-08-08-23-39-08.png)
---

![](img/2021-02-07-03-12-33.png)


```java
public int[] towSum(int[] nums, int target){
    Map<Integer, Integer> map = new HashMap<>();
    for(int i=0; i<nums.length; i++){
        int complement = target - nums[i];
        if(map.cotainsKey(complement)){
            return new int[]{ map.get(complement),i}
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");
}
```
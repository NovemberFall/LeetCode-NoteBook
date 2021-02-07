# 1. Two Sum


```java
Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
You may assume that each input would have *exactly* one solution, 
and you may not use the same element twice. 

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
-----

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
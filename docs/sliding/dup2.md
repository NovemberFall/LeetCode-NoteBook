## 219. Contains Duplicate II
![](img/2022-12-20-00-19-17.png)

![](img/2022-12-20-17-55-02.png)
![](img/2022-12-20-17-55-13.png)

### Method 1

```java
class _219_ContainsDuplicate_II {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if (nums == null || nums.length == 0) return true;

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i]) && Math.abs(i - map.get(nums[i])) <= k) {
                return true;
            }
            map.put(nums[i], i);
        }
        return false;
    }
}
```

---

### Method 2
![](img/2022-12-20-17-59-14.png)

```java
class _219_ContainsDuplicate_II {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if (nums == null || nums.length == 0) return true;

        Set<Integer> set = new HashSet<>();
        for (int fast = 0; fast < nums.length; fast++) {
            if (!set.add(nums[fast])) {
                return true;
            }
            if (fast >= k) {
                set.remove(nums[fast - k]);
            }
        }
        return false;
    }
}
```
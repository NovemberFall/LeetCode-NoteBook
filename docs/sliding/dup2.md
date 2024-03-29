## 219. Contains Duplicate II
![](img/2022-12-20-00-19-17.png)

![](img/2022-12-20-17-55-02.png)
![](img/2022-12-20-17-55-13.png)

---

### Method 1
![](img/2022-12-20-17-59-14.png)

```java
class containsDuplicate_II_slidingWindow {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if (nums == null || nums.length == 0) return true;

        Set<Integer> window = new HashSet<>();
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            if (right - left > k) {
                window.remove(nums[left]);
                left++;
            }
            if (window.contains(nums[right])) {
                return true;
            }
            window.add(nums[right]);
        }
        return false;
    }
}
```

---

### version II

```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Set<Integer> window = new HashSet<>();
        int slow = 0;
        for (int fast = 0; fast < nums.length; fast++) {
            if (!window.add(nums[fast])) {
                if (fast - slow <= k) {
                    return true;
                }
            }
            if (window.size() > k) {
                window.remove(nums[slow]);
                slow++;
            }
        }
        return false;
    }
}
```
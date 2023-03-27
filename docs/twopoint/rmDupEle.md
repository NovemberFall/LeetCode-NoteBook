## 26. Remove Duplicates from Sorted Array

![](img/2021-06-30-19-49-04.png)

![](img/2021-06-30-19-49-12.png)

---

![](img/2021-06-30-19-49-50.png)

- Time = 0(n)
- Space = O(1)


```java
class removeDuplicatesFromSortedArray {
    public int removeDuplicates(int[] nums) {
        int slow = 0;
        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[slow] == nums[fast]) {
                continue;
            }
            nums[slow + 1] = nums[fast];
            slow++;
        }
        return ++slow;
    }
}
```

---

### HashSet

```java
class removeDuplicatesFromSortedArray_set {
    public int removeDuplicates(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int slow = 0;
        set.add(nums[0]);
        for (int fast = 1; fast < nums.length; fast++) {
            if (!set.add(nums[fast])) {
                continue;
            }
            nums[slow + 1] = nums[fast];
            slow++;
        }
        return ++slow;
    }
}
```
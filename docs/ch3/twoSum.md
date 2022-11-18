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

---

## Two Pointers

```java
class _1_TwoSum_Correct {
    public static int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        Integer[] original = new Integer[n];
        for (int i = 0; i < n; i++) {
            original[i] = i;
        }
        Arrays.sort(original, (a, b) -> (nums[a] - nums[b]));
        int left = 0, right = n - 1;
        while (left < right) {
            int curSum = nums[original[left]] + nums[original[right]];
            if (curSum == target) {
                return new int[]{original[left], original[right]};
            } else if (curSum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[]{-1, -1};
    }
}
```
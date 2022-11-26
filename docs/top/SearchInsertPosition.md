## 35. Search Insert Position
![](img/2022-11-25-21-05-19.png)

```java
public class _35_SearchInsertPosition {
    public static int searchInsert(int[] nums, int target) {
        if (nums == null || nums.length == 0) return -1;

        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    public static void main(String[] args) {
        int[] nums = {1,3,5,6};
        int target = 5;
        int res = searchInsert(nums, target);

        System.out.println(res);

        nums = new int[]{1, 2, 3, 4, 5, 7, 9, 11};
        res = searchInsert(nums, 10);
        System.out.println(res);
    }
}
```
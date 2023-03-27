## 75. Sort Colors
![](img/2023-03-27-13-46-36.png)
---

- if we want to do it via **one-pass** alogorithm, the best way is using `Quick Sort`:

- [youtube](https://www.youtube.com/watch?v=4xbWSRZHqac&t=10s)

---
```java
class _75_SortColors {
    public void sortColors(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
    }

    private void quickSort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        int pivotPos = partition(nums, left, right);
        quickSort(nums, left, pivotPos - 1);
        quickSort(nums, pivotPos + 1, right);
    }

    private int partition(int[] nums, int left, int right) {
        int pivotIdx = left + new Random().nextInt(right - left + 1);
        int pivot = nums[pivotIdx];
        swap(nums, pivotIdx, right);
        int leftBound = left;
        int rightBound = right - 1;
        while (leftBound <= rightBound) {
            if (nums[leftBound] < pivot) {
                leftBound++;
            } else if (nums[rightBound] >= pivot) {
                rightBound--;
            } else {
                swap(nums, leftBound, rightBound);
                leftBound++;
                rightBound--;
            }
        }
        swap(nums, leftBound, right);
        return leftBound;
    }

    private void swap(int[] nums, int pivotIdx, int right) {
        int tmp = nums[pivotIdx];
        nums[pivotIdx] = nums[right];
        nums[right] = tmp;
    }
}
```
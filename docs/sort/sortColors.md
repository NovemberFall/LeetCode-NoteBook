## 75. Sort Colors
![](img/2023-03-27-13-46-36.png)
---

- if we want to do it via **one-pass** alogorithm, the best way is using `Quick Sort`:

- [youtube](https://www.youtube.com/watch?v=4xbWSRZHqac&t=10s)

---

### Rainbow Sort




---

#### Python

```py
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        self.quickSort(nums, 0, len(nums) - 1)

    def quickSort(self, nums: List[int], left: int, right: int) -> None:
        if left >= right:
            return
        pivot = self.partition(nums, left, right)
        self.quickSort(nums, left, pivot - 1)
        self.quickSort(nums, pivot + 1, right)

    def partition(self, nums: List[int], left: int, right: int) -> int:
        pivotIdx = random.randint(left, right)
        pivotVal = nums[pivotIdx]
        self.swap(nums, pivotIdx, right)
        leftBound = left
        rightBound = right - 1
        while leftBound <= rightBound:
            if nums[leftBound] < pivotVal:
                leftBound += 1
            elif nums[rightBound] >= pivotVal:
                rightBound -= 1
            else:
                self.swap(nums, leftBound, rightBound)
                leftBound += 1
                rightBound -= 1
        self.swap(nums, leftBound, right)
        return leftBound

    def swap(self, nums: List[int], left: int, right: int) -> None:
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
```

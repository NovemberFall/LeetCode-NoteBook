## 34. Find First and Last Position of Element in Sorted Array
![](img/2022-08-12-13-58-25.png)
---

### tempalte.2



```java
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        res = [-1, -1]
        if nums is None or len(nums) == 0:
            return res
        res[0] = self.findFirst(nums, target)
        res[1] = self.findLast(nums, target)
        return res

    def findFirst(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left < right - 1:
            mid = (left + right) >> 1
            if nums[mid] == target:
                right = mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        if nums[left] == target:
            return left
        if nums[right] == target:
            return right
        return -1

    def findLast(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left < right - 1:
            mid = (left + right) >> 1
            if nums[mid] == target:
                left = mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        if nums[right] == target:
            return right
        if nums[left] == target:
            return left
        return -1
```

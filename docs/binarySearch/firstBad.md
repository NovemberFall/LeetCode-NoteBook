## 278. First Bad Version
![](img/2023-07-12-10-09-19.png)

---

### Template 2

- when first bad version was found by using **Binary Search**, we **cannot know which one is first**
- we have to include **mid** because **mid** is a bad version and we don't know if it is the **first one**

---
```py
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n
        while left < right - 1:
            mid = (left + right) >> 1
            if isBadVersion(mid):
                right = mid
            else:
                left = mid + 1
        
        if isBadVersion(left):
            return left
        if isBadVersion(right):
            return right
        
        return -1
```
## Closest In Sorted Array
![](img/2025-01-25-01-07-58.png)
---

```java

```
---

#### Python

```py
  def closest(self, array, target):
    """
    input: int[] array, int target
    return: int
    """
    # write your solution here
    if array is None or len(array) == 0:
      return -1
    left, right = 0, len(array) - 1
    idx = -1
    dist = float("inf")
    while left <= right:
      mid = (left + right) // 2
      if array[mid] == target:
        return mid
      elif array[mid] < target:
        if abs(array[mid] - target) < dist:
          idx = mid
          dist = abs(array[mid] - target)
        left = mid + 1
      else:
        if abs(array[mid] - target) < dist:
          idx = mid
          dist = abs(array[mid] - target)        
        right = mid - 1
    return idx
```
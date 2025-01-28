## Closest In Sorted Array
![](img/2025-01-25-01-07-58.png)
---

```java
class _Closest_In_SortedArray {
    public int closest(int[] array, int target) {
        if (array == null || array.length == 0) return -1;

        int left = 0, right = array.length - 1;
        while (left < right - 1) {
            int mid = (left + right) >>> 1;
            if (array[mid] == target) {
                return mid;
            } else if (array[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }

        if (Math.abs(array[left] - target) <= Math.abs(array[right] - target)) {
            return left;
        } else {
            return right;
        }
    }
}
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
---

### To simplify

```py
class Solution(object):
  def closest(self, array, target):
    """
    input: int[] array, int target
    return: int
    """
    # write your solution here
    if array is None or len(array) == 0:
      return -1
    left, right = 0, len(array) - 1
    idx = 0
    while left <= right:
      mid = (left + right) >> 1
      if array[mid] == target:
        return mid
      if abs(array[mid] - target) < abs(array[idx] - target):
        idx = mid
      
      if array[mid] < target:
        left = mid + 1
      else:
        right = mid - 1
        
    return idx
```
---

#### Template 2

```py
class Solution(object):
  def closest(self, array, target):
    """
    input: int[] array, int target
    return: int
    """
    # write your solution here
    if array is None or len(array) == 0:
      return -1
    left, right = 0, len(array) - 1
    while left < right - 1:
      mid = (left + right) >> 1
      if array[mid] == target:
        return mid
      elif array[mid] < target:
        left = mid
      else:
        right = mid

    if abs(array[left] - target) <= abs(array[right] - target):
      return left
    else:
      return right
```

---

- Let's analyze why using `left = mid + 1` and `right = mid - 1 `in the new code structure is problematic and how it affects the binary search logic.

![](img/2025-01-28-00-38-47.png)

![](img/2025-01-28-01-26-20.png)

![](img/2025-01-28-01-26-43.png)
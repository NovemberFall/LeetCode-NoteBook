## Selection sort

- **Worst-case**: o(n^2)
- **swap**: o(n)
  
- **best-case**: o(n^2)
- **swap**: o(1)

- **Average**: o(n^2)

---

![](img/2025-02-02-23-40-03.png)


![](img/2025-02-02-23-40-49.png)


![](img/2025-02-03-09-25-27.png)
---

```py
class SS_Solution:
    def selection_sort(self, arr: List[int]) -> None:
        n = len(arr)
        #  (could do i < n-1 because single element is also min element)
        for i in range(n - 1):
            #  assume the min is the first element
            min_idx = i
            #  test against elements after i to find the smallest
            for j in range(i + 1, n):
                if arr[j] < arr[min_idx]:  # if this element is less, then it is the new minimum
                    min_idx = j
            if min_idx != i:
                self.swap(arr, i, min_idx)

    def swap(self, arr: List[int], i: int, j: int) -> None:
        arr[i], arr[j] = arr[j], arr[i]


##############################



# Test function
def test_selection_sort():
    ss = SS_Solution()

    # Test case
    arr = [64, 25, 12, 22, 11]
    print("Original array:", arr)

    ss.selection_sort(arr)

    print("Sorted array:  ", arr)


# Run the test
test_selection_sort()
```
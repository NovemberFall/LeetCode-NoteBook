## Quick Sort

- Given an array of integers, sort the elements in the array in ascending order. 
  The quick sort algorithm should be used to solve this problem.

```ruby
Examples

{1} is sorted to {1}
{1, 2, 3} is sorted to {1, 2, 3}
{3, 2, 1} is sorted to {1, 2, 3}
{4, 2, -3, 6, 1} is sorted to {-3, 1, 2, 4, 6}

Corner Cases:

What if the given array is null? 
In this case, we do not need to do anything.

What if the given array is of length zero? 
In this case, we do not need to do anything.
```

---

```java
public class Solution {
  public int[] quickSort(int[] array) {
    // Write your solution here
    if(array == null || array.length <= 1){
      return array;
    }
    QuickSort(array, 0, array.length - 1);
    return array;
  }

  public void QuickSort(int[] array, int left, int right){
    if(left >= right){
      return;
    }
    //define a pivot and use the pivot to partition the array
    int pivotPos = partition(array, left, right);
    //piovt is already at its position, when we do the 
    //recursive call on the two partitions,
    //pivot should not be included in any of them
    QuickSort(array, left, pivotPos - 1);
    QuickSort(array, pivotPos + 1, right);
  }

  private int partition(int[] array, int left, int right){
    int pivotIndex = left + new Random().nextInt(right - left + 1);
    int pivot = array[pivotIndex];
    //swap the pivot element to the rightmost position first
    swap(array, pivotIndex, right);
    int leftBound = left;
    int rightBound = right - 1; 
    while(leftBound <= rightBound){
      if(array[leftBound] < pivot){
        leftBound++;
      }else if(array[rightBound] >= pivot){
        rightBound--;
      }else{
        swap(array, leftBound++, rightBound--);
      }
    }
    swap(array, leftBound, right);
    return leftBound;
  }

  public void swap(int[] array, int left, int right){
    int temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
}
```
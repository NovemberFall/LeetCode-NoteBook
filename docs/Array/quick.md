## Quick Sort
![](img/2021-12-13-16-25-17.png)

---
![](img/2021-12-13-16-19-46.png)
- 1. 按照字母顺序大小，决定身高
- 2. David 随机选到， as a pivot
- 3. short than David 站在他的左手边，taller than David 站在右手边
- 4. 然后两边 recursion 

![](img/2021-12-13-16-31-57.png)
- 这里当第一步选定`5`为`pivot`后，暂时把它放在最后一个，这样好划分：
  - a) [0...i)  
  - b) [i...j]  
  - c) (j..n-1)

![](img/2021-12-13-16-43-18.png)
![](img/2021-12-13-16-43-37.png)

- 为什么最后一步要swap(5, 8), 是因为最终所要做的是， 5 的左手边比5小， 5的右手边比5大或者等于!

![](img/2021-12-13-19-55-13.png)

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
    //java.util.Random.nextInt() : The nextInt() is used to 
    //get the next random integer value from this random number 
    // new Random().nextInt(10) => return between 0 and 9
    // so that's why nextInt(right - left + 1)
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
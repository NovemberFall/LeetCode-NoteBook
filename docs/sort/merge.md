## Merge Sort

- [912. Merge Sort | Selection | Quick](https://novemberfall.github.io/LeetCode-NoteBook/#/Array/arraySort)
---

```java
public class Solution {
  public int[] mergeSort(int[] array) {
    // Write your solution here
    if(array == null || array.length <= 1){
      return array;
    }
    
    return mergeSort(array, 0, array.length - 1);
    
  }
  
  private int[] mergeSort(int[] array, int left, int right){
    //base
    if(left == right){
      return new int[]{array[left]};
    }
    int mid = left + (right - left)/2;
    int[] leftResult = mergeSort(array, left, mid);
    int[] rightResult = mergeSort(array, mid+1, right);
    return merge(leftResult, rightResult);
  }
  
  private int[] merge(int[] leftResult, int[] rightResult){
    int [] result = new int[leftResult.length + rightResult.length];
    
    int leftIndex = 0, rightIndex = 0, resultIndex = 0;
    
    while(leftIndex < leftResult.length && rightIndex < rightResult.length){
      if(leftResult[leftIndex] <= rightResult[rightIndex]){
        result[resultIndex] = leftResult[leftIndex];
        leftIndex++;
        resultIndex++;
      }else{
        result[resultIndex] = rightResult[rightIndex];
        rightIndex++;
        resultIndex++;
      }
    }
    //假如，corner case, 如果左部分数组全部 <= 右半数组， 
    //    由于谁小移谁，那么右半数组全部被留下，
    //所以 再次对 右半数组 或者 左半数组 进行最后全部处理：

    //对一个元素都还没被处理的左半数组处理(或者还剩下左边数组的元素还没被处理)，
    //合并到最后数组
    while(leftIndex < leftResult.length){
      result[resultIndex] = leftResult[leftIndex];
      leftIndex++;
      resultIndex++;
    }

    //对一个元素都还没被处理的右半数组处理（或者还剩下右边数组的元素还没被处理)，
    //合并到最后数组
    while(rightIndex < rightResult.length){
      result[resultIndex] = rightResult[rightIndex];
      rightIndex++;
      resultIndex++;
    }
    return result;
  }
}
```
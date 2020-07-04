# Largest And Smallest

```ruby
Use the least number of comparisons to get the largest and 
smallest number in the given integer array. 
Return the largest number and the smallest number.

Assumptions

The given array is not null and has length of at least 1
Examples

{2, 1, 5, 4, 3}, the largest number is 5 and smallest number is 1. return [5, 1].
```


## Analysis

```js
1   2   4   3   6   5   8   7

winner: 2 4 6 8
loser: 1 3 5 7

Step1: split the numbers into winners and losers ———— n/2
Step1: compute the min from the losers ———— n/2-1
Step1: compute the max from the winners ———— n/2-1

smaller: 1  3   5   7
larger: 2   4   6   8


现在重点来看 median 如何分配, 由于数组可能是 odd or even length

- odd case:

假设有一个 7 (odd)个elments 组成的数组

[0   1   2   3   4   5   6]
n = array.length = 7
n / 2 = 3,

inde = 0    [0, 6]
inde = 1    [1, 5]
inde = 2    [2, 4]

可以看到， boundary, 到达 n/2 == 3 的时候， index == 3, 被留下来，
反正它会作为median, 被左右subarray 各自参与compare运算


left subarray (largest):

largest(array, 0, (n - 1) / 2),  //注意这个 n-1, 如果是（7 - 1）/ 2 = 3， 3 刚好是 median
                                 //所以 从 0 - 3， 4 个元素参与 left subarray的compare


right subarray (smallest):

smallest(array, n / 2, n - 1),  //注意这个 n / 2, 如果是（7 - 1）/ 2 = 3， 3 刚好是 median
                                 //所以 从 3 - 6， 4 个元素参与 right subarray的compare



- even case:

假设有一个 8 (even)个elments 组成的数组

[0   1   2   3   4   5   6   7]
n = array.length = 8
n / 2 = 4,

inde = 0    [0, 7]
inde = 1    [1, 6]
inde = 2    [2, 5]
inde = 3    [3, 4]

可以看到， boundary, 到达 n/2 == 4 的时候， 两两compare完成，分配进左右subarray


假设 median = [3, 4]

left subarray (largest):

largest(array, 0, (n - 1) / 2),  //注意这个 n-1, 如果是（8 - 1）/ 2 = 3， 3 刚好是 left of median
                                 //所以 从 0 - 3， 4 个元素参与 left subarray的compare


right subarray (smallest):

smallest(array, n / 2, n - 1),  //注意这个 n / 2, 8 / 2 = 4， 4 刚好是 right of median
                                 //所以 从 4 - 7， 4 个元素参与 right subarray的compare
```





```java
public class Solution {
  public int[] largestAndSmallest(int[] array) {
    // Write your solution here
    int n = array.length;
    for(int i = 0; i < n/2; i++){// n/2 since we need to care odd or even
      if(array[i] < array[n - 1 - i]){//assume n is 7, 7 - 1 - 0 = 6
      //swap(0, 6), swap(1, 5), swap(2, 4), 3 is remainder, but it will
      //assign to largest_subArray and smallest_subArray
        swap(array, i, n - 1 -i);
      }
    }
    return new int[] {largest(array, 0, (n-1)/2), smallest(array, n/2, n-1)};
    //Note: odd case:  (n-1)/2 = (7-1)/2 = 3, n/2=7/2=3, n-1=7-1=6
    //even case:  (n-1)/2 = (8-1)/2 = 3, n/2=8/2=4, n-1=8-1=7
  }

  private int largest(int[]array, int left, int right){
    int max = array[left];
    for(int i = left+1; i <= right; i++){
      max = Math.max(max, array[i]);
    }
    return max;
  }

  private int smallest(int[]array, int left, int right){
    int min = array[left];
    for(int i = left+1; i <= right; i++){
      min = Math.min(min, array[i]);
    }
    return min;
  }

  private void swap(int[]array, int left, int right){
    int temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }  
}

```
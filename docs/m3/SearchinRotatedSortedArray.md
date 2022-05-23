## 33. Search in Rotated Sorted Array
![](img/2022-05-22-21-09-41.png)

- [ 4 5 6 7 1 2 3 ] ，[ 4 5 6 7 ] 和 [ 1 2 3 ] 两段有序。
  而对于 [ 1 2 3 4] 这种，可以看做 [ 1 2 3 4 ] 和 [ ] 特殊的两段有序。

- 而对于我们要找的 target ， target 不在的那一段，所有数字可以看做无穷大，
  `整个数组就可以看做有序的了，可以用正常的二分法去找 target 了`

- example:

- [ 4 5 6 7 1 2 3] ，如果 target = 5，那么数组可以看做 [ 4 5 6 7 inf inf inf ]

- [ 4 5 6 7 1 2 3] ，如果 target = 2，那么数组可以看做 [ -inf -inf - inf -inf 1 2 3]
  
- 我们每次只关心 mid 的值，所以 mid 要么就是 nums [ mid ]，要么就是 inf 或者 -inf。

## 什么时候是 nums [ mid ] 呢？

当 nums [ mid ] 和 target 在同一段里边。

- 怎么判断 nums [ mid ] 和 target 在同一段？
  把 nums [ mid ] 和 target 同时与 nums [ 0 ] 比较，如果它俩都大于 nums [ 0 ] 或者都小于 
  nums [ 0 ]，那么就代表它俩在同一段。例如

```
[4 5 6 7 1 2 3]，如果 target = 5，此时数组看做 [ 4 5 6 7 inf inf inf ]。
nums [ mid ] = 7，target > nums [ 0 ]，nums [ mid ] > nums [ 0 ]，
所以它们在同一段 nums [ mid ] = 7，不用变化。
```

- 怎么判断 nums [ mid ] 和 target 不在同一段？

- 把 nums [ mid ] 和 target 同时与 nums [ 0 ] 比较，如果它俩一个大于 nums [ 0 ] 
  一个小于 nums [ 0 ]，那么就代表它俩不在同一段。例如:

```
[ 4 5 6 7 1 2 3]，如果 target = 2，此时数组看做 [ - inf - inf - inf - inf 1 2 3]。
nums [ mid ] = 7，target < nums [ 0 ]，nums [ mid ] > nums [ 0 ]，
一个大于，一个小于，所以它们不在同一段 nums [ mid ] = - inf，变成了负无穷大。
```

1. 在代码里补充一个细节：

`int mid = low + (high - low) / 2;`

- 由于 两方比较不一致 或者 两方比较一致 的情况下： 我们都要丢弃 半段， 然后执行二分搜索

- 所以每一次更新 mid index: 我们用 （high - low）/ 2

2. 之所以上面动用 三元表达，转换 -inf or inf, 我们最后需要判断 target 是在左边区间，还是右边区间：

- 假如，左边区间 那么 pivot 得到 -inf, 反之 pivot 得到 inf


3. 查看是否 `true == true` OR `false == false`

- if `if((nums[mid] > nums[0]) == (target > nums[0]))`

- 这句表达， 假如 nums[mid] and target both > nums[0], 那么相当返回true; 
  反之都小于， 则 false == false, 也还是返回 true

---
```java
 */
public class SearchInRotatedSortedArray {

    public static int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        while(low <= high){
            int mid = low + (high - low) / 2;
            int pivot = nums[mid];
            if((nums[mid] > nums[0]) == (target > nums[0])){
                pivot = nums[mid];
            }else{
                pivot = (target < nums[0] ? Integer.MIN_VALUE : Integer.MAX_VALUE);
            }

            if(pivot < target){
                low = mid + 1;
            }else if(pivot > target){
                high = mid - 1;
            }else{
                return mid;
            }
        }
        return -1;

    }

    public static void main(String[] args) {
        int [] myArray = new int[]{4,5,6,7,0,1,2};
        System.out.println(search(myArray, 1));
    }
}
```
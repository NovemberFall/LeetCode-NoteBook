## 704. Classical Binary Search

- [704. Classical Binary Search](https://novemberfall.github.io/LeetCode-NoteBook/#/Array/classicalBinarySearch)

```java
public class classical {
    
    public static int binarySearch(int[] array, int target){
        if(array == null || array.length == 0){
            return -1;
        }
        int left = 0;
        int right = array.length - 1;
        while(left <= right){   //cannot : left < right
            int mid = (left + right) / 2;
            if(array[mid] == target){
                return mid;
            }else if(array[mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;//cannot : left = mid
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] a ={1, 2, 4, 5, 7, 8, 9};
        int targetIndex = binarySearch(a, 4);
        System.out.println(targetIndex);
    }
}
```



```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length == null || nums.length == 0) {
        return -1;
    }
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
```
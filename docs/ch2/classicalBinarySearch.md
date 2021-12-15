## 704. Classical Binary Search

- [704. Classical Binary Search](https://novemberfall.github.io/LeetCode-NoteBook/#/Array/classicalBinarySearch)


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
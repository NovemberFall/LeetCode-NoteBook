## 81. Search in Rotated Sorted Array II
![](img/2023-04-02-19-52-31.png)

```java
class _81_SearchInRotatedSortedArray_II {
    public boolean search(int[] nums, int target) {
        // corner case:
        if (nums.length == 1) {
            return nums[0] == target;
        }

        int pivotIdx = findPivotIndex(nums);

        // case 1: if the array is not rotated, only monotonically increasing
        if (pivotIdx == -1) {
            return binarySearch(nums, target, 0, nums.length - 1);
        }

        // case 2: if element at peak is our target
        if (nums[pivotIdx] == target) {
            return true;
        }

        // case 3: if element is in first half
        if (nums[0] <= target) {
            // value to be searched is greater than the first value
            // thus target lies between left and pivotIndex
            return binarySearch(nums, target, 0, pivotIdx - 1);

        } else {// case 4: if element is in second half

            // value to be searched is smaller than the first value
            // thus target lies between pivotIndex and end
            return binarySearch(nums, target, pivotIdx + 1, nums.length - 1);
        }
    }

    private int findPivotIndex(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (mid < right && nums[mid] > nums[mid + 1]) {
                // Ex. 5 6 1 -> mid value = 6 , mid+1 value = 1 => mid>mid+1 => mid is pivot
                return mid;
            }

            if (left < mid && nums[mid] < nums[mid - 1]) {
                // Ex. 5 7 1 2 4 -> mid value = 1 , mid-1 value = 7 => mid-1>mid => mid-1 is pivot
                return mid - 1;
            }

            // EX: [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
            if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
                // attempt to reduce duplicates from consideration

                if (left == mid && mid == right) {
                    // implies array not rotated thus normal binary search to be applied
                    return -1;
                }


                if (nums[left] > nums[left + 1]) {
                    // from the similar logic used above we can be certain that left is the pivot.
                    return left;
                }
                // removing duplicate left value if it is not pivot
                left++;
                if (nums[right - 1] > nums[right]) {
                    // from the similar logic used above we can be certain that right is the pivot.
                    return right - 1;
                }
                // removing duplicate right value if it is not pivot
                right--;
            } else if (nums[left] < nums[mid] || (nums[left] == nums[mid] && nums[mid] > nums[right])) {
                // Implying left sub array is sorted correctly and we should search for the pivot in the right sub array
                left = mid + 1;
            } else {
                // Implying right sub array is sorted correctly and we should search for the pivot in the left sub array
                right = mid - 1;
            }
        }
        return -1;
    }

    private boolean binarySearch(int[] nums, int target, int left, int right) {
        while (left <= right) {
            int mid = left + (right - left) /2;
            if (nums[mid] == target) {
                return true;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}

```
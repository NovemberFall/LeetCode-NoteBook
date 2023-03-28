## 189. Rotate Array
![](img/2023-03-27-17-34-37.png)

---
```ruby
Follow up:

Try to come up with as many solutions as you can. 
There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?


nums = "----->-->"; k =3
result = "-->----->";

reverse "----->-->" we can get "<--<-----"
reverse "<--" we can get "--><-----"
reverse "<-----" we can get "-->----->"
```
---
```java
class Solution {
    public void rotate(int[] nums, int k) {
        if (k == 0) {
            return;
        }
        int len = nums.length;
        k %= len;
        reverse(nums, 0, len-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, len-1);
    }
    
    private void reverse(int[] arr, int left, int right) {
        while(left < right){
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}
```
---
### Brute Force

```java
class rotateArray_bruteForce {
    public void rotate(int[] nums, int k) {
        int n = nums.length;

        k %= nums.length;
        for (int i = 0; i < k; i++) {
            int tmp = nums[n - 1];
            for (int j = n - 1; j > 0; j--) {
                nums[j] = nums[j - 1];
            }
            nums[0] = tmp;
        }
    }

    public static void main(String[] args) {
        rotateArray_bruteForce rabf = new rotateArray_bruteForce();
        int[] nums = new int[]{1, 2, 3, 4, 5, 6, 7};
        rabf.rotate(nums, 3);
        System.out.println(Arrays.toString(nums));
        // [5, 6, 7, 1, 2, 3, 4]
    }
}
```

---

### similar: 186. Reverse Words in a String II
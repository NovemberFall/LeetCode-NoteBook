## 238. Product of Array Except Self
![](img/2022-09-08-16-49-05.png)

- [leetocde discussion](https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space#:~:text=Given%20numbers%20%5B2%2C%203%2C%204%2C%205%5D%2C%20regarding%20the%20third%20number%204%2C%20the%20product%20of%20array%20except%204%20is%202*3*5%20which%20consists%20of%20two%20parts%3A%20left%202*3%20and%20right%205.%20The%20product%20is%20left*right.%20We%20can%20get%20lefts%20and%20rights%3A)

- Given numbers `[2, 3, 4, 5]`, regarding the third number `4`, the product of array except `4` is `2*3*5` which consists of two parts: 
  `left 2*3` and `right 5`. The product is `left*right`. We can get lefts and rights:


```ruby
Numbers:     2    3    4     5
Lefts:            2  2*3 2*3*4
Rights:  3*4*5  4*5    


Let’s fill the empty with 1:

Numbers:     2    3    4     5
Lefts:       1    2  2*3 2*3*4
Rights:  3*4*5  4*5    5     1
```


---
```java
public class _238_ProductOfArrayExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        if (nums == null || n == 0) return new int[]{};

        int[] left = new int[n];
        int[] right = new int[n];
        int[] res = new int[n];
        left[0] = 1;
        right[n - 1] = 1;
        for (int i = 1; i < n; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }
        for (int i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }
        for (int i = 0; i < n; i++) {
            res[i] = left[i] * right[i];
        }

        return res;
    }
}
```

---

### 2nd

```java
public class solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        if (nums == null || n == 0) return new int[]{};

        // int[] left = new int[n];
        // int[] right = new int[n];
        int[] res = new int[n];
        // left[0] = 1;
        // right[n - 1] = 1;
        int left = 1, right = 1;
        for (int i = 0; i < n; i++) {
            if (i > 0) {
                left = nums[i - 1] * left;
            }
            res[i] = left;
        }

        for (int i = n - 1; i >= 0; i--) {
            if (i < n - 1) {
                right = nums[i + 1] * right;
            }
            res[i] = res[i] * right;
        }

        return res;
    }
}
```
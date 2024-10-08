## 560. Subarray Sum Equals K
![](img/2022-05-04-12-25-34.png)

- Solution 1. **Brute force**. We just need two loops `(i, j)` and test if 
  `SUM[i, j] = k`. Time complexity **O(n^2)**, Space complexity **O(1)**. 
  I bet this solution will **TLE**.

- Solution 2. From solution 1, we know the key to solve this problem is `SUM[i, j]`. 
  So if we know `SUM[0, i - 1]` and `SUM[0, j]`, then we can easily get SUM[i, j]. To 
  achieve this, we just need to go through the array, calculate the current sum and 
  save number of all seen `PreSum` to a HashMap. Time complexity **O(n)**, Space 
  complexity **O(n)**.
---

- Set the first element of the array "sum" to 0, and initialize the array "sum" 
  **from index 1 rather than 0**.

```ruby
nums = [1,   2,   3          ]
sum  = [0,   1,   1+2,  1+2+3] 
// Also, the length of "sum" is one more than "nums"  

sum[i] = sum[i - 1] + nums[i - 1]
```

- Using array "sum" to calculate the sum of a subarray
  - `sumOfSubarray = sum[end] - sum[start];`

- For Examples:
  - Caculate the sum of "nums" means using 
    the last element of "sum" minus the first element of "sum" which is 0 :
    `nums[0] + nums[1] + nums[2] = sum[3] - sum[0] = 6 - 0`

#### Brute Force:

```java
public class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;
      
        int[] sum = new int[nums.length + 1];
        sum[0] = 0;
        for (int i = 1; i <= nums.length; i++)
            sum[i] = sum[i - 1] + nums[i - 1];
      
        for (int start = 0; start < sum.length; start++) {
            for (int end = start + 1; end < sum.length; end++) {
                if (sum[end] - sum[start] == k)
                    count++;
            }
        }
        return count;
    }
}
```

- Complexity Analysis
  - Time complexity : **O(n^2)**
  - Space complexity : **O(n)**

---

- Optimization by Hashmap
- Thinkings:
  - our target is: `current sum - previous sum = k`
  - so `current sum - k = previous sum` (which is stored in the map)
  - `sum - k` means the array elements in between add up to **k**

```ruby
Example:
    [1  1  1  2  2  3  3]          k = 3
    [0  1  2  3  5  7  10  13]
```

---

#### HashMap

- Time complexity **O(n)**
- Space complexity **O(n)**


```java
class _560_SubarraySumEqualsK {
    public int subarraySum(int[] nums, int k) {
        int[] sum = new int[nums.length + 1];
        // calculate prefix sum
        for (int i = 1; i <= nums.length; i++) {
            sum[i] = sum[i - 1] + nums[i - 1];
        }
        int count = 0;
        Map<Integer, Integer> preSum = new HashMap<>();
        for (int i = 0; i < sum.length; i++) {
         /*
            1. Hashmap<sum[0,i - 1], frequency>
            2. sum[i, j] = sum[0, j] - sum[0, i - 1]    --> sum[0, i - 1] = sum[0, j] - sum[i, j]
                   k           sum      hashmap-key     -->  hashmap-key  =  sum - k
            3. now, we have k and sum.  
                  As long as we can find a sum[0, i - 1], we then get a valid subarray
                 which is as long as we have the hashmap-key,  we then get a valid subarray
            4. Why don't map.put(sum[0, i - 1], 1) every time ?
                  if all numbers are positive, this is fine
                  if there exists negative number, there could be preSum frequency > 1
        */                  
            if (preSum.containsKey(sum[i] - k)) {
                count += preSum.get(sum[i] - k);
            }
            preSum.put(sum[i], preSum.getOrDefault(sum[i], 0) + 1);
        }
        return count;
    }
}

```
---

#### Python

```py
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        preSum = [0] * (len(nums) + 1)

        # Calculate prefix sum
        for i in range(1, len(nums) + 1):
            preSum[i] = preSum[i - 1] + nums[i - 1]

        count = 0
        preSumMap = {} # Use a dictionary (similar to HashMap)

        for i in range(len(preSum)):
            if (preSum[i] - k) in preSumMap:
                count += preSumMap[preSum[i] - k]

            preSumMap[preSum[i]] = preSumMap.get(preSum[i], 0) + 1

        return count
```
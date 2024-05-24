## 1929. Concatenation of Array
![](img/2024-05-13-16-25-27.png)

---

```java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = new int[2 * n];
        int index = 0;
        for (int i = 0; i < 2; i++) {
            for (int num : nums) {
                ans[index++] = num;
            }
        }
        return ans;
    }
}
```

---

### Python

```py
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(2):
            for n in nums:
                res.append(n)
        
        return res        
```
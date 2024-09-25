## 56. Merge Intervals
![](img/2021-08-20-20-54-19.png)

![](img/2021-08-20-20-54-30.png)

![](img/2021-08-20-22-08-58.png)

![](img/2021-08-20-22-11-46.png)

```ruby


special case:


         [3 4]
         ----
   [1             6]         
   ----------------
-------------------------------------------->
   1  2  3  4  5  6

[1, 6] merge [3, 4]   
```


- T = `O(N*logN)` : **dominating by sorting**
- extra space = O(n), 由于多开一个List, 所以额外空间复杂度是 o(N)

- 每一个数组的区间长度一定是`2`

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        List<int[]> res = new ArrayList<>();
    
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        
        res.add(intervals[0]);
        for (int i = 1; i < intervals.length; i++) {
            int[] lastInterval = res.get(res.size() - 1);
            
            if (lastInterval[1] >= intervals[i][0]) {
                lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
            } else {
                res.add(intervals[i]);
            }
        }
        
        int[][] ans = new int[res.size()][2];
        for (int i = 0; i < ans.length; i++) {
            ans[i] = res.get(i);
        }
        return ans;

        // return res.toArray(new int[res.size()][2]);
    }
}

```

---

#### Python

```py
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        res = []
        res.append(intervals[0])

        for i in range(1, len(intervals)):
            prev = res[-1]
            cur = intervals[i]
            if prev[1] >= cur[0]:
                prev[1] = max(prev[1], cur[1])
            else:
                res.append(cur)

        return res
```
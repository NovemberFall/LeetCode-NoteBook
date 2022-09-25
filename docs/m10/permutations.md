## 46. Permutations

```ruby
Given an array nums of distinct integers, 
return all the possible permutations.
You can return the answer in any order.
```

![](img/2021-06-03-00-49-17.png)

### Analysis:

- [all permutations | DFS](https://novemberfall.github.io/LeetCode-NoteBook/#/m10/permutationsWithStr)

![](img/2022-09-24-17-58-38.png)
- 对以上的`122` 的排列进行去重
![](img/2022-09-24-18-00-46.png)


```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        dfs(nums, 0, res);
        return res;
    }
    
    private void dfs(int[]nums, int index ,List<List<Integer>> res) {
        if (index == nums.length) {
            List<Integer> cur = new ArrayList<>();
            for (int num : nums) {
                cur.add(num);
            }
            res.add(cur);
            return;
        }
        
        for (int i = index; i < nums.length; i++) {
            swap(nums, index, i);
            dfs(nums, index+1, res);
            swap(nums, index, i);
        }
    }
    
    private void swap(int[] nums, int index, int i) {
        int tmp = nums[index];
        nums[index] = nums[i];
        nums[i] = tmp;
    }
}
```

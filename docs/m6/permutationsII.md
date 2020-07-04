# 47. Permutations II | DFS

```java
Given a collection of numbers that might contain duplicates, 
return all possible unique permutations.


Example:
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```




## Analysis:

- 又一题排列， 注意每一个元素只是改变顺序， 最终generate a new list
- DFS 算法
- 注意当 `index == nums.length`时候，越界， indexOutOfbound, 但是这个时候 我们把进行一系列操作的数组nums里的元素
  全部取出，放进一个新的list

- 利用一个set, 去重， 当遇到重复元素时，我们直接跳过 current index, 进行下一loop 操作
- 递归前后继续保持一致状态，所以调用两次 swap()






```java
class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if(nums == null || nums.length == 0){
            return res;
        }
        dfs(res, nums, 0);
        return res;       
    }
    
    private void dfs(List<List<Integer>> res, int[] nums, int index){
        if(index == nums.length){
            List<Integer> list = new ArrayList<>();
            for(int num : nums){
                list.add(num);
            }
            res.add(list);
            return;
        }
        
        Set<Integer> used = new HashSet<>();
        for(int i = index; i < nums.length; i++){
            if(used.contains(nums[i])){
                continue;
            }
            used.add(nums[i]);
            
            swap(nums, index, i);
            dfs(res, nums, index + 1);
            swap(nums, index, i);
        }
    }
    
    private void swap(int[]nums, int left, int right){
        int tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
    }
}
```
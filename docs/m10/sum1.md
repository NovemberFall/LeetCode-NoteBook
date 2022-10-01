## 40. Combination Sum II
![](img/2022-10-01-13-02-34.png)

---

![](img/2021-06-05-12-39-45.png)

---

```java
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        Arrays.sort(candidates);
        dfs(candidates, 0, target, res, path);
        return res;
    }
    
    private void dfs(int[] candidates, int index, int target,  
                     List<List<Integer>> res,  List<Integer> path){
        
        if (target == 0) {
            res.add(new ArrayList<>(path));
            return;
        } 

        for (int i = index; i < candidates.length; i++) {
            //alpha pruning 大剪枝
            if (target - candidates[i] < 0) {
                break;
            }
            
            //beta pruning 小剪枝
            if (i > index && candidates[i] == candidates[i - 1]) {
                continue;
            }
            
            path.add(candidates[i]);
            dfs(candidates, i+1, target-candidates[i], res, path);
            path.remove(path.size() - 1);
        }
    }
}
```
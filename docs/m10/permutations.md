## 46. Permutations
![](img/2022-09-26-23-47-36.png)

### Analysis:

- [all permutations | DFS](https://novemberfall.github.io/LeetCode-NoteBook/#/m10/permutationsWithStr)

![](img/2023-03-29-12-16-03.png)

- [46.全排列 中文理解](https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html#%E6%80%9D%E8%B7%AF)
- [liweiwei | 回溯搜索 + 剪枝 | 时间复杂度](https://leetcode.cn/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/)

---
```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return res;
        }
        
        boolean[] visited = new boolean[nums.length];
        dfs(nums, res, new ArrayList<>(), visited);
        return res;
    }
    
    private void dfs(int[] nums, List<List<Integer>> res, List<Integer> permutation, boolean[] visited) {
        if (permutation.size() == nums.length) {
            res.add(new ArrayList<>(permutation));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (visited[i]) {
                continue;
            }
            
            permutation.add(nums[i]);
            visited[i] = true;
            dfs(nums, res, permutation, visited);
            visited[i] = false;
            permutation.remove(permutation.size() - 1);
        }
    }
}
```

---

- If we don't add `boolean[] visited`:

### Version I

![](img/2022-09-27-18-00-43.png)

```java
class Permutations_v1 {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        dfs(res, new ArrayList<>(), nums);
        return res;
    }

    private void dfs(List<List<Integer>> res, List<Integer> path, int[] nums) {
        if (path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            path.add(nums[i]);
            dfs(res, path, nums);
            path.remove(path.size() - 1);
        }
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 2, 3};
        Permutations_v1 pv1 = new Permutations_v1();
        List<List<Integer>> res = pv1.permute(nums);
        System.out.println(res);
    }
}
```

![](img/2022-09-27-18-07-29.png)

![](img/2022-09-27-18-14-08.png)

---

### Version II

![](img/2022-09-27-20-40-42.png)

```java
class Permutations_v2 {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        dfs(res, new ArrayList<>(), nums);
        return res;
    }

    private void dfs(List<List<Integer>> res, List<Integer> path, int[] nums) {
        if (path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }

        path.add(nums[0]);
        dfs(res, path, nums);
        path.remove(path.size() - 1);

        path.add(nums[1]);
        dfs(res, path, nums);
        path.remove(path.size() - 1);

        path.add(nums[2]);
        dfs(res, path, nums);
        path.remove(path.size() - 1);
    }
}
```

---
### Version Final

- 剪枝

![](img/2022-09-27-20-50-09.png)
---
![](img/2022-09-27-20-53-31.png)
---
![](img/2022-09-27-20-53-52.png)

```java
class Permutations_Final {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        dfs(res, new ArrayList<>(), nums);
        return res;
    }

    private void dfs(List<List<Integer>> res, List<Integer> path, int[] nums) {
        if (path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            // 剪枝
            if (path.contains(nums[i])) {
                continue;
            }
            path.add(nums[i]);
            dfs(res, path, nums);
            path.remove(path.size() - 1);
        }
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 2, 3};
        Permutations_Final pvf = new Permutations_Final();
        List<List<Integer>> res = pvf.permute(nums);
        System.out.println(res);
    }
}
```

![](img/2022-09-27-21-01-01.png)
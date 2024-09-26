## 60. Permutation Sequence
![](img/2023-03-29-18-17-56.png)
---

### Brute Force

```java
class permutationSequence_bruteForce {
    private int count = 0;
    private String res  = "";

    public String getPermutation(int n, int k) {
        boolean[] visited = new boolean[n + 1];

        dfs(n, k, visited, new StringBuilder());
        return res;
    }

    private void dfs(int n, int k, boolean[] visited, StringBuilder sb) {
        if (res.length() != 0) {
            return;
        }
        
        if (sb.length() == n) {
            count++;
            if (count == k) {
                res = sb.toString();
            }
            return;
        }

        for (int i = 1; i <= n; i++) {
            if (visited[i]) {
                continue;
            }

            visited[i] = true;
            sb.append(i);
            dfs(n, k, visited, sb);
            sb.setLength(sb.length() - 1);
            visited[i] = false;
        }
    }

    public static void main(String[] args) {
        permutationSequence_bruteForce psbf = new permutationSequence_bruteForce();
        String res = psbf.getPermutation(3, 3);
        System.out.println(res);// 213

        permutationSequence_bruteForce psbf2 = new permutationSequence_bruteForce();
        String res2 = psbf2.getPermutation(4, 9);
        System.out.println(res2);// 2314
    }
}
```
---

- [可以先阅读这个video](https://www.youtube.com/watch?v=W9SIlE2jhBQ)


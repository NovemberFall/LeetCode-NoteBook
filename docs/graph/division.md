## 399. Evaluate Division
![](img/2022-10-13-23-42-58.png)
---
- [youtube 1](https://www.youtube.com/watch?v=berj4Xm_YTY)
- [youtube 2](https://www.youtube.com/watch?v=u9LE_7apB38&t=588s)

- 以上两个视频需要结合观看
---




---
- [leetCode disscusion](https://leetcode.com/problems/evaluate-division/discuss/88169/Java-AC-Solution-using-graph#:~:text=If%20a/b%20%3D%202.0%20and%20b/c%20%3D%203.0%2C%20we%20can%20treat%20a%2Cb%2C%20and%20c%20as%20vertices.%0Athen%20edge(a%2Cb)%20weight%202.0%20and%20edge(b%2Cc)%20weight%203.0%0Abackward%20edge(b%2Ca)%20weight%201/2.0%20and%20backward%20edge(c%2Cb)weight%201/3.0%0Aquery%20a%2Cc%20is%20a%20path%20from%20a%20to%20c%2C%20distance%20(a%2Cc)%20%3D%20weight(a%2Cb)%20*%20weight(b%2Cc))

- If `a / b = 2.0` and `b / c = 3.0`, we can treat `a, b`, and `c` as vertices.
  then `edge(a, b)` weight `2.0` and `edge(b, c)` weight `3.0`
  backward `edge(b, a)` weight `1 / 2.0` and backward `edge(c, b)` weight `1 / 3.0`
  query `a, c` is a path from `a` to `c`, `distance(a, c) = weight(a, b) * weight(b, c)`
---
```java
class EvaluateDivision {
    class Node {
        String key;
        double val;

        public Node(String key, double val) {
            this.key = key;
            this.val = val;
        }
    }

    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String, List<Node>> graph = buildGraph(equations, values);

        double[] res = new double[queries.size()];
        Arrays.fill(res, -1.0);
        for (int i = 0; i < queries.size(); i++) {
            res[i] = dfs(queries.get(i).get(0), queries.get(i).get(1), new HashSet<>(), graph);
        }
        return res;
    }

    private double dfs(String src, String des, HashSet<String> visited, Map<String, List<Node>> graph) {
        if (!(graph.containsKey(src) && graph.containsKey(des))) {
            return -1.0;
        }
        if (src.equals(des)) {
            return 1.0;
        }
        visited.add(src); // prevent a / b , then b / a , overflow
        for (Node node : graph.get(src)) {
            String next = node.key;
            if (visited.contains(next)) {
                continue;
            }
            double ans = dfs(next, des, visited, graph);
            if (ans == -1.0) {
                continue;
            }
            
            return ans * node.val;
        }
        return -1.0;
    }

    private Map<String, List<Node>> buildGraph(List<List<String>> equations, double[] values) {
        Map<String, List<Node>> graph = new HashMap<>();
        for (int i = 0; i < values.length; i++) {
            String src = equations.get(i).get(0);
            String des = equations.get(i).get(1);
            graph.putIfAbsent(src, new ArrayList<>());
            graph.putIfAbsent(des, new ArrayList<>());
            graph.get(src).add(new Node(des, values[i]));
            graph.get(des).add(new Node(src, 1 / values[i]));
        }
        return graph;
    }

    public static void main(String[] args) {
        List<List<String>> equations = Arrays.asList(
                Arrays.asList("a", "b"),
                Arrays.asList("b", "c")
        );

        List<List<String>> queries = Arrays.asList(
                Arrays.asList("a", "c"),
                Arrays.asList("b", "a"),
                Arrays.asList("a", "e"),
                Arrays.asList("a", "a"),
                Arrays.asList("x", "x")
        );
        double[] values = new double[]{2.0, 3.0};

        EvaluateDivision ed = new EvaluateDivision();
        double[] ans = ed.calcEquation(equations, values, queries);
        System.out.println(Arrays.toString(ans));
    }
}
```
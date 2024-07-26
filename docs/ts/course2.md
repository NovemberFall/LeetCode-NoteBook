## 210. Course Schedule II
![](img/2022-10-14-21-49-41.png)

---

```java
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Map<Integer, List<Integer>> map = new HashMap<>();
        int[] indegree = new int[numCourses];
        buildGraph(map, prerequisites, indegree);
        return bfs(map, prerequisites, numCourses, indegree);
    }
    
    private void buildGraph(Map<Integer, List<Integer>> map, int[][] prerequisites, int[] indegree) {
        for (int i = 0; i < prerequisites.length; i++) {
            map.putIfAbsent(prerequisites[i][1], new ArrayList<>());
            map.get(prerequisites[i][1]).add(prerequisites[i][0]);
            indegree[prerequisites[i][0]]++;
        }
    }
    
    private int[] bfs(Map<Integer, List<Integer>> map, int[][] prerequisites, int numCourses, int[] indegree) {
        Queue<Integer> queue = new ArrayDeque<>();
        List<Integer> tmp = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
                tmp.add(i);
            }
        }
        
        int count = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            List<Integer> list = map.get(course);
            if (list != null) {
                for (int inCourse : list) {
                    indegree[inCourse]--;
                    if (indegree[inCourse] == 0) {
                        queue.offer(inCourse);
                        tmp.add(inCourse);
                    }
                }
            }
            count++;
        }
        return count == numCourses ? tmp.stream().mapToInt(i -> i).toArray() : new int[0];
    }
}
```

---
## 210. Course Schedule II
![](img/2022-10-14-21-49-41.png)

---

```java
class course2 {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        if (numCourses <= 0) {
            return new int[0];
        }

        // 1. init Map
        int[] inDegree = new int[numCourses];
        Map<Integer, List<Integer>> graph = new HashMap<>();

        // 2. Build Map
        buildMap(inDegree, graph, prerequisites);

        // 3. bfs
        return bfs(numCourses, graph, inDegree);
    }

    private void buildMap(int[] inDegree, Map<Integer, List<Integer>> graph, int[][] prerequisites) {
        for (int i = 0; i < prerequisites.length; i++) {
            inDegree[prerequisites[i][0]]++;
            graph.putIfAbsent(prerequisites[i][1], new ArrayList<>());
            graph.get(prerequisites[i][1]).add(prerequisites[i][0]);
        }
    }

    private int[] bfs(int numCourses, Map<Integer, List<Integer>> graph, int[] inDegree) {
        int[] res = new int[numCourses];
        int index = 0; // index means the counts of num of courses. 
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                queue.add(i);
            }
        }

        while (!queue.isEmpty()) {
            int curCourse = queue.poll();
            res[index++] = curCourse;
            List<Integer> toTake = graph.get(curCourse);
            if (toTake != null) {
                int n = toTake.size();
                for (int i = 0; i < n; i++) {
                    int pointer = toTake.get(i);
                    inDegree[pointer]--;
                    if (inDegree[pointer] == 0) {
                        queue.offer(pointer);
                    }
                }
            }
        }
        if (index != numCourses) {
            return new int[0];
        }
        return res;
    }

    public static void main(String[] args) {
        int numCourse = 4;
        int[][] prerequisites = new int[][]{
                {1, 0}, {2, 0}, {3, 1}, {3, 2}
        };
        course2 c2 = new course2();
        int[] res = c2.findOrder(numCourse, prerequisites);
        System.out.println(Arrays.toString(res));
    }
}
```

---

### version 2

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
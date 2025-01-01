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

#### Python

```py
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        indegrees = [0] * numCourses
        graph = defaultdict(list)
        self.buildGraph(graph, prerequisites, indegrees)
        return self.bfs(graph, numCourses, indegrees)

    def buildGraph(self, graph:defaultdict, prerequisites:List[List[int]], indegrees:List[int]) -> None:
        for prereq in prerequisites:
            graph[prereq[1]].append(prereq[0])
            indegrees[prereq[0]] += 1

    def bfs(self, graph:defaultdict, numCourses:int, indegrees:List[int]) -> List[int]:
        res = []
        queue = deque()
        for i in range(numCourses):
            if indegrees[i] == 0:
                queue.append(i)

        count = 0
        while queue:
            cur_course = queue.popleft()
            count += 1
            res.append(cur_course)
            for in_course in graph[cur_course]:
                indegrees[in_course] -= 1
                if indegrees[in_course] == 0:
                    queue.append(in_course)

        return res if count == numCourses else []
```
## 210. Course Schedule II
![](img/2022-10-14-21-49-41.png)

---
- **What we need ?**
    - 1. `HashMap<Node, Indegree> inDegree`: A in-degree map, which record each nodes in-degree.
    - 2. `HashMap<Node, List<Node>children> topoMap`: A topo-map which record the Node's children

- **What we do ?**
    - 1. `Init`: Init the two HashMaps.
    - 2. `Build Map`: Put the child into parent's list ; Increase child's in-degree by 1.
    - 3. `Find Node with 0 in-degree`: Iterate the inDegree map, find the Node has 0 inDegree. (If none, there must be a circle)
    - 4. `Decrease the children's inDegree by 1`: Decrease step3's children's inDegree by 1.
    - 5. `Remove this Node`: Remove step3's Node from inDegree. Break current iteration.
    - 6. `Do 3-5 until inDegree is Empty`: Use a while loop
---

```java
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        // Topological sort
        // Edge case
        if(numCourses <= 0) return new int[0];
        
        //1. Init Map
        HashMap<Integer, Integer> inDegree = new HashMap<>();
        HashMap<Integer, List<Integer>> topoMap = new HashMap<>();
        for(int i = 0; i < numCourses; i++) {
            inDegree.put(i, 0);
            topoMap.put(i, new ArrayList<Integer>());
        }
        
        //2. Build Map
        for(int[] pair : prerequisites) {
            int curCourse = pair[0], preCourse = pair[1];
            topoMap.get(preCourse).add(curCourse);  // put the child into it's parent's list
            inDegree.put(curCourse, inDegree.get(curCourse) + 1); // increase child inDegree by 1
        }
        //3. find course with 0 indegree, minus one to its children's indegree, until all indegree is 0
        int[] res = new int[numCourses];
        int base = 0;
        while(!inDegree.isEmpty()) {
            boolean flag = false;   // use to check whether there is cycle
            for(int key : inDegree.keySet()) {  // find nodes with 0 indegree
                if(inDegree.get(key) == 0) {
                    res[base ++] = key;
                    List<Integer> children = topoMap.get(key);  // get the node's children, and minus their inDegree
                    for(int child : children) 
                        inDegree.put(child, inDegree.get(child) - 1);
                    inDegree.remove(key);      // remove the current node with 0 degree and start over
                    flag = true;
                    break;
                }
            }
            if(!flag)  // there is a circle --> All Indegree are not 0
                return new int[0];
        }
        return res;
    }
}
```

---

### 2nd method

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
        int index = 0;
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


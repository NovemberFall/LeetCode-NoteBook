## 126. Word Ladder II
![](img/2023-01-02-10-52-03.png)
---
![](img/2023-01-02-10-55-07.png)
---
![](img/2023-01-02-10-59-01.png)
---



---
### BFS + DFS

```java
class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> res = new ArrayList<>();
        Set<String> dict = new HashSet<>(wordList);
        if (!dict.contains(endWord)) {
            return res;
        }

        Deque<String> queue = new ArrayDeque<>();
        Map<String, List<String>> graph = new HashMap<>();
        Map<String, Integer> distance = new HashMap<>();
        int level = 0;
        distance.put(beginWord, 1);
        queue.offer(beginWord);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String cur = queue.poll();
                List<String> neighbors = getAllNeighbors(dict, cur);
                if (neighbors.size() != 0) {
                    for (String nei : neighbors) {
                        if (!distance.containsKey(nei)) {
                            distance.put(nei, level + 1);
                            graph.putIfAbsent(nei, new ArrayList<>());
                            graph.get(nei).add(cur);
                            queue.offer(nei);
                        } else {
                            if (distance.get(nei) == level + 1) {
                                graph.get(nei).add(cur);
                            }
                        }
                    }
                }
            }
            level++;
            if (distance.containsKey(endWord)) {
                break;
            }
        }
        List<String> current = new ArrayList<>();
        dfs(graph, endWord, beginWord, current, res);
        return res;
    }

    private void dfs(Map<String, List<String>> graph, String endWord, String beginWord, List<String> current, List<List<String>> res) {
        if (endWord.equals(beginWord)) {
            current.add(beginWord);
            List<String> curRes = new ArrayList<>(current);
            Collections.reverse(curRes);
            res.add(curRes);
            current.remove(curRes.size() - 1);
        }
        current.add(endWord);
        if (graph.containsKey(endWord)) {
            for (String nei : graph.get(endWord)) {
                dfs(graph, nei, beginWord, current, res);
            }
        }
        current.remove(current.size() - 1);
    }

    private List<String> getAllNeighbors(Set<String> dict, String cur) {
        List<String> res = new ArrayList<>();
        char[] array = cur.toCharArray();
        for (int j = 0; j < array.length; j++) {
            char old = array[j];
            for (char c = 'a'; c <= 'z'; c++) {
                if (c == old) {
                    continue;
                }
                array[j] = c;
                String word = new String(array);
                if (dict.contains(word)) {
                    res.add(word);
                }
                array[j] = old;
            }
        }
        return res;
    }
}
```
---

### Why Build the Graph in Reverse (Storing Predecessors)?

- Why Storing Predecessors Is Better
  - Instead of keeping track of **where you can go next**, keep track of **where you came from**.
  - The shortest path is naturally preserved because BFS always visits a word at its shortest distance.

![](img/2025-02-09-23-03-57.png)

![](img/2025-02-09-23-04-51.png)

![](img/2025-02-09-23-05-06.png)

---

![](img/2025-02-09-23-45-10.png)

![](img/2025-02-09-23-45-34.png)

![](img/2025-02-09-23-46-11.png)



![](img/2025-02-09-23-46-36.png)
---

## Let's go through this Leetcode 126 (Word Ladder II) solution step by step

![](img/2025-02-10-09-45-03.png)

![](img/2025-02-10-09-45-40.png)

![](img/2025-02-10-09-46-53.png)

![](img/2025-02-10-09-47-10.png)

![](img/2025-02-10-09-47-37.png)

![](img/2025-02-10-09-47-54.png)


### Example Execution

![](img/2025-02-10-09-48-57.png)

```ruby
distance = { "hit" → 1, "hot" → 2, "dot" → 3, "dog" → 4, "cog" → 5, "lot" → 3, "log" → 4 }

graph = { "dot" → ["hot"], "dog" → ["dot"], "log" → ["lot"], "cog" → ["dog", "log"], "lot" → ["hot"] }
```


![](img/2025-02-10-09-50-01.png)



---
## Let's break down the DFS (Depth-First Search) function line by line.

```java
    private void dfs(Map<String, List<String>> graph, String endWord, String beginWord, List<String> current, 
                                                                                        List<List<String>> res) {
        if (endWord.equals(beginWord)) {
            current.add(beginWord);
            List<String> curRes = new ArrayList<>(current);
            Collections.reverse(curRes);
            res.add(curRes);
            current.remove(current.size() - 1);
        }
        current.add(endWord);
        if (graph.containsKey(endWord)) {
            for (String nei : graph.get(endWord)) {
                dfs(graph, nei, beginWord, current, res);
            }
        }
        current.remove(current.size() - 1);
    }
```

![](img/2025-02-10-09-51-50.png)

![](img/2025-02-10-09-52-06.png)

![](img/2025-02-10-09-52-21.png)
---

#### `current.remove(current.size() - 1)` usage:

- within this codes:

```java
        if (endWord.equals(beginWord)) {
            current.add(beginWord);
            List<String> curRes = new ArrayList<>(current);
            Collections.reverse(curRes);
            res.add(curRes);
            current.remove(current.size() - 1);
        }
```

![](img/2025-02-10-09-55-07.png)

![](img/2025-02-10-09-56-30.png)

![](img/2025-02-10-09-57-12.png)
---

## Python

```py
class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        res = []
        dict = set(wordList)
        if endWord not in dict:
            return res
        queue = deque([beginWord])
        graph = {}  # or:   graph = defaultdict(list)
        distance = {}  # or:   distance = {beginWord: 1}
        level = 0
        distance[beginWord] = 1
        while queue:
            size = len(queue)
            for _ in range(size):
                curWord = queue.popleft()
                neighbors = self.getAllNeighbors(dict, curWord)
                if len(neighbors) != 0:
                    for nei in neighbors:
                        if nei not in distance:
                            distance[nei] = level + 1
                            graph.setdefault(nei, [])
                            graph[nei].append(curWord)
                            queue.append(nei)
                        else:
                            if distance[nei] == level + 1:
                                graph[nei].append(curWord)
            level += 1
            if endWord in distance:
                break

        self.dfs(graph, endWord, beginWord, [], res)
        return res

    def getAllNeighbors(self, dict, curWord):
        res = []
        wordChars = list(curWord)
        for i in range(len(wordChars)):
            backup = wordChars[i]
            for c in range(ord('a'), ord('z') + 1):
                if backup == chr(c):
                    continue
                wordChars[i] = chr(c)
                word = "".join(wordChars)
                if word in dict:
                    res.append(word)
            wordChars[i] = backup
        return res

    def dfs(self, graph, endWord, beginWord, path, res):
        if endWord == beginWord:
            path.append(beginWord)
            deepCopy_path = path[::-1]  # firstly deep clone a current path and reverse it
            res.append(deepCopy_path)
            path.pop()
            return

        path.append(endWord)
        if endWord in graph:
            for nei in graph[endWord]:
                self.dfs(graph, nei, beginWord, path, res)
        path.pop()
```



---
### Bi-Directional BFS


- **Warning**:  still get a **TLE** (就算官方答案这里也是TLE)

---
```java
class WordLadder_II_bi_directional_BFS {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> res = new ArrayList<>();
        Set<String> dict = new HashSet<>(wordList);
        if (!dict.contains(endWord)) {
            return res;
        }
        dict.remove(beginWord);
        dict.remove(endWord);
        Set<String> forwardQueue = new HashSet<>();
        Set<String> backwardQueue = new HashSet<>();
        forwardQueue.add(beginWord);
        backwardQueue.add(endWord);
        boolean exist = false;
        Map<String, List<String>> mutationMap = new HashMap<>();
        boolean isBackward = true;

        while (!forwardQueue.isEmpty() && !backwardQueue.isEmpty()) {
            if (exist) {
                break;
            }
            if (forwardQueue.size() > backwardQueue.size()) {
                Set<String> temp = forwardQueue;
                forwardQueue = backwardQueue;
                backwardQueue = temp;
                isBackward = !isBackward;
            }
            Set<String> forwardMutation = new HashSet<>();
            for (String word : forwardQueue) {
                char[] wordChars = word.toCharArray();
                for (int i = 0; i < wordChars.length; i++) {
                    char backup = wordChars[i];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == backup) {
                            continue;
                        }
                        wordChars[i] = c;
                        String mutation = new String(wordChars);
                        String parent = isBackward ? word : mutation;
                        String child = isBackward ? mutation : word;
                        if (backwardQueue.contains(mutation)) {
                            exist = true;
                            mutationMap.putIfAbsent(parent, new ArrayList<>());
                            mutationMap.get(parent).add(child);
                        }
                        if (dict.contains(mutation)) {
                            mutationMap.putIfAbsent(parent, new ArrayList<>());
                            mutationMap.get(parent).add(child);
                            forwardMutation.add(mutation);
                        }
                    }
                    wordChars[i] = backup;
                }
            }
            dict.removeAll(forwardMutation);
            forwardQueue = forwardMutation;
        }
        if (!exist) {
            return res;
        }

        dfs(beginWord, endWord, mutationMap, new ArrayList<>(Arrays.asList(beginWord)), res);
        return res;
    }

    private void dfs(String curWord, String endWord, Map<String, List<String>> mutationMap, List<String> path,
                     List<List<String>> res) {

        if (curWord.equals(endWord)) {
            res.add(new ArrayList<>(path));
            return;
        }
        for (String word : mutationMap.getOrDefault(curWord, Collections.emptyList())) {
            path.add(word);
            dfs(word, endWord, mutationMap, path, res);
            path.remove(path.size() - 1);
        }

    }
}
```
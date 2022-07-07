## 208. Implement Trie (Prefix Tree)

![](img/2022-04-04-21-56-59.png)

---

![](img/2022-04-04-21-56-12.png)

![](img/2022-04-04-21-58-15.png)

- 怎样往字典树里加一个单词呢？`insert` 操作
  - 假设找单词 `car` :

![](img/2022-04-04-22-03-32.png)

![](img/2022-04-04-22-03-47.png)

![](img/2022-04-04-22-04-12.png)

![](img/2022-04-04-22-05-08.png)

---

- 现在尝试再找一个单词： `cat` :

![](img/2022-04-04-22-07-34.png)

---

- `search` 操作:
  - 比如 search `ca`:
  - 这里需要查看自己的trie 树里，是否曾经含有该单词，如果没有就遍历到 `ca`, 还是false.

- `startWith` 操作：
  - 比如 遍历到 `ca`, 发现for 循环走完，依然没有return false, 说明start with `ca`

![](img/2022-04-04-22-14-15.png)

---


```java
class Trie {
    Node root;
    class Node {
        boolean isWord;
        Node[] children;
        public Node() {
            isWord = false;
            children = new Node[26];
        }
    }

    public Trie() {
        root = new Node();
    }
    
    public void insert(String word) {
        Node cur = root;
        for (char c : word.toCharArray()) {
            if (cur.children[c - 'a'] == null) {
                cur.children[c - 'a'] = new Node();
            }
            cur = cur.children[c - 'a'];
        }
        cur.isWord = true;
    }
    
    public boolean search(String word) {
        Node cur = root;
        for (char c : word.toCharArray()) {
            if (cur.children[c - 'a'] == null) {
                return false;
            }
            cur = cur.children[c - 'a'];
        }
        return cur.isWord;
    }
    
    public boolean startsWith(String prefix) {
        Node cur = root;
        for (char c : prefix.toCharArray()) {
            if (cur.children[c - 'a'] == null) {
                return false;
            }
            cur = cur.children[c - 'a'];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
```
## 716. Max Stack
![](img/2022-07-01-20-04-16.png)
![](img/2022-07-01-20-04-26.png)

- [Java simple solution with strict O(logN) push()/popMax()/pop()](https://leetcode.com/problems/max-stack/discuss/129922/Java-simple-solution-with-strict-O(logN)-push()popMax()pop())

```java
class MaxStack {

    Node head;
    Node tail;
    TreeMap<Integer, List<Node>> map;
    
    public MaxStack() {
        head = new Node(0);
        tail = new Node(0);
        head.next = tail;
        tail.pre = head;
        map = new TreeMap<>();
    }
    
    public void push(int x) {
        Node newNode = new Node(x);
        newNode.pre = tail.pre;
        newNode.next = tail;
        tail.pre.next = newNode;
        tail.pre = newNode;
        if(!map.containsKey(x))    map.put(x, new ArrayList<Node>());
        map.get(x).add(newNode);
    }
    
    public int pop() {
        int value = tail.pre.val;
        removeNode(tail.pre);
        int listSize = map.get(value).size();
        map.get(value).remove(listSize - 1);
        if(listSize == 1)    map.remove(value);
        return value;
    }
    
    public int top() {
        return tail.pre.val;
    }
    
    public int peekMax() {
        return map.lastKey();
    }
    
    public int popMax() {
        int maxVal = map.lastKey();
        int listSize = map.get(maxVal).size();
        Node node = map.get(maxVal).remove(listSize - 1);
        removeNode(node);
        if(listSize == 1)    map.remove(maxVal);
        return maxVal;
    }
    
    private void removeNode(Node n){
        Node preNode = n.pre;
        Node nextNode = n.next;
        preNode.next = nextNode;
        nextNode.pre = preNode;
    }
    
    class Node{
        Node pre;
        Node next;
        int val;
        public Node(int x){
            this.val = x;
            this.pre = null;
            this.next = null;
        }
    }
}
```

---

```java
class MaxStack {
    Deque<Integer> deStack;
    PriorityQueue<Integer> maxHeap;

    public MaxStack() {
        deStack = new ArrayDeque<>();
        maxHeap = new PriorityQueue<>((a, b) -> (b - a));
    }
    
    public void push(int x) {
        maxHeap.offer(x);
        deStack.offerLast(x);
    }
    
    public int pop() {
        int deleted = deStack.pollLast();
        maxHeap.remove(deleted);
        return deleted;
    }
    
    public int top() {
        return deStack.peekLast();
    }
    
    public int peekMax() {
        return maxHeap.peek();
    }
    
    public int popMax() {
        int deleted = maxHeap.poll();
        deStack.removeLastOccurrence(deleted);
        return deleted;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * MaxStack obj = new MaxStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.peekMax();
 * int param_5 = obj.popMax();
 */
```
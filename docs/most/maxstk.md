## 716. Max Stack
![](img/2022-07-01-20-04-16.png)
![](img/2022-07-01-20-04-26.png)

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
## 155. Min Stack
![](img/2023-01-03-00-29-04.png)
---

- [c4 1:19:51]()

```ruby
## 如何维护top 元素是 min ?
## stack2 如果遇到目前为止最小的元素，则重复push
stack1 [ 3, 1, 0
stack2 [ 3, 1, 0

stack1 [ 3, 1, 0, 10, 20,  0,
stack2 [ 3, 1, 0, 0,  0,   0

stack1 [ 3, 1, 0, 10, 20,  0,  -1
stack2 [ 3, 1, 0, 0,  0,   0,  -1

stack1 [ 3, 1, 0, 10, 20,  0,  -1, 11, 12, 13
stack2 [ 3, 1, 0, 0,  0,   0,  -1, -1, -1, -1

## 那么可以不要重复 push -1 到 stack2 吗？ 当然可以！
stack1 [ 3, 1, 0, 10, 20,  0,  -1, 11, 12, 13
stack2 [ 3, 1, 0, 0,  0,   0,  -1, 

## 只要让 11，12，13 和 -1 比较，但是如果stack1遇到 -1, 
## 那么stack2 就必须再push 一次 -1
stack1 [ 3, 1, 0, 10, 20,  0,  -1, 11, 12, 13, -1
stack2 [ 3, 1, 0, 0,  0,   0,  -1, -1
```
---

### OOD

```java
class MinStack {
    Node head;
    
    class Node {
        int val;
        int min;
        Node next;
        
        public Node(int val, int min, Node next) {
            this.val = val;
            this.min = min;
            this.next = next;
        }
    }

    public MinStack() {
        
    }
    
    public void push(int val) {
        if (head == null) {
            head = new Node(val, val, null);
        } else {
            int minVal = Math.min(val, head.min);
            Node curNode = new Node(val, minVal, head);
            head = curNode;
        }
    }
    
    public void pop() {
        // Node prev = head;
        head = head.next;
        // prev = null;
    }
    
    public int top() {
        return head.val;
    }
    
    public int getMin() {
        return head.min;
    }
}
```

---

```java
class MinStack {
    Stack<Integer> stk; 
    Stack<Integer> minStk;

    public MinStack() {
        stk = new Stack<>();
        minStk = new Stack<>();
    }
    
    public void push(int val) {
        stk.push(val);
        if (!minStk.isEmpty()) {
            val = Math.min(val, minStk.peek());
        }        
        minStk.push(val);
    }
    
    public void pop() {
        stk.pop();
        minStk.pop();
    }
    
    public int top() {
        return stk.peek();
    }
    
    public int getMin() {
        return minStk.peek();
    }
}

```

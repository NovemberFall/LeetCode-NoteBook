## Implementation of Stack

```java
/**
    - Use "head" as "head"

    2 -> null   1 -> null
                head
    prev

    因为stack 只是一头进，所以不需要 tail
 */
class MyStack {
    private ListNode head;

    public Integer pop() {
        if (head == null) {
            return null;
        }
        ListNode prev = head;
        head = head.next;
        prev.next = null;
        return prev.val;
    }

    public Integer peek() {
        if (head == null) {
            return null;
        }
        return head.val;
    }

    public void push(int e) {
        ListNode newNode = new ListNode(e);
        newNode.next = head;
        head = newNode;
    }

    @Test
    void testPop() {
        MyStack stack = new MyStack();
        stack.push(2);
        stack.push(1);
        stack.push(5);
        int pop = stack.pop();
        System.out.println(pop);// 5
    }

    @Test
    void testPush() {
        MyStack stack = new MyStack();
        stack.push(2);
        stack.push(1);
        stack.push(5);
        System.out.println(stack.peek());// 5
    }
}
```
---
```java
public class ListNode {
    int val;
    ListNode next;

    ListNode() {

    }

    public ListNode(int val) {
        this.val = val;
    }

    public ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
```
---

### Bounded Stack

```java
class BoundedStack {
    int[] array;
    int head;

    public BoundedStack(int cap) {
        // check cap
        if (cap < 1) {
            throw new IllegalArgumentException("Capacity must be 1 or more");
        }
        array = new int[cap];
        head = -1;
    }

    public boolean push(int ele) {
        if (head == array.length - 1) {
            return false;
        }
        array[++head] = ele;
        return true;
    }

    public Integer pop() {
        return head == -1 ? null : array[head--];
    }

    public Integer top() {
        return head == -1 ? null : array[head];
    }

    public static void main(String[] args) {
        BoundedStack boundedStack = new BoundedStack(5);
        boundedStack.push(2);
        boundedStack.push(5);
        boundedStack.push(1);
        boundedStack.push(7);
        boundedStack.push(9);
        System.out.println(boundedStack.top()); // 9
        System.out.println(boundedStack.pop()); // 9
    }
}
```
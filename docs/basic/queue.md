## Implementation of Queue By LinkedList

```java
/*
    因为queue 是一头进，一头出，所以需要 head, tail
 */
class MyQueue {
    ListNode head;
    ListNode tail;

    public MyQueue() {
        head = tail = null;
    }

    public Integer poll() {
        if (head == null) {
            return null;
        }
        ListNode node = head;
        head = head.next;
        if (head == null) {
            tail = null;
        }
        node.next = null;
        return node.val;
    }

    public Integer peek() {
        if (head == null) {
            return null;
        }
        return  head.val;
    }

    public void offer(Integer e) {
        if (head == null) {
            head = new ListNode(e);
            tail = head;
        } else {
            tail.next = new ListNode(e);
            tail = tail.next;
        }
    }

    @Test
    void testOffer() {
        MyQueue queue = new MyQueue();
        queue.offer(1);
        queue.offer(3);
        queue.offer(5);
        queue.offer(7);
        queue.offer(9);
        System.out.println(queue.peek());// 1
    }

    @Test
    void testPoll() {
        MyQueue queue = new MyQueue();
        queue.offer(1);
        queue.offer(3);
        queue.offer(5);
        queue.offer(7);
        queue.offer(9);
        int poll = queue.poll();
        System.out.println(poll);// 1
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

## Implementation of Queue By Array

```ruby
想象一个表盘，
    Circular Array - we can connect the start and end of the array, so that it is a cycle
    index of array.length <=> index of 0

    Quick tip:
    head = head + 1 == array.length ? 0 : head + 1;
    // head = (head + 1) % array.length;
    VS.
    head++;
    array[head % array.length]
    On modulo, watch out for overflow! Wrong!  第二种不推荐，因为一直`head++`操作, 有可能超出Integer范围

    Second, we need to know when empty, when full:

    head == tail -> empty
    head == tail -> full


    two solutions:
        1. record size, size = 0 (empty), size == array.length (full)

        2.(Practice 6, video 1:50:23)
            (head + 1) % array.length == tail -> empty, head == tail -> full,
            capacity = array.length - 1 (next of head points to the head of the queue)

单单掌握第一种办法可以吗? 很遗憾！ 不行啊！
    因为第二种办法 circular array 的思想, producer, consumer 的时候会经常使用到这种思想
    在并发，并行的系统里，非常难以维护一个size, 并发的系统里，整个系统都在操作这个size, 你不可能维护一个size,
    此时就必须用到第二个方法, 所以必须要掌握这种方法    
```
---

### Method 1:

```ruby
offer:

    [ 1  ][    ][    ][    ][    ][    ]
     head
           tail

    [ 1  ][  2 ][    ][    ][    ][    ]
     head
                 tail

    [ 1  ][  2 ][  5 ][    ][    ][    ]
     head
                       tail

    [ 1  ][  2 ][  5 ][  6 ][    ][    ]
     head
                             tail

    [ 1  ][  2 ][  5 ][  6 ][  7 ][    ]
     head
                                   tail

    [ 1  ][  2 ][  5 ][  6 ][  7 ][  9 ]
     head
     tail


    
poll:
    [    ][  2 ][  5 ][  6 ][  7 ][  9 ]  # poll => 1
           head
     tail

    [    ][    ][  5 ][  6 ][  7 ][  9 ]  # poll => 2
                 head
     tail

    [    ][    ][    ][  6 ][  7 ][  9 ]  # poll => 5
                       head
     tail

    [    ][    ][    ][    ][  7 ][  9 ]  # poll => 6
                             head
     tail

    [    ][    ][    ][    ][    ][  9 ]  # poll => 7
                                   head
     tail

    [    ][    ][    ][    ][    ][    ]  # poll => 9
     head
     tail
```
---
```java
 // Solution 1: record size, size = 0 (empty), size == array.length (full)
class BoundedQueue {
    int head;
    int tail;
    int size;
    Integer[] array;

    public BoundedQueue(int cap) {
        array = new Integer[cap];
        head = tail = 0;
        size = 0;
    }

    public boolean offer(Integer ele) {
        // 1.
        if (size == array.length) {
            return false;
        }
        // 2.
        array[tail] = ele;
        if (tail + 1 == array.length) {
            tail = 0;
        } else {
            tail = tail + 1;
        }
        size++;
        return true;
    }

    public Integer peek() {
        if (size == 0) {
            return null;
        }
        return array[head];
    }

    public Integer poll() {
        if (size == 0) {
            return null;
        }
        Integer result = array[head];
        if (head + 1 == array.length) {
            head = 0;
        } else {
            head = head + 1;
        }

//        head = (head + 1) % array.length;
        size--;
        return result;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == array.length;
    }


    public static void main(String[] args) {
        BoundedQueue queue = new BoundedQueue(7);
        queue.offer(1);
        queue.offer(2);
        queue.offer(5);
        queue.offer(6);
        queue.offer(7);
        System.out.println(queue.peek()); // 1

        int poll = queue.poll();
        System.out.println(poll);// 1
        poll = queue.poll();
        System.out.println(poll);// 2
        poll = queue.poll();
        System.out.println(poll);// 5
    }
}
```

---

### Method 2

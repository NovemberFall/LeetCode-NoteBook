## 876. Middle of the Linked List
![](img/2023-01-06-23-45-05.png)
---
### Analysis:

- **Online Algorithm** vs. **Offline Algorithm**

- online algorithm, 可以随时随刻计算进来的数据流，就算数据产生中断，也不会影响 `slow` 指针停留的位置
- 相反 offline algorithm, 无法预防数据中断！

---

### Brute Force | offline algorithm

```java
class MiddleOfLinkedList_BruteForce {
    public ListNode middleNode(ListNode head) {
        if (head == null) {
            return head;
        }
        int len = 0;
        ListNode count = head;
        while (count != null) {
            len++;
            count = count.next;
        }

        ListNode slow = head;
        ListNode fast = head;
        while(fast.next != null && fast.next.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }

        if (len % 2 == 0) {
            return slow.next;
        } else {
            return slow;
        }
        // return (len % 2 == 0) ? slow.next : slow;
    }
}
```
---
### Online Algorithm



- 这里注意跳出循环条件： `while(fast != null && fast.next != null)`, 

```ruby
## ODD:

    [1] -> [2] -> [3] -> [4] -> [5] ->
    slow
    fast    


    [1] -> [2] -> [3] -> [4] -> [5] ->
          slow
                  fast    


    [1] -> [2] -> [3] -> [4] -> [5] ->
                  slow
                                fast   

#######################################

## even:

    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
    slow
    fast 


    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
          slow
                  fast 


    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
                  slow
                                fast         
                ## since `fast != null && fast.next != null`, move fast on


    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
                         slow
                                              fast  
                         ## 可以看到，slow停留在偶数位置，所以取决面试官要求
```
---
- 这里注意跳出循环条件： `while(fast.next != null && fast.next.next != null)`, 

```ruby
## ODD:

    [1] -> [2] -> [3] -> [4] -> [5] ->
    slow
    fast    


    [1] -> [2] -> [3] -> [4] -> [5] ->
          slow
                  fast    


    [1] -> [2] -> [3] -> [4] -> [5] ->
                  slow
                                fast   

#######################################

## even:

    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
    slow
    fast 


    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
          slow
                  fast 


    [1] -> [2] -> [3] -> [4] -> [5] -> [6] ->
                  slow
                                fast  
    ## since `fast.next != null && fast.next.next != null`, stop moving
    ## 可以看到，slow停留在[3]位置，所以取决面试官要求
```

---
- 如果和判断是否有环那题一样的跳出循环条件 => 那么将无法判断 `odd | even`  cases
- note there are two example, one is odd numbers of Nodes
  - second is even numbers of Nodes, which it requires return `Node 4`
    - so first, count the length of LinkedList
    - then, count either odd or even


---
```java
class MiddleOfLinkedList {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
```
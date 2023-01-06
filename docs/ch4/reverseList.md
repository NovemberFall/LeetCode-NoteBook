## 206. Reverse Linked List
![](img/2023-01-05-20-06-03.png)

---

### iteratively method:

```java
Reverse a singly-linked list iteratively.

Examples

L = null, return null
L = 1 -> null, return 1 -> null
L = 1 -> 2 -> 3 -> null, return 3 -> 2 -> 1 -> null
 
```

### my Analysis:

```java
ListNode prev, cur, next

start iteratively reverse:
*********************************************

next
prev
        cur    
        [1] -> [2] -> [3] -> null

// 1. never lose the control of head node
// 2. store the cur->next to next


prev
        cur    next
        [1] -> [2] -> [3] -> null


        cur    next
prev <- [1]    [2] -> [3] -> null


        cur
       prev    next
     <- [1]    [2] -> [3] -> null

// 1. why not move cur to next firstly? since if you do so
// you will lose the control of head node     


               cur
       prev    next
     <- [1]    [2] -> [3] -> null


               cur
       prev           next
     <- [1]    [2] -> [3] -> null


                      cur
              prev    next
     <- [1] <- [2]    [3] -> null


                      cur
              prev    next
     <- [1] <- [2] <- [3] -> null


                      cur
              prev           next
     <- [1] <- [2] <- [3] -> null


                      cur
                      prev   next
     <- [1] <- [2] <- [3] -> null



                             cur
                      prev   next
     <- [1] <- [2] <- [3] -> null

// finally, why the while condition isn't while(next != null) ?
// if you do that, cur is still at node[3]
// since cur is an iterative node, when cur == null, ends
// return prev
```

- code:

```java
/**
 * class ListNode {
 *   public int value;
 *   public ListNode next;
 *   public ListNode(int value) {
 *     this.value = value;
 *     next = null;
 *   }
 * }
 */
public class Solution {
  public ListNode reverse(ListNode head) {
    // Write your solution here
    ListNode prev = null;
    ListNode cur = head;
    ListNode next = null;
    while(cur != null){
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
}
```

---

### Recursive method:

![](img/2022-08-28-00-57-52.png)

![](img/2021-04-23-16-48-23.png)

![](img/2021-04-23-17-27-31.png)

- 1. head.next.next = head
- 2. head.next = null
- if we don't do step 2, that means, it is a circle


---

```java
class ListNode {
   public int value;
   public ListNode next;
   public ListNode(int value) {
     this.value = value;
      next = null;
   }
 }


public class reverse {
    public static ListNode reverseLinkedList(ListNode head){
        if (head == null) {
            return null;
        }
        if (head.next == null) {
            return head;
        }

        // if(head == null || head.next == null){
        //    return head;
        // }

        ListNode newHead = reverseLinkedList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    public static void main(String[] args) {
        ListNode L1 = new ListNode(3);
        ListNode L2 = new ListNode(5);
        ListNode L3 = new ListNode(7);
        L1.next = L2;
        L2.next = L3;

        ListNode head = reverseLinkedList(L1);
        while(head != null){
            System.out.println(head.value);
            head = head.next;
        }
    }
}
```







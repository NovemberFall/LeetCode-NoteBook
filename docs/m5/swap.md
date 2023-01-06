## 24. Swap Nodes in Pairs

![](img/2021-07-10-17-15-30.png)

![](img/2021-07-10-17-15-58.png)

```java
/*
   1 -> 2 -> 3 -> 4 -> 5 -> null
   cur next
   
   2 -> 1 -> {3 -> 4 -> 5} 
   {3 -> 4 -> 5} is subproblem
   
   2 -> 1 -> {3 -> 4 -> 5} 
 next-> cur
 
  cur -> {3 -> 4 -> 5}
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { 
            this.val = val; this.next = next; 
       }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode next = head.next;
        ListNode newHead = swapPairs(next.next);
        head.next = newHead;
        next.next = head;
        return next;
    }
}
```
---

### Iterative

- [Visual Explanation || Well Explained](https://leetcode.com/problems/swap-nodes-in-pairs/discuss/1775033/SWAPPING-NODES-(Not-just-the-values)-oror-Visual-Explanation-oror-Well-Explained-oror-C%2B%2B)

```java
class SwapNodesInPairs_Iterative {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode dummy = new ListNode(9527);
        ListNode prev = dummy;
        ListNode cur = head;
        while (cur != null && cur.next != null) {
            prev.next = cur.next;
            cur.next = prev.next.next;
            prev.next.next = cur;
            prev = cur;
            cur = cur.next;
        }
        return dummy.next;
    }
}
```
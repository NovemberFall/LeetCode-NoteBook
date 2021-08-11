## 19. Remove Nth Node From End of List
![](img/2021-08-10-16-47-50.png)


![](img/2021-08-10-16-45-52.png)
![](img/2021-08-10-16-48-11.png)
![](img/2021-08-10-16-48-37.png)
![](img/2021-08-10-16-49-02.png)
![](img/2021-08-10-16-49-27.png)

![](img/2021-08-10-16-53-52.png)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode slow = dummy;
        ListNode fast = dummy;
        for (int i = 0; i < n; i++) {
            fast = fast.next;
        }
        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
```
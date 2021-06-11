## 141. Linked List Cycle


- Given a linked list, determine if it has a cycle in it.

- To represent a cycle in the given linked list, we use an integer pos 
  which represents the position (0-indexed) in the linked list where tail connects to. 
  If pos is -1, then there is no cycle in the linked list.


Example 1:

- Input: head = [3,2,0,-4], pos = 1
- Output: true
- Explanation: There is a cycle in the linked list, where tail connects to the second node.


---

## Analysis:

- 这道题使用快慢指针，但要注意的是，跳出loop 条件为 && => ` while(fast.next != null && fast.next.next != null)`

- 但慢指针 等于 快指针的时候 => return true, or => false

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head == null){
            return false;
        }
        ListNode fast = head;
        ListNode slow = head;
        while(fast.next != null && fast.next.next != null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true;
            }
        }
        return false;
    }
}
```
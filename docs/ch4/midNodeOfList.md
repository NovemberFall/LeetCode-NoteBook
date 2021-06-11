# 876. Middle of the Linked List

```ruby
Given a non-empty, singly linked list with head node head, 
return a middle node of linked list.

If there are two middle nodes, return the second middle node.


Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.


Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
```
---


## Analysis:

- 这里注意跳出循环条件必须为： `while(fast != null && fast.next != null)`, 
- 如果和判断是否有环那题一样的跳出循环条件 => 那么将无法判断 `odd | even`  cases
- note there are two example, one is odd numbers of Nodes
  - second is even numbers of Nodes, which it requires return `Node 4`
    - so first, count the length of LinkedList
    - then, count either odd or even

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
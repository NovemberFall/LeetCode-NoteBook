## 83. Remove Duplicates from Sorted List
![](img/2023-01-08-11-30-37.png)

- [youtube video](https://www.youtube.com/watch?v=p10f-VpO4nE)

```ruby
    head
    [1] -> [1] -> [2] -> [3] -> [3]
    cur    cur.next


    head
    [1] -> [1] -> [2] -> [3] -> [3]
    cur
    |              ↑  
     ——————————————        ## cur = cur.next.next




## but what if:

    head
    [1] -> [1] -> [1] -> [3] -> [3] -> null
    cur           cur.next
    |             ↑  
    ——————————————      ## so we need to still check if: cur.val == cur.next.val
                        ## cur.next = cur.next.next


    head
    [1]                  [3] -> [3] -> null
    cur           
    |                     ↑  
    ——————————————————————  


    head
    [1]                  [3]           null
                         cur           
    |                    ↑ |            ↑
    —————————————————————  —————————————
```
---

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
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) return head;
        
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode cur = head;
        
        while (cur != null) {
            if (cur.next != null && cur.val == cur.next.val) {
                while (cur.next != null && cur.val == cur.next.val) {
                    cur.next = cur.next.next;
                }
            } else {
                cur = cur.next;
            }
        }
        return dummy.next;
    }
}
```
---

#### Python

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1)
        dummy.next = head
        cur = head
        
        while cur:
            if cur.next and cur.val == cur.next.val:
                while cur.next and cur.val == cur.next.val:
                    cur.next = cur.next.next
            else:
                cur = cur.next
        return dummy.next
```
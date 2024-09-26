## 82. Remove Duplicates from Sorted List II
![](img/2023-01-08-01-27-42.png)

- [YoutTube video](https://www.youtube.com/watch?v=R6-PnHODewY)

```ruby
## if (head.val == head.next.val) ?

    [dummy] -> [1] -> [2] -> [3] -> [3] -> [4] -> [4] -> [5]
     prev      head


    [dummy] -> [1] -> [2] -> [3] -> [3] -> [4] -> [4] -> [5]
     prev      head                     # head.val != head.next.val


    [dummy] -> [1] -> [2] -> [3] -> [3] -> [4] -> [4] -> [5]
               prev   head  


    [dummy] -> [1] -> [2] -> [3] -> [3] -> [4] -> [4] -> [5]
                      prev   head       # head.val == head.next.val


    [dummy] -> [1] -> [2] -> [3] -> [3] -> [4] -> [4] -> [5]
                      prev          head      



    [dummy] -> [1] -> [2]    [3] -> [3] -> [4] -> [4] -> [5]
                      prev          head 
                       |                    ↑
                       ——————————————————————


    [dummy] -> [1] -> [2]    [3] -> [3] -> [4] -> [4] -> [5]
                      prev                 head 
                       |                    ↑
                       ——————————————————————


    [dummy] -> [1] -> [2]    [3] -> [3] -> [4] -> [4] -> [5]
                      prev                        head 
                       |                    ↑
                       ——————————————————————


    [dummy] -> [1] -> [2]    [3] -> [3] -> [4] -> [4] -> [5]
                      prev                               head 
                       |                                  ↑
                       ————————————————————————————————————
```
---

```java
class _82_RemoveDuplicatesFromSortedList_II {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) {
            return head; 
        }

        ListNode dummy = new ListNode(9527); 
        dummy.next = head;

        // Use 'prev' to keep track of the last non-duplicate node.
        ListNode prev = dummy;

        while (head != null) {
            // If there are duplicates (consecutive nodes with the same value)
            if (head.next != null && head.val == head.next.val) {
                // Skip all nodes with the same value.
                while (head.next != null && head.val == head.next.val) {
                    head = head.next;
                }
                // Link the last non-duplicate node to the node after the duplicates.
                prev.next = head.next;
            }
            // If current node is not a duplicate
            else if (head.next != null && head.val != head.next.val) {
                prev = prev.next;
            }
            // Move head to the next node.
            head = head.next;
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
        prev = dummy
        
        while head:
            if head.next and head.val == head.next.val:
                while head.next and head.val == head.next.val:
                    head = head.next
                prev.next = head.next
            elif head.next and head.val != head.next.val:
                prev = prev.next
            head = head.next 
        
        return dummy.next
```

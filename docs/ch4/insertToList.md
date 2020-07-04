# Insert a node into Sorted LinkedList

```ruby
Insert a value in a sorted linked list.

Examples

L = null, insert 1, return 1 -> null
L = 1 -> 3 -> 5 -> null, insert 2, return 1 -> 2 -> 3 -> 5 -> null
L = 1 -> 3 -> 5 -> null, insert 3, return 1 -> 3 -> 3 -> 5 -> null
L = 2 -> 3 -> null, insert 1, return 1 -> 2 -> 3 -> null
 
```

---


## Analysis:

```java
Case1:    
              [head]                                      
[newNode] ->  [head]

      ||
              [head]   //head == null
[newNode] ->  [head]

return newNode


Case2:
2. insert the new node to the right position
   using the dummy node to traverse the linked list
   the insert position of the new node should be btw dummy and dummy.next
```



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
  public ListNode insert(ListNode head, int value) {
    ListNode newNode = new ListNode(value);
    //1. determine if the inserted node is before head
    if(head == null || head.value >= value){
        newNode.next = head;
        return newNode;
    }

    //2. insert the new node to the right position
    //using the dummy node to traverse the linked list
    //the insert position of the new node should be btw dummy and dummy.next
    ListNode dummy = head;
    whie(dummy.next != null || value > dummy.next.value){
        dummy = dummy.next;
    }
    newNode.next = dummy.next;
    dummy.next = newNode;
    return head;
  }
}
```
## 203. Remove Linked List Elements

- Given the head of a linked list and an integer `val`, remove all the nodes of the linked list 
  that has `Node.val == val`, and return the new head.

![](img/2021-06-11-22-07-11.png)

---

- Tmie = O(n)
- Space = O(1)

---

![](img/2021-06-11-22-08-12.png)

![](img/2021-06-11-22-08-29.png)

![](img/2021-06-11-22-08-47.png)
---

- Why dummy? `head` may be changed:

```ruby
        [2] -> [3] -> [6] -> [4] -> [6]   ,  target = 2

               [3] -> [6] -> [4] -> [6]  # now head has changed!
```

---

```java
class _203_RemoveLinkedListElements {
    public ListNode removeElements(ListNode head, int val) {
        if (head == null) {
            return head;
        }
        ListNode dummy = new ListNode(9527);
        dummy.next = head;
        ListNode prev = dummy;
        while (head != null) {
            if (head.val == val) {
                prev.next = head.next;
            } else {
                prev = head;
            }
            head = head.next;
        }
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(2);
        head.next.next.next.next = new ListNode(5);

        _203_RemoveLinkedListElements removeLinkedListElements = new _203_RemoveLinkedListElements();
        ListNode res = removeLinkedListElements.removeElements(head, 2);
        while (res != null) {
            System.out.print(res.val + " ");
            res = res.next;
        } // 1->2->3->4->5   =>   1->3->5
    }
}
```
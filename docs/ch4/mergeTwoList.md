# 21. Merge Two Sorted Lists

```ruby
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together 
the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```




- Analysis:
  - What is DummyHead? When to use it?
    - When we want to build a linkedList from scratch (initially zero nodes). 
      In order to avoid null pointer dereference, we need to use a dummy head.
    

```java
ListNode dummy = new ListNode(0);
dummy.next = N1;
return dummy.next;
```

```ruby
example:
Input: 
    l1: 1 -> 2 -> 4
    l2: 1 -> 3 -> 4
Output:  1->1->2->3->4->4
```

- Assumptions:
  - if l1 is null, return l2
  - if l2 is null, return l1
  - 只有当 l1 is not null AND l2 is not null, 我们才进行合并

- Approach:

```ruby
    l1: 1 -> 2 -> 4
    l2: 1 -> 3 -> 4
    cur: 1 -> 1                 l1->1 <= l2->1 
    cur: 1 -> 1 -> 2               l1->2 <= l1->3
    cur: 1 -> 1 -> 2 -> 3              l1->4 >= l2->3
    cur: 1 -> 1 -> 2 -> 3 -> 4             l1->4 <= l2->4
    此时，l1 is null
    jump loop
    check if l1 is null, if it is null, => cur->next = l2
    check if l2 is null, if it is null, => cur->next = l1

    finally, return dummyHead.next
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
  public ListNode merge(ListNode one, ListNode two) {
    // Write your solution here
    ListNode dummy = new ListNode(0);
    ListNode cur = dummy;
    while(one != null && two != null){
      if(one.value <= two.value){
        cur.next = one;
        one = one.next;
      }else{
        cur.next = two;
        two = two.next;
      }
      cur = cur.next;
    }
    //link the remaining possible nodes
    if(one != null){
      cur.next = one;
    }else{
      cur.next = two;
    }
    return dummy.next;
  }
}

```



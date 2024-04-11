## 23. Merge k Sorted Lists

![](img/2021-07-13-11-36-36.png)

---

- step 1: minHeap.offer(all ListNode[])
- step 2: if current array's next node is not null,
  minHeap.offer(next.next)
- step 3: cur = cur.next

```ruby
lists = [[1,4,5],[1,3,4],[2,6]]

minHeap<arr[0].[0], arr[1].[0], arr[2].[0] >
cur -> 1 ...

minHeap<arr[0].[1], arr[0].[2], arr[1].[0], arr[2].[0] >
...
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
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>(lists.length, new Comparator<ListNode>() {
            @Override
            public int compare(ListNode o1, ListNode o2) {
              if (o1.val == o2.val) {
                return 0;
              }
              return o1.val < o2.val ? -1 : 1;
            }
        });
      
        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;
        for (ListNode list : lists) {
            if (list != null) {
                minHeap.offer(list);
            }
        }
        
        while (!minHeap.isEmpty()) {
            ListNode node = minHeap.poll();
            cur.next = node;
            node = node.next;
            if (node != null) {
                minHeap.offer(node);
            }
            cur = cur.next;
        }
        return dummy.next;
    }
}
```

---

### Merge Lists with Divide And Conquer

- [Divide And Conquer](https://leetcode.com/problems/merge-k-sorted-lists/discuss/429518/JAVA-SUMMARY-of-all-solutions-(B-F-minPQ-Divide-And-Conquer)#:~:text=Merge%20Lists%20with%20Divide%20And%20Conquer)

- In effect, we don't need to traverse most nodes many times repeatedly. We can divide lists in half until there is only one list. 
  Merge them one by one to get the final result. It's similar to mergesort.

- Time: O(N log{k}) 
- Space: O(log{k}) if we use recursion (depth of the recursion tree).

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        return divideAndConquer(lists, 0, lists.length - 1);
    }
    
    private ListNode divideAndConquer(ListNode[] lists, int left, int right) {
        if (left > right) {
            return null;
        }
        if (left == right) {
            return lists[left];
        }
        
        int mid = left + ((right - left) >> 2); // prevent overflow
        ListNode leftNode = divideAndConquer(lists, left, mid);
        ListNode rightNode = divideAndConquer(lists, mid + 1, right);
        return merge(leftNode, rightNode);
    }
    
    private ListNode merge(ListNode left, ListNode right) {
        ListNode dummy = new ListNode(-1);
        ListNode cur = dummy;
        
        while (left != null && right != null) {
            if (left.val < right.val) {
                cur.next = left;
                left = left.next;
            } else {
                cur.next = right;
                right = right.next;
            }
            cur = cur.next;
        }
        
        cur.next = (left == null) ? right : left;
        return dummy.next;
    }
}
```
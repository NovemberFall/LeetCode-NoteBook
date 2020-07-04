# 2. Add Two Numbers

```java
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```


### Analysis:

```java
Complexity Analysis

Time complexity : O(max(m, n))O(max(m,n)). 
Assume that m and n represents the length of l1 and l2 respectively, 
the algorithm above iterates at most max(m, n) times.

Space complexity : O(max(m, n)). 
The length of the new list is at most max(m,n) + 1
```






- code

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode cur = dummyHead;

        int ones = 0;
        int carry = 0;
        while(l1 != null || l2 != null){
            int L1_num = (l1 != null)? l1.val : 0;
            int L2_num = (l2 != null)? l2.val : 0;
            
            int sum = L1_num + L2_num + carry;
            ones = sum % 10;
            carry = sum / 10;
            
            ListNode tmp = new ListNode(ones);
            
            cur.next = tmp;
            cur = cur.next;
            
            if(l1 != null){
              l1 = l1.next;    
            }
            if(l2 != null){
              l2 = l2.next;
            }
        }
        
        if (carry > 0) {
            cur.next = new ListNode(carry);
        }
        return dummyHead.next;
    }
}
```
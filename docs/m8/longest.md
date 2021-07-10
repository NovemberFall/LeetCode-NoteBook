## 424. Longest Repeating Character Replacement

- You are given a string s and an integer k. You can choose any character of the string and 
  change it to any other uppercase English character. 
  You can perform this operation at most k times.

- Return the length of the longest substring containing the same letter you can get after 
  performing the above operations.

- Example 1:
  Input: s = "ABAB", k = 2
  Output: 4
  Explanation: Replace the two 'A's with two 'B's or vice versa.

- Example 2:
  Input: s = "AABABBA", k = 1
  Output: 4
  Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
  The substring "BBBB" has the longest repeating letters, which is 4.

---

### Analysis:


- substring is continuous,
- subsequence is discontinuous

- two pointers, left and right

1. Move the right pointer first and find one that satisfies the meaning of the question and can
  replace k characters, all the characters become the same as the longest substring at present, 
  until the right boundary contains one character, and it stops when it cannot be satisfied;
2. Then consider that the left boundary moves to the right. After the left boundary only needs to 
  move one square to the right, the right boundary can start to move to the right again, and 
  continue to try to find a longer target substring;
3.  The longest repetitive substring after replacement is generated in the process of alternately 
  moving the right and left borders to the right.

- time complexity: O(N),  here N is the length of the input string S;
- Space complexity: O(A), where A is the range of ASCII values of characters appearing 
  in the input string S


---

```java
/*
k = 2
map<'A'=>[0], 2 >
   <'B'=>[1], 3 > 
longest {3  }   

0  1  2  3  4  5  6
A  A  B  A  B  B  A
   s
                  f

6 - 0 > 3 + k

*/
class Solution {
    public int characterReplacement(String s, int k) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        int slow = 0;
        int fast = 0;
        int [] map = new int[26];
        int longest = 0;
        
        while (fast < s.length()) {
            map[s.charAt(fast) - 'A']++;
            longest = Math.max(longest, map[s.charAt(fast) - 'A']);
            fast++;
            
            if (fast - slow > longest + k) {
                map[s.charAt(slow) - 'A']--;
                slow++;
            }
        }
        return fast - slow;
    }
}
```

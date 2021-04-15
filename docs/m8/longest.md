## 424. Longest Repeating Character Replacement

```ruby
You are given a string s and an integer k. You can choose any character of the string and 
change it to any other uppercase English character. 
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.


Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.


Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

### Analysis:

```ruby
- substring is continuous,
- subsequence is discontinuous

- two pointers, left and right

1. Move the right pointer first and find one that satisfies the meaning of the question and can replace k characters, 
  all the characters become the same as the longest substring at present, until the right boundary contains one character, 
  and it stops when it cannot be satisfied;
2. Then consider that the left boundary moves to the right. After the left boundary only needs to move one square to the right, 
  the right boundary can start to move to the right again, and continue to try to find a longer target substring;
3.  The longest repetitive substring after replacement is generated in the process of alternately moving the right 
   and left borders to the right.


time complexity: O(N),  here N is the length of the input string S;
Space complexity: O(A), where A is the range of ASCII values of characters appearing in the input string S
```

---

```java
class Solution {
    public int characterReplacement(String s, int k) {
        int len = s.length();
        if (len < 2) {
            return len;
        }
        char[] arr = s.toCharArray();
        int[] freq = new int[26];
        // Replace at most k characters in [left, right) to get a substring with only one character
        int left = 0;
        int right = 0;
        int maxCount = 0;
        while (right < len) {
            freq[arr[right] - 'A']++;
            maxCount = Math.max(maxCount, freq[arr[right] - 'A']);
            right++;
            
            if (right - left > maxCount + k) {
                // k is not enough
                // After replacing other characters that are not the most appearing, 
                // they will not be able to fill the sliding window. At this time, 
                // you need to consider moving the left pointer to the right.
                freq[arr[left] - 'A']--;
                left++;
            }
        }
        return right - left;
    }
}
```

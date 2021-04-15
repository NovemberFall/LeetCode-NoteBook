## 3. Longest Substring Without Repeating Characters

```ruby
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, 
"pwke" is a subsequence and not a substring.
```

```ruby
B D E B A
l
r
hashSet = {B}

B D E B A
l
  r
hashSet = {B, D}

B D E B A
l
    r
hashSet = {B, D, E}

## for next step, B is occupying twcie, remove B from hashSet
## move left pointer to right 

B D E B A
  l
    r
hashSet = {D, E}


B D E B A
  l
      r
hashSet = {D, E, B}


B D E B A
  l
        r
hashSet = {D, E, B, A}


Data Structure
left
right
hashSet: stores all the letters in a[left... right] (close interval)
global_max: the maximum size of the hashSet

For each step:
if a[right + 1] is not in hashSet,
    right++
    hashSet.add(a[right])
    alobal_max = max(global_max, hashSet.size())

if a[right + 1] is in hashSet
    hashSet.remove(a[left])
    left++
```

---

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        //the distinct set contains all distinct characters
        //in the sliding window of (left, right)
        int len = s.length();
        int left = 0;
        int right = 0;
        int global_max = 0;
        Set<Character> hset = new HashSet<>();
        while (right < len) {
            if (hset.contains(s.charAt(right))) {
                //if there is duplicate character, we need to move 
                //the left pointer
                hset.remove(s.charAt(left));
                left++;
            } else {
                //if there is no duplicate character, we can slide
                //right pointer and we have a new sliding window of
                //(left, right) containing all distincet characters.
                hset.add(s.charAt(right));
                right++;
            }
            global_max = Math.max(global_max, hset.size());
        }
        return global_max;
    }
}
```
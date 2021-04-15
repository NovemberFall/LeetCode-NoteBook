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

For each step:
if a[right + 1] is not in hashSet,
right++
hashSet.add(a[right])

if a[right + 1] is in hashSet
hashSet.remove(a[left])
left++
```
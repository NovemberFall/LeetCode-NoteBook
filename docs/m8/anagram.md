## 438. Find All Anagrams in a String

```ruby
Given two strings s and p, return an array of all the start indices of `p's`
anagrams in s. You may return the answer in any order.


Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".


Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```


```ruby
string s2 = "aabc"      reference_hashmap: <a, 2> <b, 1> <c, 1>
       s1 = "zzzzcdebcaabcyywwwww"
              ----

left = 1
right = 5 
hashmap = {z:3, c:1}
num_matches = 0

如果c 的frequency从对上变成对不上
    num_matches--;
如果c 的frequency从对不上变成对上
    num_matches++;   
    

如果z 的frequency从对上变成对不上
    num_matches--;
如果z 的frequency从对不上变成对上
    num_matches++;   


Data structure:
left
right
hashmap: the frequence of each letter between a[left] and a[right]

Initialize:
left = 0
right = s2.length - 1
hashmap = the frequence of each letter in a[0... s2.length-1]
num_matches = 有多少字母在hashmap中的frequency 和 在reference_hashmap中的 frequence 一致


For each step:
Compare hashmap with reference_hashmap    - O(s2.length)
hashmap[a[left]]--;
left++
right++
hashmap[a[right]]++;
```


```java
public class Solution {
  public List<Integer> allAnagrams(String sh, String lo) {
    // Write your solution here
    List<Integer> result = new ArrayList<>();
    if (lo.length() == 0) {
      return res;
    }
    //when sh is longer than lo, there is no way any of 
    //the substring of lo could be an anagram of sh.
    if (sh.length() > lo.length()) {
      return res;
    }

    //This map records for each of the distinct character in s
    //how many characters are needed
    //e.g. s = "abbc", map = {'a':1, 'b':2, 'c':1}
    //when we get an instance of 'a' in lo, 
    //we let count of 'a' decremented by 1,
    //and only when the count is from 1 to 0, we have 'a' totally matched.
    Map
  }
}
```
## 3. Longest Substring Without Repeating Characters
![](img/2023-03-12-18-28-08.png)
---

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
        char[] arr = s.toCharArray();
        HashSet<Character> set = new HashSet<>();
        int global_max = -1;
        int slow = 0;
        int fast = 0;
        while (fast < arr.length) {
            if (!set.contains(arr[fast])) {
                //if there is no duplicate character, we can slide
                //right pointer and we have a new sliding window of
                //(left, right) containing all distincet characters.                
                set.add(arr[fast++]);
            } else {
                //if there is duplicate character, 
                //we need to move the left pointer                
                set.remove(arr[slow++]);
            }
            global_max = Math.max(global_max, set.size());
        }
        return global_max;
    }
}
```
---

## Sliding Window

```java
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int slow = 0, count = 0, longest = 0;

        for (int fast = 0; fast < s.length(); fast++) {
            // > 0 means repeating character
            //if(map[s.charAt(fast++)]-- > 0) count++;
            char c = s.charAt(fast);
            map.put(c, map.getOrDefault(c, 0) + 1);
            if (map.get(c) > 1) {
                count++;
            }

            while (count > 0) {
                //if (map[s.charAt(slow++)]-- > 1) count--;
                char cur = s.charAt(slow);
                if (map.get(cur) > 1) {
                    count--;
                }
                map.put(cur, map.get(cur) - 1);
            }
            longest = Math.max(longest, fast - slow + 1);
        }
        return longest;
    }
```
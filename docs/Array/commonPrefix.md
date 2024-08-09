## 14. Longest Common Prefix
![](img/2024-05-13-20-59-18.png)
---

- Time complexity:
  - 1. Sorting the array of strings takes **O(Nlog(N))** time.  This is because most of the common sorting algorithms like quicksort, mergesort, 
    and heapsort have an average time complexity of O(Nlog(N)).
  - 2. Iterating over the characters of the first and last strings takes **O(M)** time. This is because the code compares the characters of the 
    two strings **until it finds the first mismatch**.

- Therefore, the total `time complexity` is **O(Nlog(N) + M)**.

- the `space complexity` is **O(1)** as it does not depend on the size of the input array.


---
```java
class _14_LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        Arrays.sort(strs);
        String s1 = strs[0];
        String s2 = strs[strs.length - 1];
        int idx = 0;
        while (idx < s1.length() && idx < s2.length()) {
            if (s1.charAt(idx) == s2.charAt(idx)) {
                idx++;
            } else {
                break;
            }
        }
        return s1.substring(0, idx);
    }
}
```
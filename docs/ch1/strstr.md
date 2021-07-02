## 28. Implement strStr() | Determine If One String Is Another's Substring


- Implement strStr().

- Return the index of the first occurrence of needle in haystack, or -1 if needle is not part 
  of haystack.

- Example 1:
  Input: haystack = "hello", needle = "ll"
  Output: 2

- Example 2:
  Input: haystack = "aaaaa", needle = "bba"
  Output: -1


### Analysis:

- Assume:
  - s1 = "abcde"          s2 = "cde"
  - <U>abc</U>de
  - a<U>bcd</U>e
  - ab<U>cde</U>


```ruby
      0 1 2 3 4 5 6 7 8                 0 1 2  
s1 = [a b c d e f g h i]          s2 = [c d e]
      i->                               j-> #every loop init j = 0

assume i = 2,
                 2   0               
'c' :  s1.charAt(i + j) == s2.charAt(0)  # j : [0 .. 2]


                 2   0               
'd' :  s1.charAt(i + j) == s2.charAt(1)


                 2   0
'e' :  s1.charAt(i + j) == s2.charAt(2)
```



- Time = O(m * n)

```java
/*
a  b  c  d  e            c  d  e
i                        j

a  b  c  d  e            c  d  e
   i                     j

a  b  c  d  e            c  d  e
      i                     j

a  b  c  d  e            c  d  e
      i                        j

a  b  c  d  e            c  d  e
      i                          j


*/
class Solution {
    public int strStr(String haystack, String needle) {
        if (haystack == null || needle == null || 
            haystack.length() < needle.length()) {
            return -1;
        }
        if (needle.length() == 0) {
            return 0;
        }
        
        for(int i = 0; i <= haystack.length()-needle.length(); i++){
           int j = 0;
           while(j < needle.length() && 
                 haystack.charAt(i + j) == needle.charAt(j)) {
               j++;
           }
           if (j == needle.length()) {
               return i;
           } 
        }
        return -1;
    }
}
```

---

### Solution 2:  O(m) Rabin-Karp

```ruby
hash(c d e) = 1434

a  b  c  d  e
      _______

hash(abc) = 28 
hash(bcd) = 731 
hash(cde) = 1434

O(1) to calculate hash()

a -> 0
b -> 1
c -> 2
d -> 3
...
z -> 25


hash(c d e) = 1434
     2 * 26^2 + 3 * 26 + 4 = 1434

hash(abc) = 0 * 26^2 + 1 * 26   + 2 = 28
hash(bcd) =            1 * 26^2 + 2 * 26   + 3 = 731 
hash(cde) =                       2 * 26^2 + 3 * 26 + 4 = 1434       

O(1) to calculate hash()

1. remove the leftmost item from the hash function
2. all the rest items * 26
3. add new item 
```

- Time = O(m) in average [和 KMP 方法不相上下]
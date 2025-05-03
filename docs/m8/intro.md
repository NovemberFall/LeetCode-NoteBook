## String | KMP  knuth-Morris-Pratt Algorithm





### KMP  knuth-Morris-Pratt Algorithm

- **Naive** way:

```ruby
           i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
           j


              i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
              j


                 i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
                 j


                    i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
                    j
                         Now 'a' != 'b'
                         move j to the beginning
                         move i to the second position



              i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
           j

  .
  .
  .

                       i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
                    j
                         Now 'a' != 'b'
                         move j to the beginning
                         move i to the third position



                       i
  String:  a  a  a  a  a  a  a  b
  
  pattern: a  a  a  b
                    j

                    .
                    .
                    .
```

- So the **TC = O(M * N)**

---


### **Prefix** and **Suffix**

- [what is the meaning of "Prefix" and "Suffix"](https://youtu.be/JoF0Z7nVSrA?t=445)?


---
- [how does this algorithm work? | 我的老师 牛皮 ！！！](https://youtu.be/GTJr8OvyEVQ?t=343)

---

### Prepare **LPS** table

```java
    /**
     * Compute temporary array to maintain size of suffix which is same as prefix
     * Time/space complexity is O(size of pattern)
     */
    private int[] buildLPS(String pattern) {
        int[] lps = new int[pattern.length()];
        int j = 0;
        int i = 1;
        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(j)) {
                lps[j] = j + 1;
                j++;
                i++;
            } else {
                if (j == 0) {
                    lps[i] = 0;
                    i++;
                } else {
                    j = lps[j - 1];
                }
            }
        }
        return lps;
    }
```

```ruby
                 j   i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0                  


                 j       i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0                             pattern[i] != pattern[j];  lps[j] = 0; i++


                 j           i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0                         pattern[i] != pattern[j];  lps[j] = 0; i++


                 j               i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0   0                     pattern[i] != pattern[j];  lps[j] = 0; i++


                     j               i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0   0   1                 pattern[i] == pattern[j];  lps[j] = j + 1; j++ i++


                         j               i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0   0   1   2             pattern[i] == pattern[j];  lps[j] = j + 1; j++ i++        


                             j               i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0   0   1   2   3         pattern[i] == pattern[j];  lps[j] = j + 1; j++ i++    


                 j                           i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0   0   1   2   3         pattern[i] != pattern[j];  j != 0, j = lps[j - 1]  


                     j                           i
    Pattern:     a   b   c   d   a   b   c   a  
                 0   1   2   3   4   5   6   7
        
        LPS:     0   0   0   0   1   2   3   1     pattern[i] == pattern[j];  lps[i] = j + 1, j++ i++  
```
---

- The reason we check **prefixes** and **suffixes** to prepare the **LPS (Longest Prefix Suffix)** table in the **KMP algorithm** is 
  because the KMP algorithm is designed to **avoid re-checking characters** in the pattern string during mismatches in the search 
  phase.
- 2. **Prefix = Suffix**
---

### Now, [how this **KMP** algorithm work](https://youtu.be/GTJr8OvyEVQ?t=621):

```ruby
       text:   a  b  x  a  b  c  a  b  c  a  b  y
               
    pattern:   a  b  c  a  b  y
        lps:   0  0  0  1  2  0


      text[i] == pattern[j], i++ j++



                     i
       text:   a  b  x  a  b  c  a  b  c  a  b  y
               
                     j
    pattern:   a  b  c  a  b  y
        lps:   0  0  0  1  2  0
                     

      text[i] != pattern[j], j = lps[j - 1], j => 0


                        i
       text:   a  b  x  a  b  c  a  b  c  a  b  y
               
               j
    pattern:   a  b  c  a  b  y
        lps:   0  0  0  1  2  0
                                 since j == 0, i++



                        i
       text:   a  b  x  a  b  c  a  b  c  a  b  y
               
               j
    pattern:   a  b  c  a  b  y
        lps:   0  0  0  1  2  0
                                    since 'a b c a b ' ==  'a b c a b', move i, j



                                       i
       text:   a  b  x  a  b  c  a  b  c  a  b  y
               
                              j
    pattern:   a  b  c  a  b  y
        lps:   0  0  0  1  2  0
                                    since 'c' != 'y', j != 0, j = lps[j - 1], j => 2



                                       i
       text:   a  b  x  a  b  c  a  b  c  a  b  y
               
                     j
    pattern:   a  b  c  a  b  y
        lps:   0  0  0  1  2  0
                                  Now: 'c a b y' == 'c a b y',  Return => True  
                                    
```

- **TC = O(M + N)**




```java
/**
 * Do pattern matching using KMP algorithm
 * <p>
 * Runtime complexity - O(m + n) where m is length of text and n is the length of pattern
 * Space complexity - O(n)
 */
class strStr {
    public int strStr(String haystack, String needle) {
        return KMP(haystack, needle);
    }

    /**
     * Compute temporary array to maintain size of suffix which is same as prefix
     * Time/space complexity is O(size of pattern)
     */
    private int[] buildLPS(String pattern) {
        int[] lps = new int[pattern.length()];
        int j = 0;
        int i = 1;
        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(j)) {
                lps[i] = j + 1;
                j++;
                i++;
            } else {
                if (j == 0) {
                    lps[i] = 0;
                    i++;
                } else {
                    j = lps[j - 1];
                }
            }
        }
        return lps;
    }

    /**
     * KMP algorithm of pattern matching.
     */
    private int KMP(String text, String pattern) {
        int[]lps = buildLPS(pattern);
        int i = 0;
        int j = 0;
        while (i < text.length() && j < pattern.length()) {
            if (text.charAt(i) == pattern.charAt(j)) {
                i++;
                j++;
            } else {
                if (j == 0) {
                    i++;
                } else {
                    j = lps[j - 1];
                }
            }
        }
        if (j == pattern.length()) {
            return i - lps.length;
        }
        return -1;
    }
}
```

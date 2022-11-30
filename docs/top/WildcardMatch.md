## 44. Wildcard Matching
![](img/2022-11-28-11-29-06.png)


![](img/2022-11-30-13-22-37.png)


```ruby
Input:
S: "a c c c b"
P: "a * b"

sp = 0, pp = 0, match(M) = 0, starIdx(SI) = -1;

===============================================
Round 1:
  
  a   c   c   c   b
  sp++
  a   *   b
  pp++


Round 2:

  a   c   c   c   b
      sp
      M
  a   *   b
      pp++
      SI


  a   c   c   c   b
      sp
      M
  a   *   b
          pp
      SI

Round 3:

  a   c   c   c   b
      sp
      M++
  a   *   b
          pp
      SI     


  a   c   c   c   b
          sp
          M
  a   *   b
          pp
      SI  


Round 4:

  a   c   c   c   b
          sp
          M++
  a   *   b
          pp
      SI   
     
     
  a  c  c  c  b
           sp
           M
  a  *  b
        pp
     SI
     
Round 5:

  a  c  c  c  b
           sp
           M++
  a  *  b
        pp
     SI


  a  c  c  c  b
              sp
              M
  a  *  b
        pp
     SI

Round 6:

  a  c  c  c  b
              sp++
              M
  a  *  b
        pp++
     SI


  a  c  c  c  b
                 sp
              M
  a  *  b
          pp
     SI
```

---

```java
class _44_WildcardMatching {
    public boolean isMatch(String s, String p) {
        int sp = 0, pp = 0, match = 0, starIdx = -1;
        while (sp < s.length()){
            // advancing both pointers
            if (pp < p.length()  && (p.charAt(pp) == '?' || s.charAt(sp) == p.charAt(pp))){
                sp++;
                pp++;
            }
            // * found, only advancing pattern pointer
            else if (pp < p.length() && p.charAt(pp) == '*'){
                starIdx = pp;
                match = sp;
                pp++;
            }
            // last pattern pointer was *, advancing string pointer
            else if (starIdx != -1){
                pp = starIdx + 1;
                match++;
                sp = match;
            }
            //current pattern pointer is not star, last patter pointer was not *
            //characters do not match
            else {
                return false;
            }
        }

        //check for remaining characters in pattern
        while (pp < p.length() && p.charAt(pp) == '*') {
            pp++;
        }

        return pp == p.length();
    }

    public static void main(String[] args) {
        _44_WildcardMatching wm = new _44_WildcardMatching();
        String s = "acdcb", p = "a*c?b";
        boolean res = wm.isMatch(s, p);
        System.out.println(res);
    }
}
```
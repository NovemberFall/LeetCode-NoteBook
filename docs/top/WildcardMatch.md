## 44. Wildcard Matching
![](img/2022-11-28-11-29-06.png)

```ruby
Input:
S: "acccb"
P: "a*cb"

s = 0, p = 0, match(M) = 0, starIdx(SI) = -1;


  a  c  c  c  b
  s++
  a  *  c  b
  p++


  a  c  c  c  b
     s
     M
  a  *  c  b
     p++
     SI


  a  c  c  c  b
     s
     M
  a  *  c  b
        p
     SI


  a  c  c  c  b
     s++
     M
  a  *  c  b
        p++
     SI     


  a  c  c  c  b
        s
        M
  a  *  c  b
        p
     SI  


  a  c  c  c  b
        s++
        M
  a  *  c  b
        p++
     SI   
     
     
  a  c  c  c  b
           s
        M
  a  *  c  b
           p
     SI
     
     
  a  c  c  c  b
           s
           M
  a  *  c  b
        p
     SI  


  a  c  c  c  b
              s
              M
  a  *  c  b
        p
     SI  
```


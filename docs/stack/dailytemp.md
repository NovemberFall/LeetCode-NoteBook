## 739. Daily Temperatures
![](img/2023-09-22-16-27-46.png)

---
### Stack

- [youtube video](https://www.youtube.com/watch?v=cTBiBSnjO3c&ab_channel=NeetCode)

```ruby
        Output: [73  74  75  71  69  72  76  73]

        Stack[73, 72, 71]
        Monotonic Decreasing




        Output: [73  74  75  71  69  72  76  73]
                                      i
        Stack[73, 72, 71]     71 < 72         # if we meet `72` 
                              71 => pop()                              
        Monotonic Decreasing    
        
        Stack[73, 72,   ]     71 < 72         # if we meet `72` 
                              71 => pop()    
        Stack[73, 72, 72]     71 <= 72         



        Stack[73, 72,   ]     72 < 76         # if we meet `76` 
                              72 => pop()                              


        Stack[73,   ,   ]     72 < 76         # if we meet `76` 
                              72 => pop()    
                

        Stack[  ,   ,   ]     73 < 76         # if we meet `76` 
                              73 => pop()    
```
---
```java
class DailyTemperatures {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stk = new Stack<>();
        int[] res = new int[temperatures.length];
        for (int i = 0; i < temperatures.length; i++) {
            while (!stk.isEmpty() && temperatures[stk.peek()] < temperatures[i]) {
                int idx = stk.pop();
                res[idx] = i - idx;
            }
            stk.push(i);
        }
        return res;
    }
}
```



---
### Brute Force

- T(N^2)

```java
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] res = new int[temperatures.length];
        for (int left = 0; left < temperatures.length; left++) {
            for (int right = left + 1; right < temperatures.length; right++) {
                if (temperatures[left] < temperatures[right]) {
                    res[left] = right - left;
                    break;
                }
            }
        }
        return res;
    }
}
```
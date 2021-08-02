## 55. Jump Game
![](img/2021-07-31-22-29-02.png)

### Analysis

```ruby
from left hand side to right hand side DP

index   0   1   2   3   4
A   =  [2   3   1   1   4]

                        ->
m   =   T   T   T   T   T
```

- Base case: M[0] = true
  Induction rule: M[i] represents whether I can reach index i from the start.
  M[i] = true   if there exists a j where j < i, M[j] == true AND j + A[j] >= i
  Return M[length - 1]
  Time = O(n^2)


- Counter-example:

- index   0   1   2   3   4
  a   =  [3   2   1   0   4]

- assume i == 1 :
  j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, => jump[i==1] = true;

- assume i == 2 :
  j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, => jump[i==2] = true;

- assume i == 3 :
  j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, -> j++ == 2
  j == 2, if jump[2] == true, AND a[j]==1 + 0 >= i, 

- assume i == 4 :
  j == 1, if jump[1] == true, AND a[j]==2 + 0 >= i, -> j++ == 2
  j == 2, if jump[2] == true, AND a[j]==1 + 0 >= i, -> j++ == 3
  j == 3, if jump[3] == false, 
  return => jump[array.length - 1] == jump[3] == false




```java
class Solution {
    public boolean canJump(int[] nums) {
        if(nums == null || nums.length == 0){
            return true;
        }
        
        boolean[] jump = new boolean[nums.length];
        jump[0] = true;
        for(int i = 1; i < nums.length; i++){
            for(int j = 0; j < i; j++){
                if(jump[j] && nums[j] + j >= i){
                    jump[i] = true;
                    break;
                }
            }
        }
        return jump[nums.length - 1];
    }
}
```







---

## 更优解：

```java
class Solution {
    public boolean canJump(int[] nums) {
        if(nums == null || nums.length == 0){
            return true;
        }
        int max = 0;
        for(int i = 0; i < nums.length; i++){
            if(i > max){
                return false;
            }
            max = Math.max(nums[i] + i, max);
        }
        
        return true;
    }
}

```


- 核心思想： Array[i] + currentIndex >= currentIndex;
- 否则如何跳到最后呢？ 😂
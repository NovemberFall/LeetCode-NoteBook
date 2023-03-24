## 13. Roman to Integer
![](img/2022-05-08-11-28-21.png)

![](img/2022-05-08-11-28-32.png)

![](img/2022-05-08-11-51-20.png)

- Note: if Roman number `IV`, since `I` is less than `V`, so `V - I` = 4
  Therefore :
  - init `index = n - 2`, `num = nums[lastIndex]`
  - if `nums[i + 1] < nums[i]`, `num += nums[i]`
    else `nums[i + 1] > nums[i]` : `num -= nums[i]`
    - for example: `X = 10, C = 100`, `XC = 100 - 10 = 90`

```java
class Solution {
    public int romanToInt(String s) {
        if (s == null || s.length() == 0) return 0;
        
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        
        char[] arr = s.toCharArray();
        int n = arr.length;
        int num = map.get(arr[n - 1]);
        for (int i = n - 2; i >= 0; i--) {
            if (map.get(arr[i]) >= map.get(arr[i + 1])) {
                num += map.get(arr[i]);
            } else {
                num -= map.get(arr[i]);
            }
        } 
        return num;
    }
}
```
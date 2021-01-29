## 1010. Pairs of Songs With Total Durations Divisible by 60

```ruby
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, 
we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.




Constraints:

1 <= time.length <= 6 * 104
1 <= time[i] <= 500
```

![](img/2021-01-29-00-19-26.png)


-----


## Analysis:

```ruby
From combination perspective, we have:
# pais to make up 60 = (# of time whose % 60 is i) * (# of time whose % 60 is 60 - i) for all possible i

For example:
If we have 5 numbers who % 60 = 20, and 7 numbers who % 60 = 40, then we can get 5 * 7 = 35 pairs to make up 60.

Above all, if we represents the number of time whose % 60 = i as map[i], then the result =

map[0]? + // why ? explain below
map[1] * map[59] +
map[2] * map[58] +
map[3] * map[57] +
... +
map[28] * map[32] +
map[29] * map[31] +
map[30]? // why ? explain below

Notice that I put question mark ? after map[0] and map[30] on the above formula. Because for map[0] and map[30], 
they are self-pairing to make up 60, so:

1. map[0]? = C(n, 2) = map[0] * (map[0] - 1)/2
- 因为在这里 map[0], 其实是出现的频率，那么在这些 map[0] 的数量中，我们只要pick 2 numbers,
- so, 

  C(n, 2) 
            n! 
= ---------------------------
        (n - 2)! * 2!

   n * (n - 1) * (n - 2)! 
= ---------------------------
        (n - 2)! * 2
        
        n * (n - 1) 
= ---------------------------
            2


2. map[30]? = C(n, 2) = map[30] * (map[30] - 1)/2




Data structure
We create int[] map to store the <remainder, frequency>

Of course, Map<Integer, Integer> also works, but clearly it is not as efficient as int[] map. Just like we prefer to use int[] map = new int[26] to keep track of <letter, frequency>
```


```java
class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        if (time == null || time.length == 0){
            return 0;
        }
        
        int sizeOfSongs = time.length;
        int [] map = new int[60];
        int res = 0;
        for (int i = 0; i < sizeOfSongs; i++){
            int remainder = time[i] % 60;
            map[remainder]++;
        }
        
        res += map[0] * (map[0] - 1) / 2;
        res += map[30] * (map[30] - 1) / 2;
        
        for (int i = 1; i < 30; i++) {
            res += map[i] * map[60 - i];
        }
        
        return res;
    }
}
```





































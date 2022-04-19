## 1151. Minimum Swaps to Group All 1's Together

![](img/2022-04-19-12-11-21.png)

```ruby
Firstly, we should count the total number of 1's in the whole array. 
let's call it totalOnes.
[1  0  1  0  1]

The final state of the solution:
         should be a sliding window of array which contains all Ones, 

the sliding window length equals to the totalOnes count.

final state would be frontZeros + 1,1,1 + endZeros

The possible sliding window of totalOnes length would be:
[1  0  1  0  1]
 1  0  1
    0  1  0
       1  0  1


So we need to maintain a sliding window size of totalOnes, 
                            and check every possible of it, 

find out the max sliding window contains the mosts ones. 
        The sliding window with max ones would be 1,0,1, 
        then the result is the count of zero numbers.


while(i < arr.length && j <= arr.length)
Total Ones: 3

            0   1   2   3   4
           [1   0   1   0   1]        
                i
                                    j

ones:       1   1   2   1   2   2
maxOnes     0   0   0   2   2   2

Math.max(ones, maxOnes)
```



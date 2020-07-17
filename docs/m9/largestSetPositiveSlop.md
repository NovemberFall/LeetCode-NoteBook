# Largest Set Of Points With Positive Slope

```ruby
Given an array of 2D coordinates of points (all the coordinates are integers), 
find the largest number of points that can form a set such that any pair of points 
in the set can form a line with positive slope. 
Return the size of such a maximal set.

Assumptions

The given array is not null
Note: if there does not even exist 2 points can form a line with positive slope, should return 0.
Examples

<0, 0>, <1, 1>, <2, 3>, <3, 3>, 
the maximum set of points are {<0, 0>, <1, 1>, <2, 3>}, 
the size is 3.
```

## Approach:

```ruby
p1<x1, y1>      p2<x2, y2>      p3<x3, y3>      p4 ...... p7

slope = (y2 - y1) / (x2 - x1)

           y2 - y1  
      = ------------- > 0
           x2 - x1 

x1 < x2, then we must have y1 < y2

if we sort x coordinates x1 < x2 < x3 < x4 ... < x7
Then we must have =>        y1 < y2 <y3 ...      < y7

This question can be converted to LONGEST ASCENDING SUB-SEQUENCE.

Step1: Sort the input points according to their x-coordinate. Result is put to A[N]
        Time = O(n logn)

Step2: A[N] = {<x0, y0> , <x1, y1>, <x2, y2> ... <xn-1, yn-1> }
       Find the longest ascending sub-sequence in A[N] according to their y-coordinates.
       Time = O(n logn)
```

- 注意： 这个题目里的input里面有一些点的x 是一样的
  - 所以在比较连个点的x,y的时候， 需要考虑 (p1.x == p2.x)，if not equal, => `p1.x - p2.y`
  - if is equal, => `p2.y - p1.y`
- 就是说我们需要先给对每一个点，进行排序，那么我为什么需要进行排序？
  - 比如你有p1和p2两个point，你要试两种组合 p1 - p2 和 p2 - p1，这两种组合的斜率一样 
    Sort之后你只需要用大的 减去小的，试一个组合就可以了
  - 那么为什么，在两个点的x 想通的时候，对x ascending sort, 对y descending sort?
    - 在x相同的时候对y排序从大到小，<u>这样可以避免相同x被选</u>!
    - for example: input: [<4,2>, <2,3>, <5,5>, <6,9>, <3,3>, <3,1>, <4,2>, <5,5>, <6,9>]
    - [具体dp算法可以参考](m9/longestAscSubseq.md)
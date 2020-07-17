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

slop = (y2 - y1) / (x2 - x1)

x1 < x2, then we must have y1 < y2

if we sort x coordinates x1 < x2 < x3 < x4 ... < x7
Then we must have =>        y1 < y2 <y3 ...      < y7

This question can be converted to LONGEST ASCENDING SUB-SEQUENCE.

Step1: Sort the input points according to their x-coordinate. Result is put to A[N]
        Time = O(n logn)

Step2: A[N] = {<x0, y0> , <x1, y1>, <x2, y2> ... <xn-1, yn-1> }
```

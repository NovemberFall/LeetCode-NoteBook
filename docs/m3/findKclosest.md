## 658. Find K Closest Elements
![](img/2022-12-10-17-51-54.png)
---

### Analysis:

- One case it's **ambiguous**:
  - `[1,  2,  3]`
    - you might be thinking though `1` is just close to `2` as `3` is also close to `2`
    - they clarify for us here:
      - since `1` is smaller than `3`, meet the condition: `|a - x| == |b - x| and a < b`

```ruby
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
```

- [discuss](https://leetcode.com/problems/find-k-closest-elements/discuss/106426/JavaC%2B%2BPython-Binary-Search-O(log(N-K)-%2B-K))


---
```java

```
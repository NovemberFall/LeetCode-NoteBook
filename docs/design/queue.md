## 232. Implement Queue using Stacks
![](img/2023-01-03-00-40-02.png)

```ruby
Stack1(enqueue) [ 1, 2, 3
Stack2(dequeue) [

Queue <- 1, 2, 3

## 问题是我现在想把第一个元素（1）从Stack1 里拿出来，我该怎么做？
## 很明显我把1，2，3 从Stack1里 倒腾进 stack2


Stack1(enqueue) [ 
Stack2(dequeue) [ 3, 2, 1

Queue <- 1, 2, 3


## 如果现在我们要 enqueue 一个元素 9 , 我们把它放进 stack1

Stack1(enqueue) [ 9, 10
Stack2(dequeue) [ 3, 2, 1

Queue <- 1, 2, 3, 9, 10


## 如果现在我们要 enqueue 一个元素 10 ,  继续把它放进 stack1 
```

- `Stack1`: is the only stack to store new elements when adding a new element into the queue
- `Stack2`: is the only stack to pop old element out of the queue.
  - Case 1: if `Stack2` is **not empty**, then we can just pop.  - `O(1)`
  - Case 2: if `Stack2` is **empty**. we move all data from `Stack1` to `Stack2` one by one. 
    and then pop out the top element from `Stack2`   - `O(n)`

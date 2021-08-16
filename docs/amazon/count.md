## 315. Count of Smaller Numbers After Self
![](img/2021-08-16-01-52-55.png)

![](img/2021-08-16-01-56-04.png)

- note: `4(0) 1(0) 3(0) 2(0)`, 后面的0代表，比他小的后面的元素有几个

![](img/2021-08-16-02-06-24.png)

- 如果指针 `j` 在right array， 在谁小移谁的过程中，就不需要更新`()` 里的count[也就是value]
- 如果在谁小移谁的过程中，元素从左边数组得来的，那么就要给`()` 里的value 更新为：`val + j`

```ruby
Left = 1(0)  4(1)
        i
Right = 2(0)  3(1)
         j
solu = {}   


Left = 1(0)  4(1)
               i
Right = 2(0)  3(1)
         j
solu = {1(0 + j)}   


Left = 1(0)  4(1)
               i
Right = 2(0)  3(1)
               j
solu = {1(0),  2(0)}


Left = 1(0)  4(1)
               i
Right = 2(0)  3(1)
                    j
solu = {1(0),  2(0),  3(1)}


Left = 1(0)  4(1)
               i
Right = 2(0)  3(1)
                    j
solu = {1(0),  2(0),  3(1), 4(1 + j = 3)}


solu = {1(0),  2(0),  3(1), 4(3)}
```
## 322. Coin Change
![](img/2023-01-30-15-51-48.png)

- [video](https://www.youtube.com/watch?v=H9bfqozjoqs&t=206s)

```ruby
coins[1, 3, 4, 5]               Amount = 7


                                    [1, 3, 4, 5]
           1/                 3/               4\                   5\
           {6}                {4}               {3}                 {2}
       1/  3|  4\   5\                                       1/     3/    4\      5\
      {5}  {3}  {2}  {1}                                   {1}    {-1}   {-2}     {-3}
                      1|                                  1/
                      {0}                                {0} 


MinCoin = 3

#####################################################################################


                            [1, 3, 4, 5]
    1/                 3/               4\                        5\
    {6}                {4}               {3}                       {2}
                1/   3|  4\   5\                        1/     3/    4\      5\
               {5}  {3}   {0}  {1}                    {1}    {-1}   {-2}   {-3}
                                                     1/
                                                    {0} 

MinCoin = 2
```



![](img/2023-01-30-16-00-17.png)

- note: this is a repeated branch, so we need to cut


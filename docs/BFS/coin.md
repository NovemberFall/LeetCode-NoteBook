## 322. Coin Change
![](img/2022-09-28-20-27-25.png)

```ruby
coins[1, 2, 3], target = 7
queue[1,2,3 | 2,3,4,3,4,5,4,5,6 | ]

                                            0
                        /                   |                    \
                        1                   2                     3
                  /     |    \        /     |    \          /     |       \
                2       3      4      3     4       5       4     5        6
            /  |  \  /  |  \  / | \  / | \  / |\   / | \    /| \  / | \   /| \ 
           3   4  5  4  5  6  5 6 7  4 5 6  5 6 7  6 7 8   5 6 7  6 7 8  7 8  9
```

- 可以看出出现了很多个面值为 `7`, `level = 3`， 所以答案是`3`, 但这样做的结果: `Time Limit Exceeded`

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount < 1) return 0;
        
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        int level = 0;
        while (!queue.isEmpty()) {
            level++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int base = queue.poll();
                for (int coin : coins) {
                    int value = base + coin;
                    if (value == amount) {
                        return level;
                    } else if (value > amount) {
                        continue;
                    } else {
                        queue.offer(value);
                    }
                }
            }
        }
        return -1;
    }
}
```
---

- 所以我们需要剪枝！

```java

```
## 122. Best Time to Buy and Sell Stock II
![](img/2023-03-30-17-08-27.png)
---

![](img/2023-03-31-00-48-56.png)

- we just need to `add` every **increase of the stock price**
- 可以看到只要每一次是递增就加到profit里，如果是decrease的，就不需要操作

![](img/2023-03-31-00-54-08.png)

- 如果从`1`到`5` 是递增的，则可以把每一段间距加起来

---
```java
class bestTimeToBuyAndSellStock {
    public int maxProfit(int[] prices) {
        int profit = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
}
```
---


## DP

- for each day
  - either 1. hold a share
  - or     2. not hold a share 

![](img/2023-03-31-23-35-13.png)

---
```java
class bestTimeToBuyAndSellStock_II_dp {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length == 0) return 0;

        int[] hold = new int[prices.length];
        int[] unhold = new int[prices.length];
        hold[0] = -prices[0];
        unhold[0] = 0;
        
        for (int i = 1; i < prices.length; i++) {
            hold[i] = Math.max(hold[i - 1], unhold[i - 1] - prices[i]);
            unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]);
        }
        return unhold[prices.length - 1];
    }
}
```
## 875. Koko Eating Bananas
![](img/2023-09-25-11-13-49.png)
---
### Binary Search

- [My prefered ANS](https://leetcode.com/problems/koko-eating-bananas/solutions/152506/binary-search-java-python-with-explanations/#:~:text=Binary%20Search%20Java%20/%20Python%20with%20Explanations)

- [A very-very well detailed explanation](https://leetcode.com/problems/koko-eating-bananas/discuss/1703687/JavaC%2B%2B-A-very-very-well-detailed-explanation#:~:text=A%20very%2Dvery%20well%20detailed%20explanation)

- This java solution didn't pass all the test. Need to change the `hours` to `long` type in canEatAll method in order to pass some 
  edge cases


```java
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = self.getMaxPile(piles)
        while left < right:
            mid = (left + right) >> 1
            if self.canEatAllBananas(piles, mid, h):
                right = mid
            else:
                left = mid + 1
        return right

    def getMaxPile(self, piles):
        max_pile = float('-inf')
        for pile in piles:
            max_pile = max(max_pile, pile)
        return max_pile

    def canEatAllBananas(self, piles, speed, H):
        hours = 0
        for pile in piles:
            hours += (pile // speed)
            if pile % speed != 0:
                hours += 1
        return hours <= H
```

---
### Brute Force

![](img/2023-09-25-11-17-07.png)

```java
class KokoEatingBananas_bruteForce {
    public int minEatingSpeed(int[] piles, int h) {
        int speed = 1;

        while (true) {
            int hours = 0;
            for (int pile : piles) {
                hours += pile / speed;

                if (pile % speed != 0) {
                    hours++;
                }
            }
            if (hours <= h) {
                break;
            }
            speed++;
        }
        return speed;
    }
}
```
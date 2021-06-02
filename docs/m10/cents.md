## Combinations Of Coins

```ruby
Given a number of different denominations of coins (e.g., 1 cent, 5 cents, 10 cents, 25 cents), 
get all the possible ways to pay a target number of cents.


Arguments

coins - an array of positive integers representing the different denominations of coins, 
there are no duplicate numbers and the numbers are sorted by descending order, 
eg. {25, 10, 5, 2, 1}

target - a non-negative integer representing the target number of cents, eg. 99


Assumptions:

coins is not null and is not empty, all the numbers in coins are positive
target >= 0
You have infinite number of coins for each of the denominations, 
you can pick any number of the coins.


Return

a list of ways of combinations of coins to sum up to be target.
each way of combinations is represented by list of integer, 
the number at each index means the number of coins used for the denomination 
at corresponding index.



Examples:

coins = {2, 1}, target = 4, the return should be

[

  [0, 4],   (4 cents can be conducted by 0 * 2 cents + 4 * 1 cents)

  [1, 2],   (4 cents can be conducted by 1 * 2 cents + 2 * 1 cents)

  [2, 0]    (4 cents can be conducted by 2 * 2 cents + 0 * 1 cents)

]

```

---

- what does it store on each level?
  - 4 levels, and for each level, we consider one coin value
- How many different states should we try to put on this level?

```ruby
level 0:                                   root(99)

                    /                 |             |                   \
level1(25 cent)  0*25(remain=99)   1*25(rem=74)   2*25(rem=49)   3*25(rem=24)

                    / ||| ||||| \                      /|||\  
level2(10 cent)  0*10(rem=99),... 9*10(rem=9)      0*10(rem=49)...4*10(rem=9)


level3(5 cent)  0*5(rem=99), ... 19*5(rem=4)


level4(1 cent)   0*1(99), 1*1(98), 2*1(97)...99*1(rem=0)


 Summary: 一共四层， 每一层按最后一层做多叉出来99个叉的upper bound计算，就是 99 * 99 * 99 * 99

 Because there are 4 levels, and each level has AT MOST 99 branches.

 Time = O(99^4)
 Space = O(4), height
```

---

```java
public class Solution {
  public List<List<Integer>> combinations(int target, int[] coins) {
    // Write your solution here
    List<List<Integer>> res = new ArrayList<>();
    List<Integer> cur = new ArrayList<>();
    int index = 0;
    findCombination(target, coins, index, cur, res);
    return res;
  }

  private void findCombination(int moneyLeft, int[]coins, int index, 
    List<Integer> cur, List<List<Integer>> res) {
    if (index == coins.length - 1) {
      if (moneyLeft % coins[coins.length - 1] == 0) {
          cur.add(moneyLeft / coins[coins.length - 1]);
          res.add(new ArrayList<>(cur));
          cur.remove(cur.size() - 1);
      }
      return;
    }

    int max = moneyLeft / coins[index];
    for (int i = 0; i <= max; i++) {
      cur.add(i);
      findCombination(moneyLeft - i * coins[index], coins, index+1, cur, res);
      cur.remove(cur.size() - 1);
    }
  }
}
```

- 2nd way:

```java
public class Solution {
  public List<List<Integer>> combinations(int target, int[] coins) {
    // Write your solution here
    List<List<Integer>> res = new ArrayList<>();
    List<Integer> cur = new ArrayList<>();
    findCombination(target, coins, 0, cur, res);
    return res;
  }

  private void findCombination(int moneyLeft, int[]coins, int index, 
    List<Integer> cur, List<List<Integer>> res) {
    
    if (index == coins.length) {
      if (moneyLeft == 0) {
        res.add(new ArrayList<>(cur));
      }
      return;
    } 

    int max = moneyLeft / coins[index];
    for (int i = 0; i <= max; i++) {
      cur.add(i);
      findCombination(moneyLeft - i * coins[index], coins, index+1, cur, res);
      cur.remove(cur.size() - 1);
    }
  }
}

```



---

### Reference:

- `int[] coin = {25, 10, 5, 1};`
- `int[] sol = {3, 2, 0, 4};`

```java

void findCombination(int[] coin, int moneyLeft=99, int index, int[] sol) {
    if (index == 3) {
        sol[index] = moneyLeft;
        //print solution 
        return;
    }

    // money value on this level == coin[index]
    // int coinValue = coin[index];

    // i represents how many coins of this value has been chosen
    for (int i = 0; i <= moneyLeft / coin[index]; i++) {
        sol[index] = i;
        findCombination(coin, moneyLeft - i * coin[index], index + 1, sol);
    }
}
```

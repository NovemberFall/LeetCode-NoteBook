# Recursion Tree II

![](img/2020-06-25-13-28-05.png)

- T(n) = 3T(n/4) + cn^2

- Base case: T(1), 最后一层全是 T(1) node

- The longest path from root to leaf is:
  - $$m/4 + n/4^2 + n/4^3 + ... + n/4^i $$ 
  - since the last level is T(1) ...
  - $$n/4^i = 1$$
  - $$4^i = n$$
  - $$i = log_4n$$
  - thus, the height is $$log_4n$$
  - the last level is $$long_4n + 1$$

---
## Another example

![](img/2020-06-25-13-43-32.png)

![](img/2020-06-25-13-44-49.png)


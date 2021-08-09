## 45. Jump Game II
![](img/2021-08-09-12-33-57.png)

![](img/2021-08-09-14-53-01.png)

- Induction rule:
  - M[i], represents the min. numbers of jumps from the i-th element to the last element.
  - M[i] = min(M[j]) + 1 , where `i < j <= i + A[i]`


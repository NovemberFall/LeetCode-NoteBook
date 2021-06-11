## 143. Reorder List

![](img/2021-06-11-01-09-57.png)

solution:
N1 -> N2 -> N3 -> N4 -> N5 -> N6 -> Null (convert to)
(N1 -> Nn) -> (N2 -> Nn-1) ...

- Step 1: Find the middle node of the linkedList
  and split it into two halves

- Step 2: Reverse the 2nd half
  2nd half: N6 -> N5 -> N4

- Step 3: merge 
  dummy -> N1 -> N6 -> N2 -> N5 -> N3 -> N4 -> Null



## 1068. Product Sales Analysis I
![](img/2023-11-07-16-20-44.png)
![](img/2023-11-07-16-20-56.png)

```sql
# Write your MySQL query statement below
SELECT
P.product_name, S.year, S.price
FROM Sales S LEFT JOIN Product P 
ON S.product_id = P.product_id;
```
## 1757. Recyclable and Low Fat Products
![](img/2023-07-09-01-31-12.png)

```sql
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y'
```
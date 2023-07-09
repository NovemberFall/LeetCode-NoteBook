## 595. Big Countries
![](img/2023-07-09-01-23-13.png)

```sql
# Write your MySQL query statement below
SELECT name, population, area 
FROM world
WHERE area >= 3000000 OR population >= 25000000
```
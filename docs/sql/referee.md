## 584. Find Customer Referee
![](img/2023-07-09-13-34-51.png)

```sql
# Write your MySQL query statement below
SELECT name 
FROM Customer
WHERE referee_id != 2 OR referee_id is null
```
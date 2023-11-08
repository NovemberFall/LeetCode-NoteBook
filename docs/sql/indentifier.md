## 1378. Replace Employee ID With The Unique Identifier
![](img/2023-11-07-15-40-38.png)
![](img/2023-11-07-16-17-20.png)

---

```sql
# Write your MySQL query statement below
SELECT 
EmployeeUNI.unique_id, Employees.name
FROM Employees LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id
```
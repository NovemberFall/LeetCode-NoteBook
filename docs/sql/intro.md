- [SQL Constraints](https://www.w3schools.com/sql/sql_constraints.asp)
  - `UNIQUE` - Ensures that all values in a column are different
  - `PRIMARY KEY` - [A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table](https://www.w3schools.com/sql/sql_primarykey.asp)
  - `FOREIGN KEY` - [Prevents actions that would destroy links between tables](https://www.w3schools.com/sql/sql_foreignkey.asp)
  - `CREATE INDEX` - [Used to create and retrieve data from the database very quickly](https://www.w3schools.com/sql/sql_create_index.asp)


- [SQL Relationship](https://leetcode.com/explore/learn/card/sql-language/684/sql-relationship/4337/)
  - [JOIN](https://leetcode.com/explore/learn/card/sql-language/684/sql-relationship/4337/#:~:text=What%20You%20Will,need%20through%20JOIN.) 
    - When using `JOIN`, the first thing we are familiar with is `LEFT JOIN`, which can be imagined as 
      **treating the table on the left side of the statement as the main table, and the other table as the attached table**. When using the 
      JOIN related syntax, all columns from both tables are displayed. However, if any the specific record of main table does not include 
      any attached table records, the values of the columns in the attached table will be set to NULL.

  
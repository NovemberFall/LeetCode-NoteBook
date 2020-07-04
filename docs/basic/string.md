# String | StringBuffer | StringBuilder

### Mutability Difference:

- `String` is immutable, if you try to alter their values, another object gets created, 
   whereas(然而，鉴于) `StringBuilder` and `StringBuilder` are mutable so they can change their
   values.

### Thread-Safety Difference

- The difference between `StringBuffer` and `StringBuilder` is that `StringBuffer` is 
  thread-safe. So when the application needs to be run only in a single thread then it is better to use `StringBuilder`. `StringBuilder` is more efficient than `StringBuffer`.

### Situations

- If your stirng is not going to change use a `String` class because a `String` object is
  immutable.
- If your stirng can change(example: lots of logic and operatins in the construction of the
  stirng) and will only be accessed from a single thread, using a `StringBuilder` is good enough
- If your stirng can change, and will be accessed from multiple threads, use a `StringBuffer` 
  because `StringBuffer` is synchronous so you have thread-safety.


- [reference to stackflow](https://stackoverflow.com/questions/2971315/string-stringbuffer-and-stringbuilder)
---

![](img/2020-07-04-16-19-39.png)

```java
----------------------------------------------------------------------------------
                  String                    StringBuffer         StringBuilder
----------------------------------------------------------------------------------                 
Storage Area | Constant String Pool         Heap                   Heap 
Modifiable   |  No (immutable)              Yes( mutable )         Yes( mutable )
Thread Safe  |      Yes                     Yes                     No
 Performance |     Fast                 Very slow                  Fast
----------------------------------------------------------------------------------
```

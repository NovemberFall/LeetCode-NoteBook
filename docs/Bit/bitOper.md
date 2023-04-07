## Bit Operation

---

### & operator

- The `&` operator is a bitwise `AND` operator in Java. It performs a bitwise `AND` operation between two operands, 
  which are usually **integers** or **boolean** values.

- The bitwise `AND` operation returns a value that has a `1` in each bit position where **both operands have a 1**, 
  and **a 0 everywhere else**. Here's an example:


```java
int a = 0b1010;   // decimal 10
int b = 0b1100;   // decimal 12
int c = a & b;    // c = 0b1000, which is decimal 8
```

- The bitwise `AND` operation takes the following steps:
  - The binary representation of `a` is `1010`.
  - The binary representation of `b` is `1100`.
  - The bitwise AND of `a` and `b` is `1000`, which is the binary representation of `8` in decimal.

---

### | operator

- In bitwise operations, the `|` operator is the bitwise **OR** operator. The resulting value has a `1 bit` in each position 
  where **at least one** of the corresponding bits in the operands is `1`. The resulting value has a `0` bit in each 
  position where **both corresponding bits in the operands are 0**.

```java
    1 0 1 0
 |  0 1 1 0
-------------
    1 1 1 0  
```

- In Java, the bitwise `OR` operator is denoted by the `|` symbol, and **it can be used on any integer type**, 
  including `int`, `long`, `short`, `char`, and `byte`.

---


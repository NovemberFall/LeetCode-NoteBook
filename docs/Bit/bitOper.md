## Bit Operation

---

### & operator

- The `&` operator is a bitwise `AND` operator in Java. It performs a bitwise `AND` operation between two operands, 
  which are usually **integers** or **boolean** values.

- The bitwise `AND` operation returns a value that has a **1** in each bit position where **both operands have a 1**, 
  and **a 0 everywhere else**. Here's an example:


```java
    0101 (decimal 5)
  & 0011 (decimal 3)
  ------
    0001 (decimal 1)



    1100 (decimal 12)
  & 1010 (decimal 10)
  ------
    1000 (decimal 8)
```

- The bitwise `AND` operation takes the following steps:
  - The binary representation of `a` is `1010`.
  - The binary representation of `b` is `1100`.
  - The bitwise AND of `a` and `b` is `1000`, which is the binary representation of `8` in decimal.

---

### | operator

- In bitwise operations, the `|` operator is the bitwise **OR** operator. The resulting value has a `1 bit` in each position 
  where **at least one** of the corresponding bits in the operands is **1**. The resulting value has a `0` bit in each 
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


### XOR `^` operator

- In Java, the `^` symbol is used as the bitwise **XOR** operator.
- The bitwise `XOR` operator compares the corresponding bits of two operands and returns a result 
  where **each bit is set to 1 if and only if the two bits being compared are different**.


```java
int a = 5;       // binary 0101
int b = 3;       // binary 0011
int c = a ^ b;   // binary 0110, or decimal 6

        0 1 0 1
XOR     0 0 1 1 
------------------
        0 1 1 0



int x = 0b10101010;    // binary 10101010, or decimal 170
int y = 0b11001100;    // binary 11001100, or decimal 204
int z = x ^ y;         // binary 01100110, or decimal 102
```

---


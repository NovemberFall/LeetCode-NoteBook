# Recursion Tree

### 需要掌握的知识点

1) 表象上： function calls itself

2) 实质上: Boil down a big problem to smaller ones (size n depends on size n - 1,
   or n-2 or ... n/2)

3) Implementation:

        1. Base case: smalleset problem to solve

        2. Recursive/Induction rule. How to make the problem smaller (if we can resolve 
           the same problem but with a smaller size, 
           then what is left to do for the current problem size n)
        

# 三步思考法：
        1. define subproblem
        2. find recursion rule
        3. define base case


### Ex 1: Fibonacci sequence: 

- https://en.wikipedia.org/wiki/Fibonacci_number



![](img/2020-04-02-22-18-48.png)
![](img/2020-04-02-22-19-05.png)

![](img/2020-04-02-22-19-37.png)
![](img/2020-04-02-22-20-10.png)
![](img/2020-04-02-22-21-14.png)
![](img/2020-04-02-22-21-28.png)

---

### don't use recursion, using o(n)

![](img/2020-04-02-22-22-16.png)

```java
1 + 2 + 4 + 8 + ... + 2^(n - 1) = (2 ^ n) - 1
```


- for Space: 
  1. stack 上， only two local variable O(1)
  2. heap 上， 并没有创造 new 对象， 所以 为 0

---


### Ex 2: Power

![](img/2020-04-02-22-25-55.png)
![](img/2020-04-02-22-26-34.png)

![](img/2020-04-02-22-27-44.png)
![](img/2020-04-02-22-27-57.png)

![](img/2020-04-02-22-28-13.png)

![](img/2020-04-02-22-28-31.png)
![](img/2020-04-02-22-28-49.png)

![](img/2020-04-02-22-29-07.png)


### Note some key points:

![](img/2020-04-02-22-29-38.png)



![](img/2020-04-02-22-30-11.png)
![](img/2020-04-02-22-30-24.png)


![](img/2020-04-02-22-30-48.png)




### Recursion codes:

![](img/2020-04-02-22-31-26.png)
![](img/2020-04-02-22-31-42.png)


### attachment

![](img/2020-04-02-22-36-25.png)

![](img/2020-04-02-22-36-43.png)
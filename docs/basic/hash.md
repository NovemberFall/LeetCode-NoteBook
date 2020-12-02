## HashTable && String I

1. <key, value> pairs, not allow duplicate keys
   - **fast search, insert/update, romove**

2. principle <key = string/int/obj ...,  value = obj, string, int ...> e.g. <string, int>

```
Example:
    key=string      value=int
    <tom,           1>
    <john,          2>
    <jerry,         5>
```


3. Hash table is a general data structure
    - HashMap and HashSet are its implementation classes in Java.
    - 在Java, **HashMap** 就是hast table, 只不过在java里，它的名字叫 `HashMap`, 既关心key, 也关心value.
    - 如果只关心key, 不关心value, 就是 **HashSet**


```cpp
//c++
std::unordered_map<string, int> votes;  
votes[name]++;
```

4. c++ 最早是没有HashTable, 所以后来当它在2011年引入的时候已经太晚了，都被其他语言申请了各种标准，所以只能用 `std::unordered_map<string, int>`


---

##Q1 

- [Top K Frequent Words](https://novemberfall.github.io/LeetCode-NoteBook/#/m7/topKfreq)


---

##Q2

- [Missing Number | Solution 2](https://novemberfall.github.io/LeetCode-NoteBook/#/ch7/misssingNum)

```
Given an integer array of size N - 1, containing all the numbers from 1 to N except one, find the missing number.

Assumptions

The given array is not null, and N >= 1
Examples

A = {2, 1, 4}, the missing number is 3
A = {1, 2, 3}, the missing number is 4
A = {}, the missing number is 1
```

Solution 1: Math
Step 1:  `1 + 2 + 3 + 4 + 5 + ... + n` = totalSum  => `n (n + 1) / 2`
Step 2:  calculate the sum of the array => arraySum
Step 3:  missing number = totalSum - arraySum

1 + 2 + 3 + 4 = 10
3 + 1 + 4 = 8
10 - 8 = 2

Pos: time = O(n)     space = O(1)
Cons: might be overflow,    [if n is too big]



Solution 2: HashSet
Step 1: insert all numbers in the array to a hash set:
        hash set: {3, 1, 4}
Step 2: for each number from 1 to n, find whether it is in the hashtable        
Time = O(n) in average and O(n^2) in worst case
Space: O(n)




Solution 3: 
Array: boolean occurred[n+1]
occurred[i] 表示 i 有没有出现在input array

Step 1:
occurred = [F, F, ..., F]
```
for each number (x) in the input array:
        occurred[x] = true;
```

Step 2:
```
for i = 1; i <=n; i++
        if occurred[i] = false;
            return i;
```

n = 4
 0   1   2   3   4
[F,  T,  F,  T,  T]

Time = O(n)
Space = O(n)

---

Solution 4: **XOR**

- **This operator is binary operator, denoted by ‘^’. It returns bit by bit XOR of input values, i.e, if corresponding bits are different, it gives 1, else it gives 0.**


```
5 = 0101
6 = 0110

A xor A = 0
0 xor A = A
A xor B == B xor A
A xor (B xor C) == (A xor B) xor C




(1 xor 2 xor 3 xor ... xor n) xor (a[0] xor a[1] xor ... xor a[n - 1])

(1 xor 2 xor 3 xor 4) xor (3 xor 1 xor 4) = 
1 xor 2 xor 3 xor 4 xor 3 xor 1 xor 4 = 
(1 xor 1) xor 2 xor (3 xor 3) xor (4 xor 4) = 
0 xor 2 xor 0 xor 0 = 2
```





```
A = [3, 1, 4]
3 xor 1 xor 4  => res1
1 xor 2 xor 3 xor 4  => res2

res1 xor res2  => missing number
```

Pros: time = O(n)  space = O(1)
Cons: none

- [java code implementation](https://novemberfall.github.io/LeetCode-NoteBook/#/Bit/miss)
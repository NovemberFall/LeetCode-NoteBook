## 146. LRU Cache

![](img/2020-12-21-01-40-10.png)

---

### from oldest (least recently used) to newest (most recently used)

---

Step1 : 

```ruby
Q1      A1     
Q2      A2      #  如果<Q2  A2>   被访问 => 就放到列表的最后一栏
Q3      A3
...

Q5000   A5000
Q5001   A5001
```


Step 2 :

```ruby
Q1      A1     # 现在把least recently used, 删除

Q3      A3
...

Q5000   A5000
Q5001   A5001
Q2      A2      #  当<Q2  A2> 访问过后 => 现在放到列表的最后一栏
```


Step 3:

```ruby

Q3      A3    # 现在把least recently used, 删除
...

Q5000   A5000
Q5001   A5001
Q2      A2 
Q5002   A5002     
```

---

Use case

1. find the answer of an existing question => HashTable
2. insert a <question, answer> pair
3. delete the oldest question
4. move the recently used question to the end of the list


(array 不行), linkedlist, bst (logN), heap (logN), hashTable (unorder)

![](img/2020-12-21-02-17-43.png)

<key -> Q, Value -> Pair>,  Pair<A, listNode>

HashTable

Q4 => <A4, ListNode>
Q5 => <A5, ListNode>

![](img/2020-12-21-02-31-49.png)

- 但是现在，有一个问题， `<Q4 A4> => <Q5, A5>`, 

---

- 所以到这里我们需要一个 double linkedlist

![](img/2020-12-21-02-35-42.png)





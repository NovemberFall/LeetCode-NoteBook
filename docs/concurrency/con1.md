## Concurrency vs Parallel

- `Concurrency(并发)`: multiple tasks run **simultaneously**. Semantic concept, the “time” here 
  may be an abstract concept. You can’t tell who is first, who is second. You can’t tell the order 
  in general.

- Example: Friends eating together, two people leaving office at the same time, etc…
  In Java program: maybe a before b, maybe b before a, maybe same time---- I don’t know the order.

```java
for (Map.Entry<Integer, Integer> entry : map.entrySet()) { 
    // 1. Iterate the Map
   if (entry.getKey() != 2) {
       map.remove(entry.getKey()); // 2. Modify the map content
   }
}

ConcurrentModificationException
```


- 逻辑层面
- `Parallel(并行)`: multiple tasks **physically** run simultaneously. Implementation level concept
  In real time, there are at least two executors.
  Example: multilane(多车道) higway, multicore machines, hadoop clusters, ... 

![](img/2021-07-24-00-50-54.png)
![](img/2021-07-24-00-51-04.png)

---

## Multi-process vs. Multi-thread

![](img/2021-07-24-00-54-27.png)

---

### Java Thread

- What is Thread in Java? How can we create threads and control their behaviors?
  In Java, everything is an OBJECT, so is Thread! If you need to create new threads helping you make
  your program concurrently, you have to 
  - create the threads objects
  - tell the threads what you want them to do
  - start the thread

![](img/2021-07-24-10-28-47.png)
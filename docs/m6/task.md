## 621. Task Scheduler
![](img/2023-11-30-15-33-35.png)
![](img/2023-11-30-15-33-48.png)
---

-  the cooldown period between two same tasks (the same letter in the array)

![](img/2024-03-28-20-51-09.png)

- It's better to **process the more frequent character**

- let's say we do `B` first:

![](img/2024-03-28-20-56-34.png)

- we notice the **second line** is the **minimize the idle time** rather than first one

- since **A** is the most frequent

![](img/2024-03-28-23-03-05.png)

![](img/2024-03-28-23-04-46.png)

![](img/2024-03-28-23-10-05.png)

- but, when we have two **maxCount**, such as `AAA BBB CC ...`

![](img/2024-03-28-23-14-14.png)

![](img/2024-03-28-23-18-39.png)

---

```java
class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] freq = new int[26];
        
        int maxCount = 0;
        int maxCountSame = 0;
        int res = 0;
        for (char task : tasks) {
            freq[task - 'A']++;
        }
        
        for (int num : freq) {
            if (num > maxCount) {
                maxCount = num;
                maxCountSame = 1;
            } else if (num > 0 & num == maxCount) {
                maxCountSame++;
            }
        }
        
        res = (n + 1) * (maxCount - 1) + maxCountSame;
        return Math.max(res, tasks.length);
    }
}

```
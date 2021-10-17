## yield

![](img/2021-10-16-23-02-21.png)

```java
// yield 不一定成功，看cpu心情
public class ThreadYield {
    public static void main(String[] args) {
        MyYield myYield = new MyYield();

        new Thread(myYield, "A").start();
        new Thread(myYield, "B").start();
    }
}

class MyYield implements Runnable {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() +  " Thread Start");
        Thread.yield();
        System.out.println(Thread.currentThread().getName() + " Thread Stop");
    }
}
```

![](img/2021-10-16-23-12-17.png)
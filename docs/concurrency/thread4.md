## 线程池 Thread Pool

![](img/2021-10-18-12-54-17.png)

![](img/2021-10-18-12-55-36.png)

- 1. 创建服务，渐渐线程池：

```java
public class TestThreadPool {
    public static void main(String[] args) {
        //1. 创建服务，创建线程池
        //newFixedThreadPool 参数为：线程池大小
        ExecutorService service = Executors.newFixedThreadPool(10);

        //执行
        service.execute(new MyThread());
        service.execute(new MyThread());
        service.execute(new MyThread());
        service.execute(new MyThread());

        //2. 关闭链接
        service.shutdown();
    }

    private static class MyThread implements Runnable {
        @Override
        public void run() {
            System.out.println(Thread.currentThread().getName());
        }
    }

}
```

![](img/2021-10-18-13-02-57.png)


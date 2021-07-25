## Garbage Collection

![](img/2021-07-24-16-42-39.png)

![](img/2021-07-24-16-47-33.png)
![](img/2021-07-24-16-47-59.png)

```java
public static void main(String[] args) {
    String name = "garbage collection";
    printHello(name);
    // .. a lot of operations afterwards
}

public void static printHello(String name) {
    String message = "Greeting from " + name;
    System.out.println(message);
    //...
}
```
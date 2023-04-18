# Object| Java Pass by Value

- [Java passing objects by value](https://stackoverflow.com/questions/7893492/is-java-really-passing-objects-by-value)



## 以下是pass by value和pass by reference的区别:

- java passes the object reference 'by value'. When an object is passed as
  argument to a method, actually the reference to that object is passed. 
  The formal parameter is a mapping of the reference to the actual.


```java
public static void foo1(int diff) {
	diff = 2;
}

public static void foo2(int[] diff) {
	diff[0] = 2;
}

public static void main(String[] args) {
	int a = 0;
	int[] b = {0};
	foo1(a);
	foo2(b);
	System.out.println(a);
	System.out.println(b[0]);
}

```
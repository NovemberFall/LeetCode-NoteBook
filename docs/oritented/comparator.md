## The Comparator Interface Type

- use any sort order by supplying an object that implements the Comparator interface type.

- The Comparator<T> interface type requires one method:

```java
int compare(T first , T second)
```

- Similar to the Comparable interface type, the Comparator interface type is also **generic**

- For example, to compare `Country` objects, you would use an object of a class that implements the 
  `Comparator<Country>` interface type.

---

- If `comp` is an object of a class that implements the Comparator interface type, then:

```java
Collections.sort(list, comp)
```

---

## Anonymous Classes

- Consider again the call to the sort method of the preceding section:

```java
Comparator<Country> comp = new CountryComparatorByName();
Collections.sort(countries , comp);
```

- There is actually no need to explicitly name the `comp` object. 
  You can pass an **anonymous object** to the `sort` method since you only need it once.


```java
Collections.sort(countries, new CountryComparatorByName());
```

---

- If you look at your own programs, you will find that you often use anonymous values of type int or String 













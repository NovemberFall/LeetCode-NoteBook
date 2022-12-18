## Google | Onsite | Merge K Sorted Iterators
- Given a list of `k sorted iterators`. Implement MergingIterator to merge them. 
  If you are not familiar with Iterators check similar questions.

```java
class MergingIterator implements Iterator<Integer> {
	public MergingIterator(List<Iterator<Integer>> iterators) {
	}

	public boolean hasNext() {
	}

	public Integer next() {
	}
}

///////////////////////////
Example:

MergingIterator itr = new MergingIterator([[2, 5, 9], [], [4, 10]]);
itr.hasNext(); // true
itr.next(); // 2
itr.next(); // 4
itr.next(); // 5
itr.next(); // 9
itr.next(); // 10
itr.hasNext(); // false
itr.next(); // error
```


---
- Time: 
  - next() : `O(logk)`
  - hasNext() : `O(1)`

```java

```

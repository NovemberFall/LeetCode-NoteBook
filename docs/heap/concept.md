# 1. Heap in Java

## PriorityQueue

- It is a **heap** with the same **Queue** interface with `offer()`,`peek()`,`poll()`
- But, it is not `FIFO`, when `poll()` or `peek()` we always look at the smallest/largest
  element (minHeap/maxHeap)

## Time Complexity:

- offer(E e)   ->  O(logn)
- peek()   ->  O(1)
- poll()   ->  O(logn)
- size()   ->  O(1)
- isEmpty()   ->  O(1)

---


- Order - **The PriorityQueue needs to know how to compare the elements and**
  **determine which one is smallest/largest**

- There are two ways to do so:

- <u>The element type implements Comparable interface</u>


- How does the priorityqueue know how to compare the Integer objects?

- The element's class can implement Comparable interface and thus implement the required 
  method compareTo(), PriorityQueue will use this method to compare any two elements.

```java
interface Comparable<E>{
    int compareTo(E ele);
}

class Integer implements Comparable<Integer>{
    private int value;

    public Integer(int value){
        this.value = value;
    }

    @Override
    public int compareTo(Integer another){
        if(this.value == another.value){
            return 0;
        }
        return this.value < another.value ? -1 : 1;
    }
}

1.compareTo(5);    // -> -1
```

## Another Example using custom class:

- Suppose you have an integer matrix, each row is sorted by ascending order and each column
  is also sorted by ascending order, we need a class to represent each cell in the matrix,
  and we need to compare two cells with their value in the matrix.

```java
class Cell{
    public int row;
    public int col;
    public int value;
    public Cell(int row, int col, int value){
        this.row = row;
        this.col = col;
        this.value = value;
    }
}


//We want to have a minHeap by the value of the Cell elements.
PriorityQueue<Cell> minHeap = new PriorityQueue<Cell>();
    Cell c1 = new Cell(0, 0, 0);
    Cell c2 = new Cell(0, 1, 2);
    minHeap.offer(c1);
    minHeap.offer(c2);

```
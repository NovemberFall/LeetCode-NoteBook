## 704. Classical Binary Search

- [704. Classical Binary Search](https://novemberfall.github.io/LeetCode-NoteBook/#/Array/classicalBinarySearch)

```java
public class classical {
    
    public static int binarySearch(int[] array, int target){
        if(array == null || array.length == 0){
            return -1;
        }
        int left = 0;
        int right = array.length - 1;
        while(left <= right){   //cannot : left < right
            int mid = left + (right - left) / 2;
            if(array[mid] == target){
                return mid;
            }else if(array[mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;//cannot : left = mid
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] a ={1, 2, 4, 5, 7, 8, 9};
        int targetIndex = binarySearch(a, 4);
        System.out.println(targetIndex);
    }
}
```

---

- 注意：如果`binarySerach`, 找的是具体的**target**, 那么：
```java
    while (left <= right) {
        ...
        ...
        left = mid + 1;

        right = mid - 1;
    }
```


- 注意：如果`binarySerach`, 找的是具体的**范围**, 那么：
```java
    while (left < right - 1) {
        ...
        ...
        left = mid;

        right = mid;
    }
```
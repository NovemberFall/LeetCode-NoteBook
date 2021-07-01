## m8: Remove Certain Characters

- Remove given characters in input string, the relative order of other characters should
  be remained. 
- Return the new string after deletion.

- Assumptions:
  The given input string is not null.
  The characters to be removed is given by another string, it is guaranteed to be not null.

- Examples
  input = "abcd", t = "ab", delete all instances of 'a' and 'b', the result is "cd"

---

![](img/2021-06-27-16-44-55.png)
![](img/2021-06-27-16-45-12.png)

---

## My method: two points

![](img/2021-06-30-20-08-59.png)



```java
public class Solution {
  public String remove(String input, String t) {
    // Write your solution here
    char[] arr = input.toCharArray();
    Set<Character> set = new HashSet<>();
    set = buildSet(t);

    int slow = 0;
    for(int fast = 0; fast < arr.length; fast++){
      if(!set.contains(arr[fast])){
        arr[slow++] = arr[fast];
      }
    }
    return new String(arr, 0, slow);
  }

  private Set<Character> buildSet(String t){
    Set<Character> set = new HashSet<>();
    char[] temp = t.toCharArray();
    for(Character c : temp){
      set.add(c);  
    }
    return set;
  }
}
```
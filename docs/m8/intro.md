## String | Regular Expression

### replaceAll()

- what does `str.replaceAll("[^a-zA-Z]", "")` do?
  - The `replaceAll("[^a-zA-Z]", "")` method uses a **regular expression** to replace all characters in the input string that 
    are **not alphabetic with an empty string**. The regular expression `[^a-zA-Z]` **matches any character that is not a letter** 
    (upper or lowercase) in the English alphabet.


```java
class replaceAll_method {
    public static void main(String[] args) {
        String s = "A man, 153a plan, a 44canal: Panama";
        String lettersOnly = s.replaceAll("[^a-zA-Z]", "");
        System.out.println(lettersOnly); // Output: AmanaplanacanalPanama
    }
}
```

---

### split()

- what does `s.split("[^a-zA-Z]")` mean?
  - in Java, s.split("[^a-zA-Z]") is a method call that splits a string s into an array of substrings using a regular expression 
    pattern `[^a-zA-Z]`.
  - The regular expression `[^a-zA-Z]` matches any character that is not a letter between A-Z or a-z. This means that the method 
    call will split the input string s into substrings wherever it finds a non-letter character.  


```java
public class split_method {
    public static void main(String[] args) {
        String s = "A man, a plan, a canal: Panama";
        String[] words = s.split("[^a-zA-Z]");

        // Join the alphabetic characters back into a string
        String result = String.join("", words);
        System.out.println(result);// AmanaplanacanalPanama
    }
}
```

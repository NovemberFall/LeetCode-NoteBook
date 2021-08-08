## Nested Anagrams

- Given two sentences `s` and `t`, your task is to check whether they are nested anagrams, i.e. if
  it is possible to rearrange the words in the sentence and the letters in the words themselves such 
  that the sentences become the same. Note that is's not allowed to swap letters in different words, 
  you can only rearrange the whole words within the sentence and rearrange the letters within a 
  single word.

- Example:
  - `s = "bored cat"` and `t = "act robed"`, the output should be `nestedAnagrams(s, t) = true`.
  - `s = "aa bb"` and `t = "ab ab"`, the output should be `nestedAnagrams(s, t) = false`.


---

```java
public class nestedAnagrams {

    public static boolean nestedAnagrams(String string1, String string2){

        if (string1.length() != string2.length()) {
            return false;
        }

        String[] strArr1 = string1.split(" ");
        Map<String, Integer> freqMap = getFreqMap(strArr1);

        String[] strArr2 = string2.split(" ");

        Map<String, Integer> freqMap2 = getFreqMap(strArr2);

        return freqMap.equals(freqMap2);
    }

    public static Map<String, Integer> getFreqMap(String[] words){
        Map<String, Integer> freqMap = new HashMap<>();
        for (String s : words) {
            char[] charArr = s.toCharArray();
            Arrays.sort(charArr);
            String tmp = String.valueOf(charArr);
            Integer val = freqMap.get(tmp);
            if (val == null) {
                freqMap.put(tmp, 1);
            } else {
                freqMap.put(tmp, val + 1);
            }
        }
        return freqMap;
    }

    public static void main(String[] args) {
        boolean test1 = nestedAnagrams("bored cat", "act robed");
        System.out.println(test1);

        boolean test2 = nestedAnagrams("ab ba", "aa bb");
        System.out.println(test2);

        boolean test3 = nestedAnagrams("bored cat bored", "act robed");
        System.out.println(test3);
    }
}
```
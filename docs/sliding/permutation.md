## 567. Permutation in String
![](img/2023-09-02-00-39-39.png)

- [官方中文解释](https://leetcode.cn/problems/permutation-in-string/solutions/599202/zi-fu-chuan-de-pai-lie-by-leetcode-solut-7k7u/#:~:text=4%2B-,%E6%96%B9%E6%B3%95%E4%B8%80%EF%BC%9A%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3,%E5%B0%B1%E5%A4%9A%E7%BB%9F%E8%AE%A1%E4%B8%80%E6%AC%A1%E8%BF%9B%E5%85%A5%E7%AA%97%E5%8F%A3%E7%9A%84%E5%AD%97%E7%AC%A6%EF%BC%8C%E5%B0%91%E7%BB%9F%E8%AE%A1%E4%B8%80%E6%AC%A1,-%E7%A6%BB%E5%BC%80%E7%AA%97%E5%8F%A3%E7%9A%84)

---

```java
class _567_PermutationInString {
    public boolean checkInclusion(String s1, String s2) {
        int len1 = s1.length(), len2 = s2.length();
        if (len1 > len2) {
            return false;
        }

        int[] count1 = new int[26];
        int[] count2 = new int[26];
        for (int i = 0; i < len1; i++) {
            count1[s1.charAt(i) - 'a']++;
            count2[s2.charAt(i) - 'a']++;
        }
        if (Arrays.equals(count1, count2)) {
            return true;
        }

        for (int i = len1; i < len2; i++) {
            count2[s2.charAt(i) - 'a']++;
            count2[s2.charAt(i - len1) - 'a']--;
            if (Arrays.equals(count1, count2)) {
                return true;
            }
        }
        return false;
    }
}
```
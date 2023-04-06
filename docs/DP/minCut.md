## 132. Palindrome Partitioning II | Minimum Cuts For Palindromes
![](img/2023-04-06-09-59-30.png)
---

```ruby
Given a string, a partitioning of the string is a palindrome partitioning 
if every substring of the partition is a palindrome. 
Determine the fewest cuts needed for a palindrome partitioning of a given string.

Assumptions

The given string is not null
Examples

“a | babbbab | bab | aba” is a palindrome partitioning of “ababbbabbababa”.

The minimum number of cuts needed is 3.
```

---
### Analysis:


Assumption:
1. if there is only one character in this string, it is a palindrome and doesn't need to cut
2. if this string is empty, it doesn't need to cut, return 0


Approach:

- "minimum cuts" -> from all  the possible ways
- cut a string into every smaller substring, I can search history dictionay
- Linear Scan search on previous data
	- dp[i] = min cuts for substring[0, i]
	- induction rule:
		- dp[i] =
			- case 1: if substring[0,1] is palindrome, dp[i] = 0
			- case 2: min(dp[i - 1]) + 1      for j from 1 to i ,   AND substring[i, j] is palindrome 
	- base case: dp[0] = 0, we don't need to cut, 
	- this dp[] array record all palindrome substring's possible ways
	   - return dp[n - 1]

Additional data structures:

- need to convert this string to char Array


- Time = O(n^3),      
  - two for loop n^2 * isPalindrome() while loop,   =>  n^2 * n = n^3








```java
class Solution {
    public int minCut(String s) {
        if(s == null || s.equals("")){
            return 0;
        }
        int n = s.length();
        char[] arr = s.toCharArray();
        int[] dp = new int[n];
        dp[0] = 0;
        for(int i = 1; i < n; i++){
            //case 1:
            if(isPalindrome(arr, 0, i)){
                continue;
            }
            //case 2:
            dp[i] = i; //worst case, we may need i cut for (i + 1) long array
            for(int j = 1; j <= i; j++){
                if(isPalindrome(arr, j, i)){
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                }
            }
        }
        return dp[n - 1];
    }
    private boolean isPalindrome(char[] arr, int start, int end){
        int i = start;
        int j = end;
        while(i <= j){
            if(arr[i] != arr[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
```



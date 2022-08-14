## 273. Integer to English Words
![](img/2021-08-22-12-19-52.png)

- 1. 先把数字以3个为一个单位分成若干小组
  - 123，456，789，012，345 => 1000

- 2. 在每个小组里单独处理三位数
  - 1) special case: 0 ... 19
  - 2) general double digit: (20 - 99)
  - 3) 3-digit number: (百位以上的数 + 后面两位)
    - 345 => 3 + "Hundred" + 4 + 5
    - 10...12, 13 ... 19
    - 0 - 9

---

```java
class Solution {
    public String numberToWords(int num) {
        if(num==0)  return "Zero";
        return helper(num);
    }
    
    public String helper(int num) {
        String[] words = new String[] {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine","Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", 
        "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
        
        StringBuilder res = new StringBuilder();
        
        if(num>=1000000000) {
            res.append(helper(num/1000000000)).append(" Billion ");
            num %= 1000000000;
        }
        if(num>=1000000) {
            res.append(helper(num/1000000)).append(" Million ");
            num%=1000000;
        }
        if(num>=1000) {
            res.append(helper(num/1000)).append(" Thousand ");
            num%=1000;
        }
        if(num>=100) {
            res.append(helper(num/100)).append(" Hundred ");
            num %= 100;
        }
        if(num>=20) res.append(words[(num-20)/10+20]).append(" ")
                              .append(words[num%10]);
        else res.append(words[num]);
        
        return res.toString().trim();
    }
}
```



---

```java
class Solution {
    
  private final String[] ones = {"", "One", "Two", 
    "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", 
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    
  private final String[] tens = {"", "Ten", "Twenty", "Thirty", 
    "Forty", "Fifty","Sixty", "Seventy", "Eighty", "Ninety"};  
  
    public String numberToWords(int num) {
        if (num == 0) {
            return "Zero";
        }
        
        return helper(num).trim();
    }
    
    private String helper(int num) {
        if (num >= 1000000000) {
            return helper(num/1000000000)+" Billion "+helper(num % 1000000000);
        } 
        if (num >= 1000000) {
            return helper(num / 1000000) + " Million " + helper(num % 1000000);
        } 
        if (num >= 1000) {
            return helper(num / 1000) + " Thousand " + helper(num % 1000);
        } 
        if (num >= 100) {
          return (helper(num / 100) + " Hundred " + helper(num % 100)).trim();
        } 
        if (num >= 20) {
            return (tens[num / 10] + " " + helper(num % 10)).trim();
        }     
        return ones[num];
    }
}
```
## 151. Reverse Words in a String

![](img/2021-07-05-01-59-14.png)

- 具体分析见： Remove Spaces && Reverse Words in a String II

---

```java
class Solution {
    public String reverseWords(String s) {
        if (s == null || s.length() == 0) {
            return s;
        }
        String cleanStr = removeBeginEndSpace(s);
        char[] arr = cleanStr.toCharArray();
        int left = 0; 
        int right = arr.length - 1;
        
        //reverse the whole sentence
        reverse(arr, left, right);
        
        int start = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != ' ' && (i == 0 || arr[i - 1] == ' ')) {
                start = i;
            }
            if (arr[i] != ' ' && (i == right || arr[i+1] == ' ')) {
                //reverse every word
                reverse(arr, start, i); 
            }
        }
        return new String(arr);
        
    }
    
    // remove the leading, tailing space, duplicate space
    private String removeBeginEndSpace(String str) {
        char[] arr = str.toCharArray();
        int slow = 0;
        for(int fast = 0; fast < arr.length; fast++){
            if(arr[fast] == ' ' && (fast == 0 || arr[fast - 1] == ' ')){
                continue;
            }
            arr[slow++] = arr[fast];
        }
        if(slow > 0 && arr[slow - 1] == ' '){
            slow--;
        }//为什么需要post process, => 查看remove spaces这题        
        return new String(arr, 0, slow);
    }
    
    private void reverse(char[] arr, int left, int right){
        while (left < right) {
            char tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }
    }
}
```
---

### Final modified Version

- `arr = list(" ".join(s.strip().split()))`

![](img/2025-04-13-23-51-31.png)


```py
class Solution:
    def reverseWords(self, s: str) -> str:
        arr = list(" ".join(s.strip().split()))
        self.reverse(arr, 0, len(arr) - 1)
        print(arr)
        i = 0
        begin, end = 0, 0
        while i < len(arr):
            if i == len(arr) - 1 or arr[i + 1] == " ":
                end = i
                self.reverse(arr, begin, end)
                begin = i + 2
            i += 1
        return "".join(arr)

    
    def reverse(self, arr, left, right):
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
```
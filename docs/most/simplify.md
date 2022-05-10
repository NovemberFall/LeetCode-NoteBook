## 71. Simplify Path
![](img/2022-05-09-09-32-06.png)
![](img/2022-05-09-09-32-17.png)

 - Alright, so let's understand this problem with an example :-

- Let's understand what this mean's, so basically this seems like you a path of your 
  folder, so generically we use this kind of command's in terminal. I hope u know a 
  bit about that. Anyway's let's move further on.
  - okay, so the first command `/a/` means get into the folder `/a/`
  - The next command is `/./` means stay over there
  - The next command is `/b/` means get into the folder `/b/`
  - The next command is `/../` means come out from the folder `/b/`
  - The next command is `/../` means come out from the folder `/a/`
  - Now we are kind of in home directory
  - The next command is `/c/` means get into the folder `/c/`
  - And in the output we return what command we left with.

- Let's understand it a bit visually.
  - Going to `/a/./b/`

![](img/2022-05-09-09-36-34.png)
![](img/2022-05-09-09-36-46.png)

- So, basically what are we doing:-
  **Pushing** and **Popping** directory names based on rules

- And what are the rules :-
  1. **/..** come out from the directory
  2. **/nameOfDirectory** going into directory

- We'll solve this problem using Stack.
  - Alright, back to the problem - So, what we can do is by 
    looking at the rules, split the directrory by the slash`/` given 
    and that will give us in the form of array e.g : `[a, ., b, .., .., c]`

- But remeber when returning we have to go in the form of **reverse order**. 
  Because Stack use **LIFO** order.

- Time Complexity :- `O(N)`
- Space Complexity :- `O(N)`

```java
class Solution {
    public String simplifyPath(String path) {
        if (path == null || path.length() == 0) return "/";
        
        String [] dirs = path.split("/");
        Deque<String> stack = new ArrayDeque();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < dirs.length; i++) {
            if (dirs[i].equals(".")) {
                continue;
            }
            if (!dirs[i].equals("") && !dirs[i].equals("..")) {
                stack.push(dirs[i]);
            } else if (!stack.isEmpty() && dirs[i].equals("..")) {
                stack.pop();
            }
        }
        if (stack.isEmpty()) {
            return "/";
        } 
        while (!stack.isEmpty()) {
            sb.insert(0, stack.pop()).insert(0, "/");
        }        
        return sb.toString();
    }
}
```
##  Recruiting Event Schedules | Interview

```ruby
Our company is organizing a series of university recruiting events. 
Each day, we host an event at one university, 
but sometimes we want to take a break for one day before moving on to the next university.



Given a sequence of universities, print all possible schedules of the recruiting events.



Input: a string of universities. Each university is represented as a single capital letter.

Output: all possible schedules. A lowercase letter “x” means we take a break.



Example

Input: String = “ABC”

Output:

ABC

ABxC

AxBC

AxBxC
```
---


## Analysis

```ruby
Clarification: We can take a break after ecah event, we use 'x' to represent

Assumption:
there is no space(empty) in the string,
The input string is not null and has length >= 1
There are N universitites to visit


- describe my algorithm:
  - data structure
- implementation


Approach:
high level => DFS
using DFS to implemnt this algorithm to enumerate all the possibilites

mid level
    key points
  	  1. how many levels? 4 levels
	  2. what do we do at each level? what are the branches?
	    - before the character
	      - add 'x'
		  - don't add 'x'
      3. base case :  index == unversities.length() - 1
					


e.g. ABC
						""
				  /            \
				A              Ax
			/     \         /      \
		   AB	  ABx      AxB     AxBx
		   |       |       |          |
		   ABC    ABxC    AxBC    AxBxC





**additional data structure**:
- StringBuilder, because we need to hold the recursion state is same
- stringbuilder should append `stirng.lengt() - 1`
- stringbuilder should remove because recursion have to keep same state
```


- time = O(2^n * n) => O(n) for creating the strings
- space = O(n)


```java
public class recruitingEventSchedule {
    public List<String> permutation(String input) {
        List<String> result = new ArrayList<String>();
        if (input == null) {
            return result;
        }
        StringBuilder sb = new StringBuilder();
        dfs(input, 0, sb, result);
        return result;
    }

    private void dfs(String input, int index, StringBuilder sb, List<String> result) {
        if (index == input.length() - 1) {
            sb.append(input.charAt(index)); //ABxC
            result.add(sb.toString());     // "ABC", ABxC
            sb.deleteCharAt(sb.length() - 1);    // "AB"
            return;
        }
        int length = sb.length(); // 1
        //case 1
        sb.append(input.charAt(index)); //AB
        dfs(input, index + 1, sb, result); //index = 1

        //case 2
        sb.append('x'); //Ax
        dfs(input, index + 1, sb, result); //index = 1
        sb.setLength(length); //A
    }

    public static void main(String[] args) {
        recruitingEventSchedule res = new recruitingEventSchedule();
        List<String> list = res.permutation("ABC");
        System.out.println(list);
    }
}

/*
Test:
input: "ABC"
		                    ""
				       /         \
				    A              Ax
				/     \         /      \
			   AB	   ABx    AxB     AxBx
			 |        |       |          |
		    ABC     ABxC     AxBC     AxBxC
*/
```



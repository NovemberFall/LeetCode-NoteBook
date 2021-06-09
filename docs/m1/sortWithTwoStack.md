## Sort With 2 Stacks

```ruby
Given an array that is initially stored in one stack, 
sort it with one additional stacks (total 2 stacks).

After sorting the original stack should contain the sorted integers and 
from top to bottom the integers are sorted in ascending order.

Assumptions:

The given stack is not null.
There can be duplicated numbers in the give stack.


Requirements:
No additional memory, time complexity = O(n ^ 2).
```



## Analysis:

```ruby
stack1: output | input        [1 3 2 4]
stack2: buffer                [       ]   curMin = 1, globalMin_count = 1


stack1: output | input        [       ]
stack2: buffer                [4 2 3 1]   curMin = 1, globalMin_count = 1


stack1: output | input        [3 2 4]
stack2: buffer                [| 1]       curMin = 1, globalMin_count = 0







stack1: output | input        [3 2 4]
stack2: buffer                [ 1 ]        curMin = 2, globalMin_count = 1


stack1: output | input        [       ]
stack2: buffer                [4 2 3 1]    curMin = 2, globalMin_count = 1


stack1: output | input        [3 4]
stack2: buffer                [ | 2 1]     curMin = 2, globalMin_count = 0









stack1: output | input        [3 4]
stack2: buffer                [2 1]         curMin = 3, globalMin_count = 1


stack1: output | input        [       ]
stack2: buffer                [3 4 2 1]     curMin = 3, globalMin_count = 1


stack1: output | input        [4]
stack2: buffer                [ | 3 2 1]    curMin = 3, globalMin_count = 0








stack1: output | input        [4]
stack2: buffer                [3 2 1]       curMin = 4, globalMin_count = 1


stack1: output | input        [       ]
stack2: buffer                [4  | 3 2 1]  curMin = 4, globalMin_count = 1


stack1: output | input        [ ]
stack2: buffer                [ | 4 3 2 1]  curMin = 4, globalMin_count = 0





Final:

stack1: output | input        [1 2 3 4 ]
stack2: buffer                [ ]              



stack1 的物理意义是当作 input && output
stack2 的物理意义是当作 buffer 
cout 的物理意义是 用来计算重复的最小的那个元素有几个：
    if 当前最小的元素 是  5， 并且有 4 个 5， [5 5 5 5],  count++
    otherwise count = 1

Time = O(n ^ 2)
```



```java
public class sortWithTwoStacks {
    public void sort(LinkedList<Integer> s1) {
        if (s1 == null || s1.size() <= 1) {
            return;
        }
        LinkedList<Integer> s2 = new LinkedList<>();
        sort(s1, s2);
    }

    private void sort(Deque<Integer> input, Deque<Integer> buffer) {
        //Method 1:
        //input: unsorted elements
        //buffer: (top part) buffer, (bottom part) sorted elements
        //step 1: sort in ascending order and store result in buffer
        while (!input.isEmpty()) {
            int curMin = Integer.MAX_VALUE;
            int count = 0;
            while (!input.isEmpty()) {
                int cur = input.pollFirst();
                if (cur < curMin) {
                    curMin = cur;
                    count = 1;
                } else if (cur == curMin) {//注意这一步，如果cur == curMin, 
                    count++;             //那么count就算有多少个当前最小元素
                }
                buffer.offerFirst(cur);//把所有input内的element 倒腾进 buffer
            }
            
            //buffer.peekFirst() >= curMin, 如果有之前的元素是比 curMin 小，那就不需要，
            //再倒腾回 input 里， 已经排好序的元素就留在buffer里， buffer[  |  1]
            while (!buffer.isEmpty() && buffer.peekFirst() >= curMin) {
                int tmp = buffer.pollFirst();
                if (tmp != curMin) {
                    input.offerFirst(tmp);
                }
            }

            while (count > 0) {// 检测 globalMin_count 有多少个，是否有重复的当前最小元素
                buffer.offerFirst(curMin);//如果有，就把他们依次push进buffer
                count--;                //e.g. buffer[ | 1 1 1 1 1]
            }
        }

        //step 2: move result from buffer to input, so it's in descending order
        while (!buffer.isEmpty()) {
            input.offerFirst(buffer.pollFirst());
        }

    }

    public static void main(String[] args) {
        sortWithTwoStacks swts = new sortWithTwoStacks();
        LinkedList<Integer> temp = new LinkedList<>(Arrays.asList(1, 9, 5, 6, 3, 2));
        swts.sort(temp);
        System.out.println(temp);
    }
}
```
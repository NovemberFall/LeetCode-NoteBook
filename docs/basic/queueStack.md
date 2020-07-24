# Queue | Stack

- Stack 的移动操作有什么常见特性？
  - 将 Stack1 所有的元素全部 move 到 stack2, 元素在 stack2 的顺序完全 reverse
  - 将 stack1 所有的元素 move 到 stack2, 然后元素全部（或者部分）move 回 stack1,
    则回到原来 stack1 的元素的顺序不变，amortized 的时间复杂度 分摊 到每一个 move
    的元素的时间往往可以变为 O(1)


### Question 1 : Sort With 2 Stacks

- [Sort With 2 Stacks](https://novemberfall.github.io/LeetCode-NoteBook/#/m1/sortWithTwoStack)





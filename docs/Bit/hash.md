## Why does Java use (hash & 0x7FFFFFFF) % tab.length to decide the index of a key?

- [(hash & 0x7FFFFFFF) % tab.length](https://stackoverflow.com/questions/9380670/why-does-java-use-hash-0x7fffffff-tab-length-to-decide-the-index-of-a-key)

- [Why there is difference in HashMap and Hastable method of put?](https://stackoverflow.com/questions/20236074/why-there-is-difference-in-hashmap-and-hastable-method-of-put)


---

- What is `0x7FFFFFFF` in binary? It's `01111111 11111111 11111111 11111111`
  - Note that the `leftmost bit` is `0`. That means that the number is **always positive** (Since the 
    `leftmost bit` is zero). Because of the `&`, every number that'll be `&`-ed with this binary will be **non-negative** since:

```ruby
01111111111111111111111111111111
Anything                          &
--------------------------------
0 ← Always
```

- After this, the `%` operator is used to ensure that we are in the range of `table.length`.

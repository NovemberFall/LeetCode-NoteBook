## 269. Alien Dictionary
![](img/2021-08-26-00-22-35.png)

- First, build a degree map for each character in all the words:

```ruby
w:0
r:0
t:0
f:0
e:0
```

- Then build the hashmap by comparing the adjacent words, the first character that 
  is different between two adjacent words reflect the lexicographical order. For example:

```ruby
"wrt",
"wrf",
# first different character is 3rd letter, so t comes before f

"wrf",
"er",
# first different character is 1rd letter, so w comes before e
```

- The characters in set come after the key. x->y means letter x comes before letter y. 
  x -> set: y,z,t,w means x comes before all the letters in the set. 
  The final HashMap "map" looks like.

```java
t -> set: f    
w -> set: e
r -> set: t
e -> set: r
```

- and final HashMap "degree" looks like, the number means "how many letters come before
  the key":

```ruby
w:0
r:1
t:1
f:1
e:1
```


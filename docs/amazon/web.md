## 1152. Analyze User Website Visit Pattern

- [题目](https://leetcode.com/problems/analyze-user-website-visit-pattern/)

![](img/2021-01-30-00-01-16.png)
---




```java
/*
    map<user_name, List<websites>>
    map<3-sequence, Set<user_name>>
    O(N * M^3)
*/

class Pair {
    int time;
    String web;
    public Pair(int time, String web) {
        this.time = time;
        this.web = web;
    }
}
class Solution {
    public List<String> mostVisitedPattern(String[] username, int[] timestamp, String[] website) {
        Map<String, List<Pair>> map = new HashMap<>();
        int n = username.length;
        // collect the website info for every user, key: username, value: (timestamp, website)
        for (int i = 0; i < n; i++) {
            map.putIfAbsent(username[i], new ArrayList<>());
            map.get(username[i]).add(new Pair(timestamp[i], website[i]));
        }
        // count map to record every 3 combination occuring time for the different user.
        Map<String, Integer> count = new HashMap<>();
        String res = "";
        for (String key : map.keySet()) {
            Set<String> set = new HashSet<>();
            // this set is to avoid visit the same 3-seq in one user
            List<Pair> list = map.get(key);
            Collections.sort(list, (a, b)->(a.time - b.time)); // sort by time
            // brutal force O(N ^ 3)
            for (int i = 0; i < list.size(); i++) {
                for (int j = i + 1; j < list.size(); j++) {
                    for (int k = j + 1; k < list.size(); k++) {
                        String str = list.get(i).web + " " +list.get(j).web + " "+list.get(k).web;
                        if (!set.contains(str)) {
                            count.put(str, count.getOrDefault(str, 0) + 1);
                            set.add(str);
                        }
                        if (res.equals("") || count.get(res) < count.get(str) || 
                                (count.get(res) == count.get(str) && res.compareTo(str) > 0)) {
                            // make sure the right lexi order
                            res = str;
                        }
                    }
                }
            }
        }
        // grab the right answer
        String[] r = res.split(" ");
        List<String> result = new ArrayList<>();
        for (String str : r) {
            result.add(str);
        }
        return result;
    }
}
```

---
---

```ruby
Understand it with 2 examples:
1) Input:
username = ["joe"," joe", "joe", "james","james","james","james","mary", "mary","mary"],
timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
website = ["home","about","career","home", "cart", "maps", "home", "home","about","career"]


Output: ["home","about","career"]

Explanation:
The 3-sequence ("home", "about", "career") was visited by 2 users: joe and mary
james visited 4 websites: "home", "cart",  "maps", "home"
there are 4 possible 3-sequences as:
The 3-sequence ("home", "cart", "maps") 
The 3-sequence ("home", "cart", "home")  
The 3-sequence ("home", "maps", "home") 
The 3-sequence ("cart", "maps", "home")  
each one is visited by one user, james only.


2) Input:
  ["u1","u1","u1","u2","u2","u2"]
  [ 1,   2,   3,   4,   5,   6]
  ["a", "b", "a", "a", "b", "c"]
  Output:  ["a"," b", "a"]
  
  Explanation:
     ["a"," b", "a"] was visited by 1 user: u1
     ["a", "b", "c"] was visited by 1 user: u2

   The lexicographically smallest is  ["a"," b", "a"]
```

- To solve this problem is to find a three-page sequence that has the most number of users who
  have gone through this. 

---

```java
class Solution {
    /*
        map<username, List<visit>>
        map<3-sequence, Set<username>>
        O(n * M^3)
    */
    
    static class Visit{
        private int timestamp;
        private String website;
        public Visit(int time, String web) {
            timestamp = time;
            website = web;            
        }
    }
    
    private Map<String, List<Visit>> getUserVisit(String[] username, int[] timestamp, String[] website) {
        // collect the website info for every user, key: username, value: (timestamp, website)
        Map<String, List<Visit>> userVisited = new HashMap<>();
        for (int i = 0; i < username.length; i++) {
            if (!userVisited.containsKey(username[i])) {
                userVisited.put(username[i], new ArrayList<>());
            }
            userVisited.get(username[i]).add(new Visit(timestamp[i], website[i]));
        }
        for (String tempUsername : userVisited.keySet()) {
            List<Visit> visits = userVisited.get(tempUsername);
            Collections.sort(visits, (visit1, visit2) -> (
               visit1.timestamp - visit2.timestamp
            ));
        }
        return userVisited;
    }
    
    public List<String> mostVisitedPattern(String[] username, int[] timestamp, String[] website) {
        Map<String, List<Visit>> userVisits = getUserVisit(username, timestamp, website);
        Map<String, Set<String>> sequenceUser = new HashMap<>();
        for (String tempUsername : userVisits.keySet()) {
            List<Visit> visits = userVisits.get(tempUsername);
            
            for (int i = 0; i < visits.size() - 2; i++) {
                for (int j = i + 1; j < visits.size() - 1; j++) {
                    for (int k = j + 1; k < visits.size(); k++) {
                        String sequence = visits.get(i).website + "->" + visits.get(j).website + "->"
                            + visits.get(k).website;
                        if (!sequenceUser.containsKey(sequence)) {
                            sequenceUser.put(sequence, new HashSet<>());
                        }
                        sequenceUser.get(sequence).add(tempUsername);
                    } 
                }
            }
        }
        
        int maxFrequence = 0;
        String mostSequence = "";
        for (String sequence : sequenceUser.keySet()) {
            if (sequenceUser.get(sequence).size() == maxFrequence) {
                if (mostSequence.compareTo(sequence) > 0) {
                    mostSequence = sequence;
                }
            } else if (sequenceUser.get(sequence).size() > maxFrequence) {
                maxFrequence = sequenceUser.get(sequence).size();
                mostSequence = sequence;
            }
        }
        
        List<String> res = new ArrayList<>();
        for (String web : mostSequence.split("->")) {
            res.add(web);
        }
        return res;
    }
}
```
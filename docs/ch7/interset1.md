## 350. Intersection of Two Arrays II

- Given two integer arrays `nums1` and `nums2`, return an array of their intersection. 
  Each element in the result must appear as many times as it shows in both arrays and you 
  may return the result in any order.


```ruby
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

### analysis

- see #349

- use two hashMap

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> countA = new HashMap<>();
        HashMap<Integer, Integer> countB = new HashMap<>();   
        
        for (Integer num : nums1) {
            Integer cur = countA.get(num);
            if (cur != null) {
                countA.put(num, cur + 1);
            } else {
                countA.put(num, 1);
            }
        }
        
        for (Integer num : nums2) {
            Integer cur = countB.get(num);
            if (cur != null) {
                countB.put(num, cur + 1);
            } else {
                countB.put(num, 1);
            }
        }
        
        List<Integer> temp = new ArrayList<Integer>();
        for (Map.Entry<Integer, Integer> entry : countA.entrySet()) {
            Integer ctInB = countB.get(entry.getKey());
            if (ctInB != null) {
                int appear = Math.min(entry.getValue(), ctInB);
                for (int i = 0; i < appear; i++) {
                    temp.add(entry.getKey());
                }
            }
        }
        int[] res = new int[temp.size()];
        
        for (int i = 0; i < temp.size(); i++) {
            res[i] = temp.get(i);
        }
        return res;
    }
}
```

---

### 双指针，谁小移谁

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        List<Integer> temp = new ArrayList<>();
        int i = 0;
        int j = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                temp.add(nums1[i]);
                i++;
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }
        
        int [] res = new int[temp.size()];
        for (int k = 0; k < res.length; k++) {
            res[k] = temp.get(k);
        }
        return res;
    }
}
```
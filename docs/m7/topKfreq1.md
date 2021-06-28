## 347. Top K Frequent Elements

- Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. 
  You may return the answer in **any order**.

![](img/2021-06-26-03-57-26.png)

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return null;
        }
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<>(k, 
            new Comparator<Map.Entry<Integer, Integer>>(){
                @Override
                public int compare(Map.Entry<Integer, Integer> e1, 
                Map.Entry<Integer, Integer> e2){
                    if (e1.getValue() == e2.getValue()) {
                        return 0;
                    }
                    return e1.getValue() < e2.getValue() ? -1 : 1;
                }                                         
        });
        HashMap<Integer, Integer> freqMap = getFreqMap(nums);
        
        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        int [] res = new int[k];
        for (int i = 0; i < res.length; i++) {
            res[i] = minHeap.poll().getKey();
        }
        return res;
    }
    
    private HashMap<Integer, Integer> getFreqMap(int[] nums){
        HashMap<Integer, Integer> map = new HashMap<>();
        for (Integer cur : nums) {
            Integer val = map.get(cur);
            if (val == null) {
                map.put(cur, 1);
            } else {
                map.put(cur, val + 1);
            }
        }
        return map;
    }
}
```
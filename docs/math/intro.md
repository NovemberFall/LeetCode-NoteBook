## Introduction

#### Prime

- 1. A prime number is greater than 1.
- 2. A prime number has no divisors other than 1 and itself.
- 3. To check if a number is prime, you only need to check divisibility up to the square root of the number.

#### `Check if current num is Prime`

```java
    public boolean checkPrime(int n) {
        // Step 1: Initialize the isPrime array
        boolean[] isPrime = new boolean[n + 1];
        Arrays.fill(isPrime, true);

        // step 2: Iterate from 2 to sqrt(n + 1)
        for (int i = 2; i * i < n + 1; i++) {
            if (isPrime[i]) {
                // Mark multiples of i as non-prime
                for (int j = i * i; j < n + 1; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return isPrime[n];
    }
```
---


---
- 32 bits
![](img/2023-03-25-13-23-14.png)



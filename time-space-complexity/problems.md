# 🧠 Big O Challenge: 20 Practice Problems

Try to determine the **Time Complexity** and **Space Complexity** for each. Answers are provided at the bottom.

## 🟢 Level 1: Beginner (The Basics)

**1. Basic Iteration**

```javascript
function printAll(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

```
Time: O(n)

Space: O(1)

**2. Array Access**

```javascript
function getElement(arr, index) {
  return arr[index];
}

```
Time: O(1)

Space: O(1)

**3. Two Independent Loops**

```javascript
function doubleLoop(n) {
  for (let i = 0; i < n; i++) { console.log(i); }
  for (let j = 0; j < n; j++) { console.log(j); }
}

```
Time: O(n)

Space: O(1)

**4. Constant Space Variable**

```javascript
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

```
Time: O(n)

Space: O(1)

**5. String Concatenation (Naively)**

```javascript
function repeatWord(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}

```
Time: O(n)

Space: O(1)

---

## 🟡 Level 2: Intermediate (Nested & Logarithmic)

**6. Nested Multiplication**

```javascript
function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i * j);
    }
  }
}

```
Time: O(n^2)

Space: O(1)

**7. Halving the Input**

```javascript
function binaryCounter(n) {
  let count = 0;
  while (n > 1) {
    n = n / 2;
    count++;
  }
  return count;
}

```
Time: O(logn)

Space: O(1)

**8. Search in Sorted Array**

```javascript
// Assume Binary Search logic
function findTarget(sortedArr, target) {
  // Logic that halves the search area every step
}

```
Time: O(logn)

Space: O(1)

**9. Triangle Pattern**

```javascript
function triangle(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      console.log("*");
    }
  }
}

```
Time: O(n^2)

Space: O(1)

**10. Space Creation**

```javascript
function makeCopy(arr) {
  let newArr = [];
  for (let item of arr) {
    newArr.push(item);
  }
  return newArr;
}

```
Time: O(n)

Space: O(n)

---

## 🟠 Level 3: Advanced (Recursion & Sorting)

**11. Linear Recursion**

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

```
Time: ?

Space: ?

**12. Fibonacci (Recursive)**

```javascript
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

```

**13. Merge Sort (Concept)**

```javascript
function mergeSort(arr) {
  // Splitting array into halves (log n)
  // Recombining them (n)
}

```
Time: log(nlogn)

Space: O(1)

**14. 2D Matrix Search**

```javascript
function findInMatrix(matrix, n) {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 5) return true;
    }
  }
}

```
Time: ?

Space: ?

**15. Object Mapping**

```javascript
function createMap(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }
  return map;
}

```
Time: ?

Space: ?

---

## 🔴 Level 4: Expert (Tricky Scenarios)

**16. Logarithmic Loop with Inner Linear Loop**

```javascript
function complex(n) {
  for (let i = 1; i < n; i *= 2) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

```
Time: O(n^2)

Space: O(1)

**17. String Permutations**

```javascript
// Function that finds every possible arrangement of a string of length n
function getPermutations(str) { ... }

```
Time: O(n)

Space: O(n)

**18. Recursive Binary Search**

```javascript
function recBinarySearch(arr, low, high, target) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  return recBinarySearch(arr, mid + 1, high, target);
}

```
Time: O(logn)

Space: O(n)

**19. Triple Nested Loop**

```javascript
function cube(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

```
Time: O(n^3)

Space: O(1)

**20. Sieve of Eratosthenes (Prime Finding)**

```javascript
function findPrimes(n) {
  let primes = new Array(n).fill(true);
  for (let p = 2; p * p <= n; p++) {
    if (primes[p]) {
      for (let i = p * p; i <= n; i += p) primes[i] = false;
    }
  }
}

```
Time: O(n^2)

Space: O(n)

---

# 🔑 Answer Key

| # | Time Complexity | Space Complexity |
| --- | --- | --- |
| 1 | **O(n)** | **O(1)** |
| 2 | **O(1)** | **O(1)** |
| 3 | **O(n)** | **O(1)** |
| 4 | **O(n)** | **O(1)** |
| 5 | **O(n)** | **O(n)** (Result string grows) |
| 6 | **O(n²)** | **O(1)** |
| 7 | **O(log n)** | **O(1)** |
| 8 | **O(log n)** | **O(1)** |
| 9 | **O(n²)** | **O(1)** |
| 10 | **O(n)** | **O(n)** |
| 11 | **O(n)** | **O(n)** (Call stack) |
| 12 | **O(2ⁿ)** | **O(n)** (Call stack) |
| 13 | **O(n log n)** | **O(n)** |
| 14 | **O(n²)** | **O(1)** |
| 15 | **O(n)** | **O(n)** |
| 16 | **O(n log n)** | **O(1)** |
| 17 | **O(n!)** | **O(n!)** |
| 18 | **O(log n)** | **O(log n)** (Call stack) |
| 19 | **O(n³)** | **O(1)** |
| 20 | **O(n log log n)** | **O(n)** |

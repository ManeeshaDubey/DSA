# Algorithm Complexity: Time and Space Complexity 🚀

This documentation provides a beginner-friendly breakdown of how we measure the efficiency of code using **Big O Notation**.

---

## 1. What is Time Complexity?

Time complexity measures how the **running time** of an algorithm increases as the size of the **input (n)** grows.

### ⚠️ The Great Myth: "Time = Seconds"

Many beginners believe Time Complexity is the actual time (in seconds) a program takes to run. This is **incorrect** because:

* **Hardware:** A supercomputer will run code faster than a 10-year-old laptop.
* **Languages:** C++ usually executes faster than Python.
* **Background Tasks:** If your computer is running other apps, the execution time might vary.

**Big O Notation** solves this by counting the **number of operations** (steps) instead of clock time.

---

## 2. Common Time Complexities

### O(1) — Constant Time

The execution time does not change, regardless of how large the input is.

* **Example:** Accessing an array element by index.
* **Code:** `return arr[5];`

### O(log n) — Logarithmic Time

The input size is halved at every step. This is extremely efficient for large datasets.

* **Example:** Binary Search.
* **Concept:** Dividing a phone book in half repeatedly until you find a name.

### O(n) — Linear Time

The time grows exactly in proportion to the input size.

* **Example:** A single `for` loop searching for a value.
* **Code:**
```javascript
for (let i = 0; i < n; i++) {
    console.log(i); // Runs n times
}

```



### O(n log n) — Linearithmic Time

Common in efficient sorting algorithms like **Merge Sort** or **Quick Sort**. It involves performing a `log n` operation `n` times.

### O(n^2) — Quadratic Time

Performance is proportional to the square of the input size. Usually involves **nested loops**.

* **Example:** Bubble Sort or comparing every item in a list to every other item.
* **Code:**
```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // Runs n * n times
    }
}

```



### O(2^n) — Exponential Time

The growth doubles with each addition to the input. This is very slow and usually seen in recursive algorithms (like calculating Fibonacci numbers naively).

### O(n!) — Factorial Time

The slowest complexity. It involves calculating every possible permutation of a set.

* **Example:** The Traveling Salesman Problem.

---

## 3. The Efficiency Hierarchy

When choosing an algorithm, aim for the left side of this scale:

![alt text](image.png)

**Excellent** → **Fair** → **Bad** → **Horrible** **O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)**

---

## 4. Space Complexity

Space complexity measures the **extra memory** an algorithm needs relative to the input size `n`.

> **Rule of Thumb:** We do not count the memory taken by the input itself; we only count the **additional** variables or data structures created.

### O(1) Space (Constant)

If you only create a few variables (like a loop counter or a sum variable), the space is constant.

```javascript
function findMax(arr) {
    let max = arr[0]; // Extra space: 1 variable
    for (let i = 0; i < arr.length; i++) { // Extra space: 1 variable
        if (arr[i] > max) max = arr[i];
    }
    return max; // Total extra space is constant: O(1)
}

```

### O(n) Space (Linear)

If you create a new array or list that grows as the input grows, the space is linear.

```javascript
function doubleArray(arr) {
    let newArray = []; // Extra space: grows with input
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2);
    }
    return newArray; // O(n) space
}

```

---

## ## Summary Table

| Complexity | Name | Speed | Example |
| --- | --- | --- | --- |
| **O(1)** | Constant | Instant | Accessing an index |
| **O(log n)** | Logarithmic | Very Fast | Binary Search |
| **O(n)** | Linear | Fast | Iterating a list |
| **O(n log n)** | Linearithmic | Good | Merge Sort |
| **O(n^2)** | Quadratic | Slow | Nested Loops |
| **O(2^n)** | Exponential | Very Slow | Recursive Fibonacci |

---
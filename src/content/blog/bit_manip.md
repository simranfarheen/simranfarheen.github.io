---
title: 'Bit Manipulation in Java'
description: 'An all-you-need-to-know article on Bit Manipulation in Java'
pubDate: 'Jan 01 2019'
---

Bit Manipulation is an important topic within competitive programming. Knowing the nitty-gritties of Bit Manipulation can help coders get a significant advantage in reducing compute time for certain operations. This article provides a brief summary the topic, detailing hacks where bit manipulation can provide a significant advantage.

## Foundations of Bit Manipulation
____

### Basic Concepts
- Bits are represented as combinations of 0s and 1s.
- In Java, integers are 32-bit (4-bytes) and long integers are 64-bit (8-bytes)
- The 32nd bit and the 64th bit in each represent the "sign" of the integer, whereas the remaining 31 and 63 bits represent the actual number.

### Bit Operators
- **& (AND)**: Returns 1 if both bits are 1
- **| (OR)**: Returns 1 if at least one bit is 1
- **^ (XOR)**: Returns 1 if exactly one bit is 1
- **~ (NOT)**: Inverts all bits
- **<< (Left shift)**: Shifts bits left, multiplies by 2^n
- **\>> (Right shift)**: Shifts bits right with sign extension, divides by 2^n
- **\>>> (Unsigned right shift)**: Shifts right with zero fill


## Coding Patterns
____

### Common Operations

#### 1. Check if ith bit is set
```boolean isSet = (num & (1 << i)) != 0;```

#### 2. Set ith bit
```num |= (1 << i);```

#### 3. Clear ith bit
```num &= ~(1 << i);```

#### 4. Toggle ith bit
```num ^= (1 << i);```

#### 5. Get lowest set bit
```int lowestBit = num & (-num);```

#### 6. Clear lowest set bit
```num &= (num - 1);```

#### 7. Count set bits
```int count = Integer.bitCount(num);```

___
### Common Patterns

#### 1. Check if power of 2
```boolean isPowerOf2 = (num & (num - 1)) == 0 && num > 0;```

#### 2. Subset generation (iterating all subsets of n elements)
```
for (int mask = 0; mask < (1 << n); mask++) {
    // Process subset represented by mask
    for (int i = 0; i < n; i++) {
        if ((mask & (1 << i)) != 0) {
        // ith element is in the subset
        }
    }
}
```

#### 3. Swapping without temp variable
```
a ^= b;
b ^= a;
a ^= b;
```

#### 4. Finding unique element in array where others appear twice
```
int unique = 0;
for (int num : array) {
unique ^= num;
}
```

#### 5. Finding unique elements in array where others appear twice
```
int xor = 0;
for (int num : array) xor ^= num;
int rightmostSetBit = xor & -xor;
int a = 0, b = 0;
for (int num : array) {
    if ((num & rightmostSetBit) != 0) a ^= num;
    else b ^= num;
}
// a and b are the unique elements
```

#### 6. Binary search using bit manipulation
```
int left = 0, right = n;
while (left < right) {
    int mid = (left + right) >> 1;
    if (check(mid)) right = mid;
    else left = mid + 1;
}
```

## Additional Concepts
___


#### XOR properties
```
a ^ a = 0
a ^ 0 = a
(a ^ b) ^ c = a ^ (b ^ c) (associative)
a ^ b = b ^ a (commutative)
```

#### Fast multiplication/division by power of 2
```
int multiplyBy2pow = num << k;  // num * 2^k
int divideBy2pow = num >> k;    // num / 2^k
```

### Built-in Methods

- **Integer.bitCount(n)**: Count set bits
- **Integer.numberOfLeadingZeros(n)**: Count leading zeros
- **Integer.numberOfTrailingZeros(n)**: Count trailing zeros
- **Integer.highestOneBit(n)**: Returns highest set bit
- **Integer.lowestOneBit(n)**: Returns lowest set bit
___
### Advanced Techniques

#### 1. Gosper's Hack (Generate all k-bit combinations)
```
int mask = (1 << k) - 1;
while (mask < (1 << n)) {
// Process the combination
int c = mask & -mask;
int r = mask + c;
mask = (((r ^ mask) >> 2) / c) | r;
}
```

#### 2. Gray code
```
int grayCode(int n) {
return n ^ (n >> 1);
}
```

#### 3. Hamming distance (count different bits)
```
int hammingDistance(int x, int y) {
return Integer.bitCount(x ^ y);
}
```

#### 4. Next permutation with same number of set bits
```
int nextPermWithSameOnes(int n) {
int c = n & -n;
int r = n + c;
return (((r ^ n) >> 2) / c) | r;
}
```
___
### Final Notes
Remember to consider integer overflow issues when working with bit manipulation in Java!




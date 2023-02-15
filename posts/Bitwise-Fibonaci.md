---
title: 'Fibonacci sequence'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Fibonacci number using bitwise operator, in solidity smart contract'
date: '2023-02-15'
socialImage: images/___.svg
article: 'bitwise'
tags:
  - 'bitwise'
  - 'solidity'
  - 'fibonaci'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/04-%20Bitwise%20Fibonaci/Fi.sol)

# FIBONACI
In mathematics, the ***Fibonacci numbers***, commonly denoted Fn , form a sequence, the **Fibonacci sequence**, in which each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the first few values in the sequence are:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.

---

## Review

- SmartContract

```solidity
function BitwiseFi(uint n) internal pure returns(uint a) { 
    if (n == 0) return 0;   
    
    uint b = 1;
    uint c;
    uint mesh = n / 2; 
    uint mask = 1;

    while(mask <= mesh) mask <<= 1;

    mask >>= 1;
    a = 1;

    while(mask > 0) {
        c = a * a + b * b;          
        if (n & mask > 0) {
            b = b * (b + 2 * a);  
            a = c;                
        } else {
            a = a * (2 * b - a);  
            b = c;                
        }
        mask >>= 1;
    }
    
    return a;
}
```

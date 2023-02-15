---
title: 'Factorial'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Factorial algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'factorial'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/09-%20Factorial/Factorial.sol)

# FACTORIAL
In mathematics, the factorial of a non-negative integer n, denoted by ! n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial:
![factorial formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb20c62aa91c3705daae002fc76b8df34db4d494)

- 1. normal solution - `function factorNType1`
- 2. iterate solution - `function factorNType2`
- 3. algorithmic solution - `function factorNType3`

### example of Number! 
- 4! = 1x2x3x4 = 24
- 5! = 5x4x3x2 = 120

! is the symbol of factorial, place after the num => 5!

---

## Review

- SmartContract

```solidity
function factorNType3(uint num) public pure returns (uint) {
    if(num == 0 || num == 1) {
        return 1;
    }

    return num * factorNType3(num-1);
}
```

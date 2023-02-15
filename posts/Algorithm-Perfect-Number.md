---
title: 'Perfect Number'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Perfect Number algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'perfect number'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/07-%20Perfect%20Number/PerfectNumber.sol)

# PERFECT NUMBER
The program intakes a number and checks if it is a perfect number or not.

A perfect number is equal to the sum of its divisors excluding itself.

### problem in solidity:
perfect number is to hard for calculate in solidity.

so, use 2 or 3 digit's nums for test.

---

## Review

- SmartContract

```solidity
function perfectNum(uint num) internal pure returns (bool s) {
    require(num != 0,"0 is not valid");
    uint sum = 0;
    uint div = 0;
    for(uint i = 1; i < num; i++) {
        div = num % i;
        if (div == 0) sum = sum + i;
    }

    sum == num ? s = true : s = false; // short if
}
```

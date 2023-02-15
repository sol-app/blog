---
title: 'Reverse Value'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Reverse value (number) algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'reverse'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/06-%20Reverse%20value/Reverse.sol)

# REVERSE VALUE
how to reverse value (uint) in simple solution.

- input: 1234
- output: 4321

---

## Review

- SmartContract

```solidity
function reverse(uint num) internal pure returns (uint result) {
    uint rev = 0;
    uint remainder;
    while (num != 0) {
        remainder = num % 10;
        rev = rev * 10 + remainder;
        num /= 10;
    }
    result = rev;
}
```

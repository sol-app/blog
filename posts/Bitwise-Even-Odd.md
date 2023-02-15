---
title: 'EVEN or Odd Number'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'EVEN or Odd using bitwise operator, in solidity smart contract'
date: '2023-02-15'
socialImage: images/___.svg
article: 'bitwise'
tags:
  - 'bitwise'
  - 'solidity'
  - 'even - odd'
---

[Source](https://github.com/mosi-sol/live-contract-s3/blob/main/23-%20Even%20Number/BitwiseEvenNumber.sol)

# IS EVEN?
- look the numbers in below, odd numbers the right number is 1.
- 0 => 0
- 1 => 1
- 2 => 10
- 3 => 11
- 4 => 100

---

- so, if `number & 1 == 1` then the number is odd.
- else the number is even.

---

## Review

- SmartContract

```solidity
function featureIsEven(uint number) internal pure returns (bool result) {
    if(number & 1 == 1) return false;
    return true;
}
```

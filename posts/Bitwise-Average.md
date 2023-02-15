---
title: 'Average Numbers'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Average numbers using bitwise operator, in solidity smart contract'
date: '2023-02-15'
socialImage: images/___.svg
article: 'bitwise'
tags:
  - 'bitwise'
  - 'solidity'
  - 'average'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/14-%20Bitwise%20Average/BitAvg.sol)

# AVERAGE
we have 2 number and need to know the average, the easy solution is `numa + numb / 2`. 

in this solution we have : `(numa & numb) + (numa ^ numb) / 2;`
- a = (numa & numb) 
- b = (numa ^ numb)
- avg = (a+b) / 2

this solution before solidity 0.8.x for overflow.

---

## Review

- SmartContract

```solidity
function average(uint x, uint y) internal pure returns (uint) {
    return (x & y) + (x ^ y) / 2;
}
```

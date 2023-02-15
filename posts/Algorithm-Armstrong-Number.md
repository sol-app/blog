---
title: 'Armstrong Number'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Armstrong Number algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'armstrong number'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/08-%20Armstrong%20Number/ArmstrongNum.sol)

# ARMSTRONG NUMBER
The program takes a number and checks if it is an Armstrong number.

An n-digit number such that the sum of each digit raised to the power n is the number itself,

is an Armstrong number.

- an armstrong number example : 153

---

## Review

- SmartContract

```solidity
function armstrong(uint num) internal pure returns (bool result) {
    uint tmp = num;
    uint cach;
    uint sum = 0;
    while(tmp != 0){
        cach = tmp % 10;
        sum = sum + cach * cach * cach;
        tmp = tmp / 10;
    }
    sum == num ? result = true : result = false; // short if
}
```

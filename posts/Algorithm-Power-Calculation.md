---
title: 'Calculate Power'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Calculate Power using recursion algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'power'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/05-%20Calculate%20Power/PowerLogic.sol)

# CALCULATION POWER
Calculate Power using recursion

the logic of Power in the simple function.

### short if explain
`powerNum != 0 ? result = baseNum * power(baseNum, powerNum - 1) : result = 1;`

### normal solution
`{ result = baseNum ** powerNum; }`

- mathematical symbol `^` , in solidity `**`

---

## Review

- SmartContract

```solidity
function power(uint baseNum, uint powerNum) internal pure returns (uint result) {
    powerNum != 0 ? result = baseNum * power(baseNum, powerNum - 1) : result = 1;
}
```

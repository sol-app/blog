---
title: 'Sum | Add'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Sum (add) using bitwise operator, in solidity smart contract'
date: '2023-02-15'
socialImage: images/___.svg
article: 'bitwise'
tags:
  - 'bitwise'
  - 'solidity'
  - 'add - sum'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/03-%20Bitwise%20Add/BitAdd.sol)

# SUM | ADD
simple use case for bitwise operator in real programming world.

`x + y = z`

---

## Review

- SmartContract

```solidity
function add(uint a, uint b) internal pure returns (uint) {
    uint c;
    while(b != 0){
        c = a & b;
        a = a ^ b;
        b = c << 1;
    }
    return a;
}

function adds(uint a, uint b) public pure returns (uint) {
    return a.add(b);
}
```

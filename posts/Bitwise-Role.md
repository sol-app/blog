---
title: 'Role Generator'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Role generator using bitwise operator, in solidity smart contract'
date: '2023-02-15'
socialImage: images/___.svg
article: 'bitwise'
tags:
  - 'bitwise'
  - 'solidity'
  - 'role'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/01-%20Bitwise%20Role/Role.sol)

# ROLE GENERATOR
another usecase for bitwise operator in solidity programming in ROLE base smartcontract's.

### what is
in this example, developer can set user role easily.

where to use, any smartcontract like CRUD dapp's.

---

## Review

- SmartContract

```solidity
uint private immutable ADMIN_ROLE;      // = tmp << 1;
uint private immutable VICE_ROLE;       // = tmp << 2;
uint private immutable MODERATOR_ROLE;  // = tmp << 3;

function shiftLeft(uint x, uint bits) internal pure returns (uint y) {
    y = x << bits;
}
```

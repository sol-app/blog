---
title: 'Role Generator'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Hash role generator using bitwise operator, in solidity smart contract'
date: '2023-02-15'
socialImage: images/___.svg
article: 'bitwise'
tags:
  - 'bitwise'
  - 'solidity'
  - 'hash-role'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/02-%20Bitwise%20Hash%20Role/Role.sol)

# HASH-ROLE GENERATOR
another usecase for bitwise operator in solidity programming in ROLE base smartcontract's.

### what is
in this example, developer can set user role easily.

where to use, any smartcontract like CRUD dapp's.

- example hashes
```json
ADMIN_ROLE:      0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace
VICE_ROLE:       0x8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b
MODERATOR_ROLE:  0xf3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3
```

---

## Review

- SmartContract

```solidity
uint private immutable ADMIN_ROLE;      // = tmp << 1;
uint private immutable VICE_ROLE;       // = tmp << 2;
uint private immutable MODERATOR_ROLE;  // = tmp << 3;

function shiftLeft(uint x, uint bits) internal pure returns (uint y) {
    uint nonce = x << bits;
    y = keccak256(abi.encodePacked(nonce));
}
```

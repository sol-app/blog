---
title: 'Cipher - Validation Method'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Cipher validation algorithm, in solidity smart contract'
date: '2023-02-16'
socialImage: images/___.svg
article: 'cipher'
tags:
  - 'algorithm'
  - 'cipher'
  - 'solidity'
  - 'compare cipher'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/19-%20Cipher%20Barbone/Barbone.sol)

# CIPHER - VALIDATION (METHOD)
basic of cryptography has been made thusands years ago in the Caves. if you have key, can decoding. \ 

## info
compare two strings by cipher(encode/encrypt) method.

---

### example
```solidity
function isValid(bytes4 pair, string memory key) public pure returns (bool) {
	bytes4 tmp = _encode(key);
	if(compare(pair, tmp)) return true;
	else return false;
}
```

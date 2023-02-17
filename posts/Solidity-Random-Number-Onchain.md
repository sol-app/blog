---
title: 'Random Number'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Random Number on-chain, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'on-chain'
tags:
  - 'algorithm'
  - 'solidity'
  - 'random number'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/23-%20Random%20Number/Randao.sol)

# RANDOM NUMBER
Solidity 0.8.18 brought a new global variable - `block.prevrandao` \
The `prevrandao` value comes from the **Beacon chain randomess generator** called **RANDAO** \
there’s no official DAO behind the process. “Only” Proof of Stake validators.\

---

## Review

`pragma solidity 0.8.18; // <-- Solidity 0.8.18 brought a new global variable - block.prevrandao. ` 

---

- example

```solidity 
pragma solidity 0.8.18; // <-- Solidity 0.8.18 brought a new global variable - block.prevrandao. 

contract RandomGen {
	function getRandomNftId() internal view returns (uint256) {
		return block.prevrandao;
	}
}
```

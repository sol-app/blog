---
title: 'Whitelist on-chain'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Solidity on-chain white list algorithms, in solidity smart contract'
date: '2023-02-16'
socialImage: images/___.svg
article: 'on-chain'
tags:
  - 'algorithm'
  - 'solidity'
  - 'white list'
---

[Source](https://github.com/mosi-sol/live-contract-s3/blob/main/20-%20Whitelist%20Ver2/Whitelist.sol)

# WHITE LIST ON-CHAIN
- no compute hash version
- bulk fail if any address add/remove before
- high performance for using in small projects
- double spending solved

### test:
- use function `claim` after add address.

### bulk add example
```json
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"]
```
- ! theses addresses for test in `remix ide` js-test servers.

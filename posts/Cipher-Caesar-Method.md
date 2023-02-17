---
title: 'Cipher - Validation Method'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Cipher caesar algorithm, in solidity smart contract'
date: '2023-02-16'
socialImage: images/___.svg
article: 'cipher'
tags:
  - 'algorithm'
  - 'cipher'
  - 'solidity'
  - 'caesar cipher'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/20-%20Caesar%20Cipher/CaesarCipher.sol)

# CIPHER - CAESAR (METHOD)
In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques.

It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

For example, with a left shift of 3, D would be replaced by A, E would become B, and so on.

The method is named after Julius Caesar, who used it in his private correspondence.

## info
data source:
```json
input: ["-","h","i","-"] 
output-> bjkb
input: ["h","e","l","l","o"] 
output-> jgnnq
```

---

### caesar
```solidity
function generate(string[] memory c) public view returns (string memory cipher) {
	return _generate(c);
}

// view key
function table(string memory key) public view returns (string memory) {
	return _T(key);
}
```

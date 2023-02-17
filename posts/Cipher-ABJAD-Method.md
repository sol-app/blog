---
title: 'Cipher - ABJAD Method'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Cipher abjad algorithm, in solidity smart contract'
date: '2023-02-16'
socialImage: images/___.svg
article: 'cipher'
tags:
  - 'algorithm'
  - 'cipher'
  - 'solidity'
  - 'abjad cipher'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/22-%20Abjad%20Cipher/Abjad.sol)

# CIPHER - ABJAD (METHOD)
ABJAD cipher method (abcd) came from iran (after war of islam in iran)...

the alphabet to the number, sum of numbers of each world make new word...

## info
data source eaxmple:
```json
["s", "o", "s"] = 260 = to
["h", "e", "l", "l", "o"] = 133 =  slc
```

Abjad cheat table:
```json
a - 1
b - 2
c - 3
d - 4
e - 5
f - 6
g - 7
h - 8
i - 9
j - 10
k - 20
l - 30
m - 40
n - 50
o - 60
p - 70
q - 80
r - 90
s - 100
t - 200
u - 300
v - 400
w - 500
x - 600
y - 700
z - 800
```

---

### example
```solidity
function T(string memory key) public view returns (uint) {
	return _T(key);
}

function sum(string[] memory value) public view returns (uint) {
	return _sum(value);
}
```

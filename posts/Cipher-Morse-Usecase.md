---
title: 'Cipher - Morse code'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Cipher algorithms, in solidity smart contract'
date: '2023-02-16'
socialImage: images/___.svg
article: 'cipher'
tags:
  - 'algorithm'
  - 'cipher'
  - 'solidity'
  - 'morse code'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/18-%20Cipher%20Morse%20Code%202/Usecase.sol)

# CIPHER - MORSE CODE (METHOD)
Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes, or dits and dahs. Morse code is named after Samuel Morse, one of the inventors of the telegraph.
![International morse code](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/260px-International_Morse_Code.svg.png)

S.O.S  example:
```json
["...","---","..."," ","...","---","..."]
["s","o","s"," ","s","o","s"]

["sos"] = ["... --- ..."]
```

## info
in this example run Test contract.
send a Letter & an Address by using sendMsg function.
receive and decode message by using the recipient address inreceiveMsg function.

---

### morse  code usecase
```solidity
function receiveMsg(bytes memory message) public view returns (string memory) {
	(string memory code, ) = dehash(message);
	return morse_to_char(code);
}

function sendMsg(string memory letter, address recipient) public pure returns (bytes memory) {
	return hash(char_to_morse(letter), recipient);
}
```

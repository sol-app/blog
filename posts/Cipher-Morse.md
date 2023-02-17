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

[Character](https://github.com/mosi-sol/live-contracts-s4/blob/main/17-%20Cipher%20Morse%20code%201/CharToMorse.sol)
[Morse](https://github.com/mosi-sol/live-contracts-s4/blob/main/17-%20Cipher%20Morse%20code%201/CharToMorse.sol)
[Word Encoder](https://github.com/mosi-sol/live-contracts-s4/blob/main/17-%20Cipher%20Morse%20code%201/CharToMorse.sol)

# CIPHER - MORSE CODE (METHOD)
Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes, or dits and dahs. Morse code is named after Samuel Morse, one of the inventors of the telegraph.
![International morse code](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/260px-International_Morse_Code.svg.png)

S.O.S  example:
```json
["...","---","..."," ","...","---","..."]
["s","o","s"," ","s","o","s"]
```

---

### character to morse 
```solidity
contract Test is Cipher {
    function morse(string memory c) public pure returns (string memory cipher) {
        return char_to_morse_code(c);
    }
}
```

### morse to character
```solidity
contract Test is Cipher {
    function morse(string memory c) public pure returns (string memory cipher) {
        return morse_to_char(c);
    }
}
```

### word method for cipher & decipher 
```solidity
// import -> https://github.com/mosi-sol/live-contracts-s4/blob/main/17-%20Cipher%20Morse%20code%201/WordEncodeDecode.sol
contract Test is WordCipher {
    function morse(string[] memory c) public pure returns (string memory cipher) {
		return _morse()(c);
	}
}
```
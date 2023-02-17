---
title: 'Cipher - Enigma Method'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Cipher enigma algorithm, in solidity smart contract'
date: '2023-02-16'
socialImage: images/___.svg
article: 'cipher'
tags:
  - 'algorithm'
  - 'cipher'
  - 'solidity'
  - 'enigma cipher'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/21-%20Enigma%20simulator/Enigma.sol)

# CIPHER - ENIGMA MACHINE (METHOD)
The Enigma machine is a cipher device developed and used in the early- to mid-20th century to protect commercial, diplomatic, and military communication. It was employed extensively by Nazi Germany during World War II, in all branches of the German military. The Enigma machine was considered so secure that it was used to encipher the most top-secret messages.

## info
data source 1:
```json
input: ["-","h","i","-"] 
output-> zfqz
input: ["h","e","l","l","o"] 
output-> f-wwb
```

data source 2:
```json
input: ["-","h","i","-"] 
output-> hkbh
input: ["h","e","l","l","o"] 
output-> kjccd
```

---

### example
```solidity
contract TestWord is Cipher {
    function unMerge(string memory _text) public pure returns (string memory) {
		bytes memory source = bytes(_text);
        uint range = bytes(_text).length;
        string memory tmp;
        bytes memory char = bytes(tmp);
        for(uint i = 0; i < range; ++i) {
            char[i] = source[i];
        }
		return string(char);
	}

    function generate(string[] memory c) public view returns (string memory cipher) {
        return _generate(c);
    }

    // view key
    function table(string memory key) public view returns (string memory) {
        return _T(key);
    }

    // change pattern
    function pattern_1() public {
        _pattern_1();
    }
    function pattern_2() public {
        _pattern_2();
    }
}
```

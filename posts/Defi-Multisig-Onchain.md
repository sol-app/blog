---
title: 'Multisig Wallet'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'on-chain multisig wallet'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - defi
  - solidity
  - multisig
---

[Source](https://github.com/mosi-sol/live-contracts-s2/blob/main/19-Multisig%20Wallet/ver_Mapping.sol)

# Multisig Wallet
- in this version i try to : 
- - working by mapping like a database.
- - save gas 

in test on remix, i use this accounts as owners
```
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"]
```
and use this account is/as recipient 
`0xdD870fA1b7C4700F2BD7f44238821C26f7392148`

---

## Review

- Init Wallets

```js
constructor(address[] memory _new, uint howMuchValidator) {
    _owner = msg.sender;
    transactionId = 0;
    _howMuchValidator = howMuchValidator;
    uint j = _new.length;
    for (uint i = 0; i < j; i++) {
        address owner = _new[i];

        require(owner != address(0), "invalid owner");
        require(!_signers[owner], "owner not unique");

        _signers[owner] = true;
        owners.push(owner);
    }
}
```

- Deposit

```js
function deposit() payable public returns (uint amount) {
    require(msg.value > 0, "why spend gas!?");
    amount = msg.value;
    _depositor[msg.sender] += amount;
    emit Deposit(msg.sender, amount, block.timestamp);
}
```

- Withdraw

```js
function withdraw(uint txId, address recipient, uint amount) private onlySigner returns (bool) {
    require(address(this).balance >= amount, "fund have not enought");
    // confirm check (_howMuchValidator)
    require(transactionId > 0 && txId > 0, "not existed transaction");
    (bool success, ) = recipient.call{value: amount}("");
    require(success, "transaction failed");
    return success;
}
```

- Submit

```js
function submit(address recipient, uint amount) public onlySigner returns (uint) {
    require(recipient != address(0), "submit failed, dont go to black hole!");
    transactionId += 1;
    _request[transactionId][recipient] = amount;
    _requestAddress[transactionId] = recipient;
    emit Submit(msg.sender, recipient, amount);
    return transactionId;
}
```

- Confirm

```js
function confirm(uint txId) public onlySigner returns (bool) {
    require(transactionId > 0 && txId > 0, "not existed transaction");
    require(!_validats[transactionId][msg.sender], "you are confirmed");
    _validats[transactionId][msg.sender] = true;
    _votes[txId] += 1;
    emit Confirm(msg.sender, _votes[txId], txId);
    if(_votes[txId] >= _howMuchValidator){
        withdraw(txId, _requestAddress[txId], _request[txId][_requestAddress[txId]]);
        emit Execute(_requestAddress[txId], txId, _request[txId][_requestAddress[txId]]);
        return true;
    }else{
        return false;
    }
}
```

- Revoke

```js
function revoke(uint txId) public onlySigner returns (bool) {
    require(transactionId > 0 && txId > 0, "not existed transaction");
    require(_validats[transactionId][msg.sender], "you are not allowed");
    _validats[transactionId][msg.sender] = false;
    unchecked {_votes[txId] -= 1;}
    emit Revoke(msg.sender, _votes[txId], txId);
    return true;
}
```


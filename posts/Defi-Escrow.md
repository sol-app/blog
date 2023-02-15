---
title: 'Escrow'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'escrow contract'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - defi
  - solidity
  - escrow
---

[Source](https://github.com/mosi-sol/live-contracts/tree/main/episode-21)

# ESCROW 

how to:

`deploy` -> `deployer deposit` -> `crew finish job` -> `deployer sending money`
- deploy contract by recuriter/customer
- run deposit by sending a value & address of services(like a programmer)
- after finishing the job by services(programmer) runing finish function by him/her
- customer can to run withdraw function for releasing & send value

Exacutables:
- deposit
- finish
- withdraw
Readonly:
- depositsOf

Todo:
- `save value amount` in a variable, delete/0 that after withdraw
- `getter function` for escrowID

security
- change `internal` functions to `private`
---

## Review

- Deposit

```js
function _deposit(address payee) internal virtual onlyOwner returns (bool) { 
    uint256 amount = msg.value;
    deposits[payee] += amount;
    customer = payable(payee); 
    uint256 id = ID;
    isReceive[payee][id] = false;
    emit Deposited(payee, amount, block.timestamp);
    return true;
}
```

- Withdraw

```js
function _withdraw(address payable payee, uint256 id) internal virtual onlyOwner returns (bool) { 
    require(isReceive[payee][id] == true, "not yet finished job");
    uint256 payment = deposits[payee];
    deposits[payee] = 0;
    payee.sendValue(payment);
    emit Withdrawn(payee, payment, block.timestamp);
    return true;
}
```

- Finalize

```js
function finish(uint256 id) public returns (bool) {
    require(msg.sender == customer, "recurited user can do this");
    isReceive[msg.sender][id] = true;
    return true;
}
```


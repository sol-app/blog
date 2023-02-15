---
title: 'Wrapped Erc20 Token'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'wrapped erc20 token'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - defi
  - solidity
  - wrap token
---

[Source](https://github.com/mosi-sol/live-contract-s3/blob/main/08-Wraped%20Token/Wrapped.sol)

# WRAPPED ERC20 TOKEN 
wrappedToken use for all ERC20 token, example: **WETH** for **ETH**.

### deploy
- copy ERC20 address (for example deploy erc20 Mock)
- paste address as value in Wrapped contract constructor + name + symbol
- before anything: approve wrapped contract as/is spender from base erc20 token
- `deposit` : make wrapped token and locked base token
- `withdraw` : burn wrapped and return locked token to the life cycle
- other functions same an ERC20

### develop
- using `IWrapped` interface is custom/optional : if using this intrface, then inherit erc165 & inherite Wrapped contract. need to register

### libraries
in this example use @openzeppelin/contracts --> sub --> erc20

**if you like to use flat version, use** [this](https://testnet.bscscan.com/address/0x33a1ef3987181e09d3e498ba1c1d53f380b46426#code) 
### ready/deployed
- [ERC20 Token](https://testnet.bscscan.com/address/0x22ac23beba298a839657949d1279f886b7a4df50) 
- [Wrapped Token](https://testnet.bscscan.com/address/0x33a1ef3987181e09d3e498ba1c1d53f380b46426) 


- mock token [here](https://github.com/mosi-sol/live-contract-s3/blob/main/08-Wraped%20Token/MockERC20.sol) 
---

## Review

- Deposit

```js
function deposit(uint256 amount) external returns (bool success) { 
    SafeERC20.safeTransferFrom(token, _msgSender(), address(this), amount);
    mint(amount);
    balances += amount;
    require(isBalanced(), "check not pass");
    emit Transfer(address(this), _msgSender(), amount);
    success = true;
}
```

- Withdraw

```js
function withdraw(uint256 amount) external returns (bool success) {
    require(amount <= balances, "fund is low");
    SafeERC20.safeTransfer(token, _msgSender(), amount);
    burn(amount);
    balances -= amount;
    require(isBalanced(), "check not pass");
    emit Transfer(address(this), _msgSender(), amount);
    success = true;
}

function withdraw(address to, uint256 amount) external returns (bool success) { 
    require(amount <= balances, "fund is low");
    SafeERC20.safeTransfer(token, to, amount);
    burn(amount);
    balances -= amount;
    require(isBalanced(), "check not pass");
    emit Transfer(address(this), to, amount);
    success = true;
}
```

- Refund

```js
function refund() external returns (bool success) {
    // require(_terminate() == 0, "refund denied");
    _terminate();
    require(deposited[_msgSender()] == 0, "refund denied");
    success = true;
}

function _terminate() internal returns (uint256) {
    uint256 value = deposited[_msgSender()];
    require(value <= balances, "fund is low");
    require(value > 0, "gas spend for 0!");
    _burn(_msgSender(), value);
    deposited[_msgSender()] -= value;
    balances -= value;
    require(isBalanced(), "check not pass");
    emit Transfer(address(this), _msgSender(), value);
    return value;
}
```

- Mint

```js
function mint(uint256 amount) internal {
    uint256 tmp = deposited[_msgSender()];
    _mint(_msgSender(), amount);
    deposited[_msgSender()] += amount;
    require(deposited[_msgSender()] > tmp, "amount can not be 0");
}
```

- Burn

```js
function burn(uint256 amount) internal {
    uint256 tmp = deposited[_msgSender()];
    _burn(_msgSender(), amount);
    deposited[_msgSender()] -= amount;
    require(deposited[_msgSender()] < tmp, "amount can not be 0");
}
```


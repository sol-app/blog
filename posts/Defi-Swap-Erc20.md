---
title: 'Swap Erc20 Token'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'create & remove pool + swap 2 pairs'
date: '2023-02-12'
socialImage: images/___.png
article: 'defi'
tags:
  - defi
  - solidity
  - swap
---

[Source](https://github.com/mosi-sol/live-contract-s3/tree/main/02-Swap%20No%20Fee)

# SWAP *ERC20*
- deploy `erc20mock` contract , 2 times for `token a` & `token b`
- deploy `swap` contract , put that 2 address as value's
- don't forget to `approve` the *swap address* on that *2 mock* as *spender*
- run `createValuetion` function as liquidity pool
- with your test account or other account run `swap` function

- for clear liquidity run `clearValuetion` function

ERC20 mock token for test [here](https://github.com/mosi-sol/live-contract-s3/blob/main/02-Swap%20No%20Fee/ERC20Mock.sol) 

---

## Review

- Create pool

```solidity
function createValuetion(uint _amountA, uint _amountB) external returns (uint variant) {
    require(_amountA > 0 && _amountB > 0, "why you want to spend gas!?");
    pairA.transferFrom(_msgSender(), _this(), _amountA);
    pairB.transferFrom(_msgSender(), _this(), _amountB);
    require(holdA * _amountB == holdB * _amountA, "rule is rule, read mathematicals");
    totalSupply == 0 ? variant = sqrt_(_amountA * _amountB) : 
        variant = _min(
            (_amountA * totalSupply) / holdA,
            (_amountB * totalSupply) / holdB
        );
    require(variant > 0, "imposible thing happend");
    _lock(_msgSender(), variant);
    _hold(pairA.balanceOf(_this()), pairB.balanceOf(_this()));
    emit CreateValue(_msgSender(), _amountA, _amountB, block.timestamp);
}
```

- Remove pool

```solidity
function clearValuetion(uint _variant) external returns (uint amountA, uint amountB) {
    uint balanceA = pairA.balanceOf(_this());
    uint balanceB = pairB.balanceOf(_this());
    amountA = (_variant * balanceA) / totalSupply;
    amountB = (_variant * balanceB) / totalSupply;
    require(amountA > 0 && amountB > 0, "imposible thing happend, not match value on tokens, one of them is zero");
    _release(_msgSender(), _variant);
    _hold(balanceA - amountA, balanceB - amountB);
    pairA.transfer(_msgSender(), amountA);
    pairB.transfer(_msgSender(), amountB);
    emit ClearValue(_msgSender(), _variant, block.timestamp);
}
```

- Swap 2 pairs

```solidity
function swap(address _tokenIn, uint _amountIn) external isValidToken(_tokenIn) returns (uint amountOut) {
    require(_amountIn > 0, "can not posibble the amount be zero!");
    bool isPairA = _tokenIn == address(pairA);
    (IERC20 pairIn, IERC20 pairOut, uint holdIn, uint holdOut) = isPairA
        ? (pairA, pairB, holdA, holdB)
        : (pairB, pairA, holdB, holdA);
    pairIn.transferFrom(_msgSender(), _this(), _amountIn);
    amountOut = (holdOut * _amountIn) / (holdIn + _amountIn);
    pairOut.transfer(_msgSender(), amountOut);
    _hold(pairA.balanceOf(_this()), pairB.balanceOf(_this()));
    emit Swap(_msgSender(), _amountIn, amountOut, block.timestamp);
}
```


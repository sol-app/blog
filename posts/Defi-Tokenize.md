---
title: 'Tokenize'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Tokenize method'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - 'defi'
  - 'solidity'
  - 'tokenize'
---

[Source](https://github.com/mosi-sol/live-contract-s3/blob/main/05-Tokenize/full-functions/Jewellery.sol)

# TOKENIZE

## Tokenize real word assets + shop core

> 07-07-2022

### how to run:
- deploy `tokenize.sol` with dependencies

### how to change :
- import `tokenize.sol` (jewelery shop), copy the functions and change them. i use `virtual` for this purpes.

### included:
- `ierc20` for communication with all erc20 token, but not add functions in this bootcamp lecture
- added `flat version` for friendly deploying
- `ierc165` for communication by other **tokenized shop** like this has maked by `ishop.sol`


## more info:
- when an item create by `create` function, an event called and tell new item `mint`ed from address(0). this item now tokenized from real world to the blockchain.
- when the item created, a hash code generate for:
- - tracking (holders, warehouse, veritification)
- creator of item is the `shop address`
- after that `listing` the item for sell
- or can transfer by shop address to any other address
- when item is listed, can't transfer. need to cancel listing
- after anyone `buy`ing the item, that item transfer to customer
- now customer can `list` again
- and each time you can run `verify` function for know that item is not fake

### p.s:
- how to tokenize real world into blockchain, without erc721/erc1155
- how to make market/shop based on smart contracts

*this tokenize contract : i teaching afew days ago from second bootcamp*

**Example = https://testnet.bscscan.com/address/0x1e2adb685159c692c4c4468bf70ec63212365cf2**

---

## Review

- Create

```js
function create(uint8 theType, uint8 material, uint256 price, string calldata ipfs) 
    external onlyShop virtual override returns (uint256 itemId)
{
    uint256 id = _id;
    (itemId, ) = _create(theType, material, price, ipfs);
    require(itemId > 0 && _id > id); // last security check
}
```

- Change price

```js
function changePrice(uint256 id, uint256 newPrice) 
    external payable virtual override isTheOwner(id) /*itemExist(id)*/ returns (bool) 
{
    uint256 oldPrice = _jewels[id].price;
    _changePrice(id, newPrice);
    require(oldPrice != _jewels[id].price, "why spend gas!");
    emit PriceChange(id, _msgSender(), oldPrice, newPrice, block.timestamp);
    return true;
}
```

- Listing

```js
function list(uint256 id, uint256 price) external isTheOwner(id) virtual override returns (bool)
{
    require(price > 0, "insane idea");
    require(_isListed[id] == false, "require de-list, or you can change price");
    _list(id, price);
    _isListed[id] = true;
    emit ListItem(id, _msgSender(), price, true, block.timestamp);
    return true;
}
```

- Buy

```js
function buy(uint256 id) external payable virtual override 
{
    require(_msgSender() != _jewels[id].owner, "gas spending is not allow");
    uint256 val = _msgValue();
    address oldOwner_ = _jewels[id].owner;
    require(val >= _jewels[id].price, "not enought fund for buy, check your funds");
    (bool sent, ) = oldOwner_.call{value: val}("");
    bool success = _buy(id);
    require(success && sent);
    if(_jewels[id].secondaryMarket == false){ _jewels[id].secondaryMarket = true; }
    _totalSell += 1;
    _totalValue += val;
    emit Transfer(id, oldOwner_, _msgSender(), _itemCertify[id], block.timestamp);
}
```


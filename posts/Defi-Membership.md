---
title: 'Membership'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Membership  by using NFT. [721,1155]'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - 'defi'
  - 'solidity'
  - 'auction'
---

[Source](https://github.com/mosi-sol/erc721/tree/main/Utility%20Membership)

# MEMBERSHIP
NFT as/is Membership Utility

### by using erc721 owner of id
- [contract](https://github.com/mosi-sol/erc721/blob/main/Utility%20Membership/byUisingId.sol) 
- [mock 721](https://github.com/mosi-sol/erc721/blob/main/Utility%20Membership/Mock.sol) 

### by using erc721 owners
- [contract](https://github.com/mosi-sol/erc721/blob/main/Utility%20Membership/byUsingOwnership.sol)
- [mock 721](https://github.com/mosi-sol/erc721/blob/main/Utility%20Membership/Mock.sol) 

### by using erc1155 owner of id
- [contract](https://github.com/mosi-sol/erc721/blob/main/Utility%20Membership/ERC1155OwnerIsMember.sol) 
- [mock 1155](https://github.com/mosi-sol/erc721/blob/main/Utility%20Membership/Mock1155.sol) 

use this metodology, pattern for make or use an nft for : ticket, key for locks, membership, etc...

**how to use:** deploy mock, then contract . contract need mock address(some times nft id) as value.

---

## Review

- 1155 Example

```js
IERC1155 keyNft; // keyNft - nft address = ticket
uint id;

function isMember() internal view returns (bool) {
    require(IERC1155(keyNft).balanceOf(msg.sender, id) > 0, "not valid member");
    return true;
}
```

- 721 Example by id

```js
IERC721 keyNft; // keyNft - nft address = ticket
uint id; // nft id

function isMember() internal view returns (bool) {
    require(msg.sender == IERC721(keyNft).ownerOf(id), "not valid member");
    return true;
}    
```

- 721 Example by owner

```js
IERC721 keyNft; // keyNft - nft address = ticket

function isMember() internal view returns (bool) {
    require(IERC721(keyNft).balanceOf(msg.sender) > 0, "not valid member");
    return true;
}
```


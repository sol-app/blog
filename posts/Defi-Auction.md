---
title: 'Auction'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'NFT ERC721 - English auction'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - 'defi'
  - 'solidity'
  - 'auction'
---

[Source](https://github.com/mosi-sol/live-contracts-s2/blob/main/02-NftEnglishAuction/Auction.sol)

# AUCTION

## Simple Nft Auction
- auction type: [English auction](https://en.wikipedia.org/wiki/English_auction)
- nft type : ERC721 (1 of 1)

#

### how to:
- ***deploy*** by using 
- - nft erc721 address (you are owner)
- - nft id (you are owner)
- - set the price for starting BID price

### test:
- for testing this, you will need erc721 contract like -> [here](https://github.com/mosi-sol/erc721/tree/main/v5)
- remember to call `approve for all` for using in auction
- for better experiance, in `line 74` change value

### features:
- add ERC1155
- change nft address function
- custom ERC20 for pay (buy nft)
- seller can not be bidder (require on bid function)

### important:
***withdraw by using address balance is easiest for hacking, please ensure for using by this term & role***

---

## Review

- Start

```js
function _startAuction() internal returns (bool) {
    require(!started, "started");
    require(msg.sender == seller, "not seller"); // walletOfOwner(address) => seller
    nft.transferFrom(msg.sender, address(this), nftId);
    started = true;
    endAt = block.timestamp + 2 days; // 7 days is a very famous type for artists :)
    _idCounter.increment();
    emit Start(_idCounter.current());
    return true;
}
```

- Bid

```js
function _bid() internal returns (bool) {
    require(started, "not started");
    require(block.timestamp < endAt, "ended");
    require(msg.value > highestBid, "value < highest");
    if (highestBidder != address(0)) {
        bids[highestBidder] += highestBid;
    }
    highestBidder = msg.sender;
    highestBid = msg.value;
    emit Bid(_idCounter.current(), msg.sender, msg.value);
    return true;
}
```

- End

```js
function _end() internal returns (bool) {
    require(started, "not started");
    require(block.timestamp >= endAt, "not ended");
    require(!ended, "ended");
    ended = true;
    if (highestBidder != address(0)) {
        nft.safeTransferFrom(address(this), highestBidder, nftId);
        seller.transfer(highestBid);
    } else {
        nft.safeTransferFrom(address(this), seller, nftId);
    }
    emit End(_idCounter.current(), highestBidder, highestBid);
    return true;
}
```


---
title: 'ICO'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'ico, ipo, ido ...'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - defi
  - solidity
  - ico
---

[Source](https://github.com/mosi-sol/live-contract-s3/blob/main/12-%20ICO/IcoToken.sol)

# ICO
how to deploy:
- choose an erc20 or deploy `PICO`
- deploy `ico`, set purchase token address -> pico
- deploy `TICO`, set address `ico`
- into `ico` set function `targetIco(tico)`
- into `ico` run function `release`

- mock erc20 (**PICO**) : [block explorer](https://testnet.bscscan.com/address/0x0dc313c7659fd02e1c7d247faa1075ec50f163c8#code) - [purchase token](https://github.com/mosi-sol/live-contract-s3/blob/main/12-%20ICO/PurchaseToken.sol)
- mock ico token (**TICO**) : [block explorer](https://testnet.bscscan.com/address/0xe9205ecb3c32bad2335e0e2c1a8014c9ba9ad095#code) - [ico token](https://github.com/mosi-sol/live-contract-s3/blob/main/12-%20ICO/IcoToken.sol)
- **ICO** : [block explorer](https://testnet.bscscan.com/address/0xdc4227f7be667a65bd5f72b4332de1784d4b5334#code)

- *dont forget to approve `ico` address from purchased `pico`*
- *you can change amount of `tico` in `constructor` for ico*

---

## Review

- Start

```js
function release() public onlyOwner {
    require(!isStart, "ico has been run");
    require(setup == true, "target ico not set yet");
    isStart = true;
    end = block.timestamp + duration;
}
```

- Claim

```js
function claim(uint256 amount) public payable returns (bool _success, address _holder) {
    require(isStart, "when? after run before end!");
    require(block.timestamp < end, "finished, thanks for your support");
    require(tokenPurchase.balanceOf(msg.sender) >= amount * price);
    if(holder[msg.sender] + amount <= maxPurchase) {
        require(tokenPurchase.approve(admin, amount * price)); // run by ethersjs as alternative this line of code
        // same value of 2 tokens -> amount * price <- like a wrapped :)
        // we change here: amount * price --> function setValue(....
        require(tokenPurchase.transferFrom(msg.sender, admin, amount * price)); 
        require(counter < checker, "amazing! holder full");
        holder[msg.sender] += amount;
        _success = true;
        _holder = msg.sender;
        holders[counter] = msg.sender;
        counter++;
        tokenIco.transfer(msg.sender, amount * 10 ** decimal);
        // tokenIco.transferFrom(address(this), msg.sender, amount * 10 ** decimal);
        emit Claim(msg.sender, amount, block.timestamp);            
        } else {
        _success = false;
        _holder = address(0);
    }
    wd();
}
```


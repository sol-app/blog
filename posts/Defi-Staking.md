---
title: 'Staking NFT'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'NFT Staking for reward'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - 'defi'
  - 'solidity'
  - 'staking'
---

[Source](https://github.com/mosi-sol/live-contracts/blob/main/episode-6/StakeNftForReward.sol)

# STAKING NFT
- remember to approve contract to use token
- make `erc20` & `erc721` for test

### learn about `stake logic` [here](https://github.com/mosi-sol/live-contracts-s2/tree/main/05-simple-staking) 

##

expermential code & idea. this kind of dapp can be the next hype or wave. (3rd generation of dapp`s)

##

- decress reward by decressing value from `100` in `line 8`

---

## Review

- Reward per token

```js
function rewardPerToken() public view returns (uint) {
    if (_totalSupply == 0) {
        return 0;
    }
    return
        rewardPerTokenStored +
        (((block.timestamp - lastUpdateTime) * rewardRate * 1e18) / _totalSupply);
}
```

- Earned token

```js
function earned(address account) public view returns (uint) {
    return
        ((_balances[account] *
            (rewardPerToken() - userRewardPerTokenPaid[account])) / 1e18) +
        rewards[account];
}
```

- Reward token

```js
function getReward() external updateReward(msg.sender) {
    uint reward = rewards[msg.sender];
    rewards[msg.sender] = 0;
    rewardsToken.transfer(msg.sender, reward);
}
```

- Stake & Withdraw

```js
function stake(uint _tokenId) external updateReward(msg.sender) {
    stakingToken.transferFrom(msg.sender, address(this), _tokenId);
}

function withdraw(uint _tokenId) external updateReward(msg.sender) {
    stakingToken.transferFrom(address(this), msg.sender, _tokenId);
}
```


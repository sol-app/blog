---
title: 'Crowd fundraising campagin'
metaTitle: 'Mosi-sol @github - Content sheet & information'
metaDesc: 'defi - crowd fundraising, campagin'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - defi
  - solidity
  - crowd fundraising
---

[Source](https://github.com/mosi-sol/live-contracts-s2/tree/main/21-Crowd%20Fund%20Raising%20part%202)

# CROWDFUNDRAISIN 
- how to start a fund raising campagin
- how to work
- included make by factory pattern

how to use by factory
- remove or comment line 106 here

how to deploy & run directly
- use line 106 & compile & deploy here
---

## Review

- Create campagin

```solidity
function create(address benefit, uint amount, uint end, bool timerNeed) public onlyAdmin returns (bytes16) {
    // validating the benefit address not a smartContract
    require(!_isContract(benefit), "NOT VALID: benefitial address is contract address");
    needTimer = timerNeed;
    campaginId += 1;
    uint start = block.timestamp;
    bytes16 DATA = bytes16(
        keccak256(abi.encodePacked(msg.sender, benefit, amount, campaginId, start))
    ); // type(Crowdfunding).creationCode
    isValidData.push(DATA);
    _balanceOfCampagin[campaginId] = 0;
    campagin[campaginId] = CROWD(
        campaginId,
        amount,
        start,
        start + end,
        0,
        0,
        benefit,
        DATA,
        false
    );
    emit Create(campaginId, benefit, start, amount, DATA);
    return DATA;
}
```

- Conterbute

```solidity
function conterbute(uint _campaginId) public payable isNotEnded(_campaginId) returns (bool) {
    require(_areValidToPay(_campaginId));
    if (!needTimer) {
        campagin[_campaginId].conterbuter += 1;
        campagin[_campaginId].shareCount += msg.value;
        _balanceOf[msg.sender][_campaginId] += msg.value;
        _balanceOfCampagin[_campaginId] += msg.value;
        _fundRaiser[msg.sender] = true;
        if(balanceOfCampagin(_campaginId) >= campagin[_campaginId].raiseAmount){
            campagin[_campaginId].finished = true;
        }
        emit Conterbute(_campaginId, msg.sender, block.timestamp, msg.value);
        return true;
    }
    else {
        require(campagin[_campaginId].end < block.timestamp, "time out!");
        campagin[_campaginId].conterbuter += 1;
        campagin[_campaginId].shareCount += msg.value;
        _balanceOf[msg.sender][_campaginId] += msg.value;
        _balanceOfCampagin[_campaginId] += msg.value;
        _fundRaiser[msg.sender] = true;
        if(balanceOfCampagin(_campaginId) >= campagin[_campaginId].raiseAmount){
            campagin[_campaginId].finished = true;
        }            
        emit Conterbute(_campaginId, msg.sender, block.timestamp, msg.value);
        return true;
    }
}
```

- Refund

```solidity
function refund(uint _campaginId) public onlyFundRaiser isNotEnded(_campaginId) noReentrant returns (bool, uint) {
    if(needTimer) {
        require(campagin[_campaginId].end < block.timestamp, "campagin finished");
    }
    require(_balanceOf[msg.sender][_campaginId] > 0, "you are not raise in this campagin");
    uint val = _balanceOf[msg.sender][_campaginId];
    _balanceOf[msg.sender][_campaginId] = 0;
    // payable(msg.sender).transfer(val); // old way & not secure
    (bool success, ) = msg.sender.call{value: val}("");
    if(!success){_balanceOf[msg.sender][_campaginId]=val;} // not secure method at all, but  only way in his pattern
    if(success){
        campagin[_campaginId].conterbuter -= 1;
        campagin[_campaginId].shareCount -= val;
        _balanceOfCampagin[_campaginId] -= val;
        _balanceOf[msg.sender][_campaginId] -= val;
        _fundRaiser[msg.sender] = false;
    }
    require(success);
    emit Refund(_campaginId, msg.sender, block.timestamp, val);
    return(success, val);
}
```

- Finalize

```solidity
function finalize(uint _campaginId) public onlyAdmin returns (bool, uint) {
    require(balance() >= balanceOfCampagin(_campaginId), "somethings wrong, meybe campagin not finished yet");
    require(campagin[_campaginId].finished, "campagin not finished yet");
    if(needTimer) {
        require(campagin[_campaginId].end > block.timestamp, "wait to finish the time!");
    }
    campagin[_campaginId].finished = true;
    uint _amount = _balanceOfCampagin[_campaginId];
    _balanceOfCampagin[_campaginId] = 0;
    (bool success, ) = payable(campagin[_campaginId].benefit).call{value: _amount}("");
    if(!success){_balanceOfCampagin[_campaginId] = _amount;} // not secure method at all, but  only way in his pattern
    require(success, "transaction failed");
    emit Finalize(_campaginId, campagin[_campaginId].benefit, block.timestamp, _amount);
    return (success, _amount);
}
```


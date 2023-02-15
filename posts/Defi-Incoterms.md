---
title: 'Incoterms'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Insurance rules for supply chain: incoterms'
date: '2023-02-12'
socialImage: images/___.svg
article: 'defi'
tags:
  - 'defi'
  - 'solidity'
  - 'incoterms'
---

[Source](https://github.com/mosi-sol/incoterms/blob/main/incoterms_mock2.sol)

# INCOTERMS
incoterms is the standard of supply chain insurance.

**an example in code, not completed**

---

## Review

- Register

```js
function registerNewInsure(Types _type, address _buyer, address _seller, string memory _point) public virtual returns (bool, bytes16 mo, Types) {
    (uint id, bytes4 data) = terms(_buyer, _seller, _point);
    if(id > 0 && data != 0x00000000){
        mo = _insurNum(id,data);
        rule = _type;
        insure[id][mo] = true;
        insureType[id][mo] = rule;
        return (true,mo,rule);
    }
    return (false,0x0,Types.NUN);
}
```

- Terms

```js
function terms(address _buyer, address _seller, string memory _point) private returns (uint, bytes4) {
    _counter += 1;
    agent[_counter][msg.sender] = _data(msg.sender, _counter);
    buyer[_counter][_buyer] = _data(_buyer, _counter);
    seller[_counter][_seller] = _data(_seller, _counter);
    return (_counter, _place(_point));
}
```
---


## Rules:

### The seven Incoterms® 2020 rules for any mode(s) of transport are: 
- *EXW* - Ex Works (insert place of delivery)
- *FCA*  - Free Carrier (Insert named place of delivery) 
- *CPT*  - Carriage Paid to (insert place of destination) 
- *CIP* -  Carriage and Insurance Paid To (insert place of destination)  
- *DAP* - Delivered at Place (insert named place of destination)  
- *DPU* - Delivered at Place Unloaded (insert of place of destination)  
- *DDP* - Delivered Duty Paid (Insert place of destination).  

**Note**: the DPU Incoterms replaces the old DAT, with additional requirements for the seller to unload the goods from the arriving means of transport. 

### The four Incoterms® 2020 rules for Sea and Inland Waterway Transport are: 
- *FAS* - Free Alongside Ship (insert name of port of loading) 
- *FOB* - Free on Board (insert named port of loading) 
- *CFR* - Cost and Freight (insert named port of destination) 
- *CIF* -  Cost Insurance and Freight (insert named port of destination) 

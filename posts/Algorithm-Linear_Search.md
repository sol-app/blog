---
title: 'Linear Search'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Linear search algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'linear search'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/11-%20Linear%20Search/LinearSearch.sol)

# LINEAR SEARCH
In computer science, a *linear search* or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

A *linear search* runs in at worst linear time and makes at most n comparisons, where n is the length of the list. If each element is equally likely to be searched, then linear search has an average case of n+1/2 comparisons, but the average case can be affected if the search probabilities for each element vary.

**Linear search** is rarely practical because other search algorithms and schemes, such as the binary search algorithm and hash tables, allow significantly faster searching for all but short lists.

### library
can use easily this simple contract is/as a library for implementation in/into your contract.

### iterate!
this code search from location 0(start) in an aray, but in result the location from 1 to array length(i+1).

---

## Review

- SmartContract

```solidity
function _linearSearch(uint[] calldata data, uint request) private pure returns (bool index,uint find) {
    uint n = data.length;
    uint found = 0;
    uint tmp;
    for(uint i = 0; i < n; i++) {
        if(request == data[i]){
            found = 1;
            tmp = i + 1;
            break;
        }
    }
    if(found == 1) {
        find = tmp;
        index = true;
    }
    else {
        index = false;
        find = 0;
    }
}
```

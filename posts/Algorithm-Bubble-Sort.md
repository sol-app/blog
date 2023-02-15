---
title: 'Bubble Sort'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Bubble Sort algorithm, in solidity smart contract'
date: '2023-02-14'
socialImage: images/___.svg
article: 'algorithm'
tags:
  - 'algorithm'
  - 'solidity'
  - 'bubble sort'
---

[Source](https://github.com/mosi-sol/live-contracts-s4/blob/main/10-%20Bubble%20Sort/BubbleSort.sol)

# BUBBLE SORT
in this smartcontract you can learn how to use *bubble-sort algorithm* in solidity.

### Problem Description
1. Bubble sort algorithm sort data by comparing two consecutive numbers.
2. The time complexity of this algorithm is O(n^2).

### Problem Solution
1. Compare two consecutive number.
2. Switch values if the number with higher index value is smaller.
3. Finalize the result.

---

## Review

- SmartContract

```solidity
function _sort(uint[] memory nums) internal pure {
    uint n = nums.length; // save gas
    for (uint i = 0; i < n; ++i) {
        for (uint j = 0; j < n-i-1; ++j) {
            // Comparing consecutive data and switching values if value at j > j+1.
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j] + nums[j + 1];
                nums[j + 1] = nums[j] - nums[j + 1];
                nums[j] = nums[j] - nums[j + 1];
            }
        }
        // Value at n-i-1 will be maximum of all the values below this index.
    }
}
```
